import { men , women } from "../assets/assets"
import { Link } from "react-router-dom"

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full sm:flex-row">

        <div className="absolute w-full h-full pointer-events-none bg-black opacity-55  z-2"></div>
        
        <div className="flex overflow-hidden w-[100vw]  sm:w-[50vw]">
        
            <Link to={"/"}><img src={men} alt=""  className=" transition delay-10 duration-1500 hover:scale-108"/></Link>

        </div>

        <div className=" flex overflow-hidden w-[100vw]  sm:w-[50vw]">
        
            <Link to={"/"}><img src={women} alt="" className="transition delay-10 duration-1500 hover:scale-108"  /></Link>

        </div>
    </div>
  )
}
