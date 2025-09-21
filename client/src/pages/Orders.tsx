
import { useEffect } from "react"
import { useAppContext } from "../ApiContext/apicontext"

const Orders = () => {

  const {SetDashboard_Current} = useAppContext()
    
  useEffect(()=>{
    SetDashboard_Current("orders")
  },[])
  return  (
  
    <div className=" w-full  flex justify-center items-center"><h1 className="text-2xl font-extralight  ">Comming Soon</h1></div>

  ) 
  
}

export default Orders