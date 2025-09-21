import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "../compenents/Nav";
import {  useEffect, useState } from "react";
import { useAppContext } from "../ApiContext/apicontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Product = () => {

    const navigate = useNavigate()

    
    
    const {products,getProducts,BACKEND_URL,User} = useAppContext();
    const {genre,category,id} = useParams<{genre:string;category:string;id:string}>();
    const [size,Setsize]=useState("L")
    const [AddCart,SetAddCart] = useState(false)


    const product = products.find((p) => p.id === parseInt(id ?? "", 10));

    async function handleAdd() {
        const UserID = User?.id
        SetAddCart(true)

        await axios.post(`${BACKEND_URL}/cart`,{
            productId:product?.id,UserID,size
        })

        
    }

    useEffect(()=>{
        if (!localStorage.getItem("token")) {
    navigate("/login", { replace: true });
  }
        getProducts();
    },[])



    

  return (
    <>
        <Nav></Nav>
        <div className="flex flex-col gap-y-8 mx-3 my-4">
            <p className="text-xs hidden sm:block"> <Link className="px-2" to={"/"} > home</Link> | <Link className="px-2" to={`/${genre}`}>{genre}</Link> | <Link to={`/${genre}/${category}`} className="px-2">{category}</Link> | <span className="text-gray-500 px-2">{product?.name}</span> </p>
        
            {  product && 

                <div className="flex flex-col justify-center gap-x-5  md:flex-row md:gap-x-0 self-center ">
                <div style={{ backgroundImage: `url(${product.image})` }} className="border-1 self-center border-gray-400  bg-cover bg-no-repeat bg-center w-100  h-100 md:w-70 md:h-90 lg:w-100 lg:h-90 xl:w-130 xl:h-160  "></div>
                <div className="flex flex-col gap-y-2  p-7">
                    <h1 className="text-3xl">{product.name}</h1>
                    <span className="text-2xl">{product.price}DA</span>
                    <span className="">size: {size}</span>
                    <div className="flex gap-x-1 w-fit h-fit ">
                        <div className={`border-1  text-sm p-1 cursor-pointer  w-13 h-13 flex justify-center items-center ${size==="XS" ? "border-black" : "border-gray-400"}`} onClick={()=>Setsize("XS")}>XS</div>
                        <div className={`border-1 text-sm p-1 cursor-pointer  w-13 h-13 flex justify-center items-center ${size==="S" ? "border-black" : "border-gray-400"}`}onClick={()=>Setsize("S")}>S</div>
                        <div className={`border-1 text-sm p-1 cursor-pointer  w-13 h-13 flex justify-center items-center ${size==="ML" ? "border-black" : "border-gray-400"}`}onClick={()=>Setsize("ML")}>M</div>
                        <div className={`border-1 text-sm p-1 cursor-pointer  w-13 h-13 flex justify-center items-center ${size==="L" ? "border-black" : "border-gray-400"}`} onClick={()=>Setsize("L")}>L</div>
                        <div className={`border-1 text-sm p-1 cursor-pointer  w-13 h-13 flex justify-center items-center ${size==="XL" ? "border-black" : "border-gray-400"}`} onClick={()=>Setsize("XL")}>XL</div>
                        <div className={`border-1 text-sm p-1 cursor-pointer  w-13 h-13 flex justify-center items-center ${size==="XXL" ? "border-black" : "border-gray-400"}`} onClick={()=>Setsize("XXL")}>XXL</div>
                        <div className={`border-1 text-sm p-1 cursor-pointer  w-13 h-13 flex justify-center items-center ${size==="XXXL" ? "border-black" : "border-gray-400"}`} onClick={()=>Setsize("XXXL")}>XXXL</div>

                    </div>
                    <button onClick={handleAdd} className="bg-black my-2 cursor-pointer rounded-md  font-semibold text-gray-200 text-center w-30 h-12 ">add</button>
                    
                    <p  className="w-100 my-2 text-sm  sm:w-100  lg:w-110">{product.description}</p>
                      
                    {
                        AddCart && 
                        
                        <div className="bg-green-500 max-w-98 rounded-md text-sm text-amber-50 h-10 px-4 flex items-center  justify-between">
                            <p><span className="font-bold text-xs">{product.name}</span> successfully added to cart</p>
                            <Link to={"/account/cart"} className="bg-white text-black  rounded-md sm:px-2 sm:py-1 text-xs font-medium p-1">View Cart</Link>
                        </div>
                    }
                    
                </div>
            </div>
            }
        </div>
    </>
  )
}

export default Product