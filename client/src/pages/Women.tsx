import { WomenTop,WomenBottom,WomenShoes,WomenAccessories } from "../assets/assets"
import { Link } from "react-router-dom"

const Women = () => {
  return (
    <div className="relative grid sm:grid-cols-4 sm:h-[90vh]">

        <div className="absolute bg-black opacity-40 z-10 h-full sm:h-[90vh] w-[100vw] pointer-events-none"></div>
        
        <Link to={"/women/top"} className={`bg-center bg-no-repeat bg-cover h-160 sm:h-full`} style={{backgroundImage : `url(${WomenTop})`}}></Link>
        <Link to={"/women/bottom"} className={`bg-center bg-no-repeat bg-cover h-160 sm:h-full`} style={{backgroundImage : `url(${WomenBottom})`}}></Link>
        <Link to={"/women/shoes"} className={`bg-center bg-no-repeat bg-cover h-160 sm:h-full`} style={{backgroundImage : `url(${WomenShoes})`}}></Link>
        <Link to={"/women/accessories"} className={`bg-center bg-no-repeat bg-cover h-160 sm:h-full`} style={{backgroundImage : `url(${WomenAccessories})`}}></Link>
        
    </div>
  )
}

export default Women