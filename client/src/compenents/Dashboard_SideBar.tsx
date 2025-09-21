import { logout } from "../assets/assets"
import DashboardIcon from "../assets/dashboard.svg?react";
import CartIcon from "../assets/cart.svg?react";
import OrdersIcon from "../assets/orders.svg?react";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../helpers/useLogout";
import { Link } from "react-router-dom"
import { useAppContext } from "../ApiContext/apicontext"

const Dashboard_SideBar = () => {

  const navigate = useNavigate()
  const Logout = useLogout()

    const {dashboard_current,SetDashboard_Current}=useAppContext();


  return (
    <div  className="flex flex-col w-20 justify-center sm:justify-start  gap-y-5 py-7 pl-7 sm:p-7 sticky top-[10vh]  bg-gray-100 sm:w-70 h-[90vh] border-r-1 border-gray-300">

      <div className="flex gap-x-5    items-center border-gray-400 sm:border-b-1 pb-6 border-0  " >
        {/*<img width={30} className="cursor-pointer hidden sm:block " src={dashboard} alt="" />*/}
        <DashboardIcon onClick={()=>navigate("/account")}  className={`h-[30px] sm:h-[55px]  cursor-pointer w-80  sm:w-fit ${dashboard_current==="dashboard"? "text-purple-500" : "text-black"} `}/>
        <Link to={"/account"}  onClick={()=>{SetDashboard_Current("dashboard");}} className={`text-center w-full sm:text-left ${dashboard_current==="dashboard"? "text-purple-500" : "text-black"} hidden`}><span className="hidden sm:block">Dashboard</span></Link>
      </div>

      <div className="flex gap-x-5  items-center  border-gray-400 sm:border-b-1 pb-6 border-0">
        <OrdersIcon onClick={()=>navigate("/account/orders")}  className={`h-[30px] w-60 sm:h-[55px] sm:w-fit  cursor-pointer    ${dashboard_current==="orders"? "text-purple-500" : "text-black"} `}/>
        <Link to={"/account/orders"}  className={`text-center w-full sm:text-left ${dashboard_current==="orders"? "text-purple-500" : "text-black"}`}><span className="hidden sm:block">Orders</span></Link>
      </div>

      <div className="flex gap-x-5  items-center  border-gray-400 sm:border-b-1 pb-6 border-0">
        <CartIcon onClick={()=>navigate("/account/cart")} className={`h-[30px] w-60 sm:h-[55px]  sm:w-15 cursor-pointer    ${dashboard_current==="cart"? "text-purple-500" : "text-black"} `}/>
        <Link to={"/account/cart"} className={`text-center w-full sm:text-left ${dashboard_current==="cart"? "text-purple-500" : "text-black"}`}><span className="hidden sm:block">Cart</span></Link>
      </div>

      <div className="flex gap-x-5  items-center ">
        <img onClick={()=>{Logout()}}  className="cursor-pointer h-[30px] w-8 sm:h-[38px]   sm:w-fit   " src={logout} alt="" />
        <span className={`cursor-pointer text-center w-full sm:text-left hidden sm:block`} onClick={()=>{Logout()
          SetDashboard_Current("dashboard")
        }}>Logout</span>
      </div>

    </div>
  )
}

export default Dashboard_SideBar