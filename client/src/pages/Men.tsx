import { MenTop , MenBottom , MenAccessories , MenShoes } from "../assets/assets"
import { Link } from "react-router-dom"

const Men = () => {
  return (
    <div className="relative grid sm:grid-cols-4  sm:h-[90vh]">

        <div className="absolute bg-black opacity-50 z-10 h-full sm:h-[90vh] w-[100vw] pointer-events-none"></div>
        
        <Link to={"/men/top"} className={`bg-center  bg-no-repeat bg-cover h-160 sm:h-full  `} style={{backgroundImage : `url(${MenTop})`}}></Link>
        <Link to={"/men/bottom"} className={`bg-center  bg-no-repeat bg-cover h-160 sm:h-full `} style={{backgroundImage : `url(${MenBottom})`}}></Link>
        <Link to={"/men/shoes"} className={`bg-center  bg-no-repeat bg-cover h-160 sm:h-full `} style={{backgroundImage : `url(${MenShoes})`}}></Link>
        <Link to={"/men/accessories"} className={`bg-center  bg-no-repeat bg-cover h-160 sm:h-full  `} style={{backgroundImage : `url(${MenAccessories})`}}></Link>
        
    </div>
  )
}

export default Men