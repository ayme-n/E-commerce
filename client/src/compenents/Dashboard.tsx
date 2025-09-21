import Dashboard_Card from "./Dashboard_Card"
import { logout,orders , cart } from "../assets/assets"
import { useEffect } from "react"
import { useAppContext } from "../ApiContext/apicontext"

const Dashboard = () => {

    const {SetDashboard_Current} = useAppContext()

  
  useEffect(()=>{
      SetDashboard_Current("dashboard")
    },[])

  return (
    <div className="grid grid-cols-1 py-10 gap-y-5 justify-items-center items-center w-full h-full self-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <Dashboard_Card img={orders} text="orders" link="/orders" />
        <Dashboard_Card img={cart} text="cart" link="/cart" />
        <Dashboard_Card img={logout} text="logout" link="" />
    </div>
  )
  
}

export default Dashboard