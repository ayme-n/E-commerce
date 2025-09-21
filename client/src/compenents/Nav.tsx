import { uxidia , account , search , cart} from "../assets/assets"
import { Link } from "react-router-dom"

const Nav = () => {

  return (
    <div className="flex z-20 justify-between items-center h-[10vh] sticky top-0 bg-white  w-full px-6 py-3 border-b-1 border-gray-300 ">
    
        <Link to={"/"}><img src={uxidia} width={90} alt="" /></Link>
        
        <div >
            <Link to={"/"}>Home</Link>
        </div>

        <div className="flex gap-x-2 ">
            <Link to={"/account"}><img src={account} alt="" /></Link>
            <Link to={"/account/cart"}><img src={cart} alt="" /></Link>
            <Link to={"/"}><img src={search} alt="" /></Link>
        </div>

    </div>
  )
}

export default Nav