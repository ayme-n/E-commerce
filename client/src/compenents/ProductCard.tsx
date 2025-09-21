import { Link } from "react-router-dom"

const Product = ({id,img,price,name,genre,category}:{id:number,img:string,price:number,name:string,genre?:string,category?:string}) => {
  return (
    <Link to={`/${genre}/${category}/${id}`}>
    <div className="flex flex-col gap-y-2 ">
        <div  style={{ backgroundImage: `url(${img})` }} className={`border-1 border-black bg-cover bg-no-repeat bg-center w-55 h-70`}></div>
        <p className="text-xs">{name}</p>
        <span className="text-xs">{price} DA</span>
    </div>
    </Link>
  )
}

export default Product