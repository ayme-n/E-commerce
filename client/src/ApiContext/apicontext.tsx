import { createContext, type ReactNode , useContext, useState } from "react";
import axios from "axios";

const  BACKEND_URL = import.meta.env.VITE_BACKEND_URL


type Product = {
  id : number
  name :string
  price :number
  image :string
  stock :number
  genre :string
  description: string
  category :string
}

type Cart = {
 
  id :number
  UserID  :number
  items :CartItem[]
}

type CartItem = {
  id    :    number    
  cartId :   number
  productId :  number
  quantity : number     
  product: Product; 

}

type User = {
  id :number
  googleID :string
  email :string
  name :string
  picture :string
  cart : Cart
}


type AppContextType = {
  dashboard_current: string,
  SetDashboard_Current:React.Dispatch<React.SetStateAction<string>>,
  products: Product[],
  getProducts: () => Promise<void>,
  BACKEND_URL:string,
  getUser:() => Promise<void>,
  User: User | null,
  Cart:Cart |null,
  SetCart:React.Dispatch<React.SetStateAction<Cart | null>>,
  token:string | null,
  SetToken:React.Dispatch<React.SetStateAction<null>>,
 
};



const AppContext = createContext<AppContextType | undefined>(undefined);

 const AppProvider = ({ children }:{children:ReactNode}) => {

  const [products, setProducts] = useState<Product[]>([]);
  
  const [User, setUser] = useState<User | null>(null); 

  const [Cart,SetCart]=useState<Cart | null >(null)

  const [token,SetToken] = useState(null)

  const [dashboard_current,SetDashboard_Current]=useState("dashboard")


  async function getProducts() {

      const res = await axios.get(`${BACKEND_URL}/products`)

      setProducts(res.data.products)
          
  }

  async function getUser() {
  
      const res = await axios.get(`${BACKEND_URL}/user`,{
        headers : {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      })
  
      setUser(res.data.user)
      SetCart(res.data.user.cart)
      
    }

  const value:AppContextType={dashboard_current,SetDashboard_Current, products,getProducts,BACKEND_URL,getUser,User,Cart,SetCart,token,SetToken}



  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};


 const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };