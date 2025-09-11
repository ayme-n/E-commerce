import { favicon , account , search , cart} from "../assets/assets"
import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <div className="flex justify-between items-center  w-full px-6 py-3 border-b-1 border-gray-300 ">
    
        <Link to={"/"}><img src={favicon} alt="" /></Link>
        
        <div className="ml-14" >
            <Link to={"/"}>Home</Link>
        </div>

        <div className="flex gap-x-2 ">
            <Link to={"/"}><img src={account} alt="" /></Link>
            <Link to={"/"}><img src={cart} alt="" /></Link>
            <Link to={"/"}><img src={search} alt="" /></Link>
        </div>

    </div>
  )
}

export default Nav