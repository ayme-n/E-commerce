import { useParams } from "react-router-dom"
import Nav from "../compenents/Nav"
import { Link } from "react-router-dom";
import Product from "../compenents/ProductCard";
import axios from "axios";
import { useState,useEffect } from "react";

const  BACKEND_URL = import.meta.env.VITE_BACKEND_URL

type Product = {
  id : number
  name :string
  price :number
  image :string
  stock :number
  genre :string
  descreption: string
  category :string
}


export const Shop = () => {

    const {genre,category} = useParams<{genre:string;category:string}>();

    const [Products,SetProducts] = useState<Product[]>([])


    async function GetProducts() {

          const res = await axios.get(`${BACKEND_URL}/products`)

          SetProducts(res.data.products)
          
      }

    useEffect(()=>{
        GetProducts()
    },[])

  return (
    <>
    <Nav/>
    <div className="px-5 py-4 flex flex-col gap-y-5">
        <p className="text-xs hidden sm:block"> <Link className="px-2" to={"/"} > home</Link> | <Link className="px-2" to={`/${genre}`}>{genre}</Link> | <span className="text-gray-500 px-2">{category}</span> </p>
        <h1 className="text-3xl self-center mb-8">{category}</h1>
        

        { Products && <div className=" grid mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-fit gap-y-5 self-center gap-x-10">

        
          
          {Products.map((p)=>{
            
            return p.genre==genre?.toLowerCase() && p.category===category?.toLowerCase() ?(
               <Product key={p.id} id={p.id} img={p.image} name={p.name} price={p.price} genre={genre} category={category}/>
            ) : null
          })}
          

        </div>
        }

    </div>
    </>
  )
}
