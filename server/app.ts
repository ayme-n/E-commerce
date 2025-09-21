import express , {Request,Response} from "express";
import axios from "axios";
import cors from "cors";
import { JWT, OAuth2Client } from "google-auth-library";
import { PrismaClient } from "./generated/prisma";
import  jwt  from "jsonwebtoken";
import { NextFunction } from "express";
import multer from "multer";
import cloudinary from "./helpers/cloudinaryConfig";
import { create } from "domain";

const prisma = new PrismaClient();

const upload = multer({ dest: "uploads/" });

const app = express();
app.use(cors());
app.use(express.json());


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


app.post("/auth", async (req:Request,res:Response)=>{

    try{


        const {token} = req.body; //googke token of success login

        const ticket = await client.verifyIdToken({
        idToken:token,
        audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        
        if (!payload) {
            throw new Error("Invalid token payload");
        }

        const { sub, email, name, picture }  = payload;

        if (!email || !name || !picture) {
            return res.status(400).json({ error: "Google account did not return email" });
        }

        let user = await prisma.user.findUnique({
            where : {
                googleID : sub
            }
        })

        if(!user){
             user = await prisma.user.create(
                {
                    data : {
                        email,
                        name,
                        picture,
                        googleID:sub,
                        
                    }
                }
            )
        }

        const client_token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET || "supersecret",
        { expiresIn: "7d" }
        );

        return res.json({ client_token, user });
    
        
    }catch (err){
        console.error(err)
        res.status(500).json({ message: "Server error" });
    }

    

})


app.listen("4000",()=>{
    console.log(".")
})

app.post("/product", async (req:Request, res:Response) => {
  try {

    const {name,price,stock,category,descreption,ImageURL,genre}= req.body
    
    
        const product = await prisma.product.create(
            {
                data : {
                    name,
                    price,
                    image:ImageURL,
                    stock,
                    description:descreption,
                    category,
                    genre
                }
            }
        )
        res.json({ product });
    
   
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/cart", async (req: Request, res: Response) => {
  try {
    const { productId, UserID ,size} = req.body;

     let cart = await prisma.cart.findUnique({
      where: { UserID: UserID },
    });

    if (!cart) {
      cart = await prisma.cart.create({
        data: { UserID: UserID },
      });
    }

    const cartItem = await prisma.cartItem.upsert({
      where: {
        cartId_productId: { cartId: cart.id, productId },
      },
      update: {
        quantity: { increment: 1 },
      },
      create: {
        cartId: cart.id,
        productId,
        quantity: 1,
        size
      },
    });

    res.json({ cart });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/cart/item/:id", async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const { Quantity} = req.body;

    const cartItem = await prisma.cartItem.update({
      where:{
      id:parseInt(id,10)
      },
      data: {
        quantity: Quantity,
      }
    });

    res.json({ cartItem });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});


app.delete("/cart/item/:id", async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
   
    const cartItem = await prisma.cartItem.delete({
      where:{
      id:parseInt(id,10)
      }
    });

    res.json({ cartItem });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});



app.get("/products", async (req: any, res: Response) => {
  
  try{
    const products = await prisma.product.findMany();
    res.json({products})
  }catch(err){
    console.error(err)
  }

});

app.get("/user"  ,authMiddleware, async (req: any, res: Response) => {

  try{
    
  
    const dbUser  = await prisma.user.findUnique({
      where : {
        id: req.user.userId
      }
      ,
      include : {
        cart: {
          include: {
            items: {
              include: {
                product: true // optional if you want product info
              }
            }
          }}
      }
    })

    res.json({message : "done",user:dbUser })
  }
  catch(err){
    console.error(err)
  }


});

app.post("/upload", upload.single("file"), async (req:Request, res:Response) => {
  try {
    
    if(req.file) {
        const result = await cloudinary.uploader.upload(req.file.path);
        res.json({ url: result.secure_url });
    }
   
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
});

function authMiddleware(req: any, res: Response, next: NextFunction) {
  const header = req.headers["authorization"];
  if (!header) return res.sendStatus(401);

  const token = header.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "supersecret");
    req.user = decoded;
    next();
  } catch {
    return res.sendStatus(403);
  }
}