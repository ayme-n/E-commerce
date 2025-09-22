import { Outlet } from "react-router-dom";
import Nav from "../compenents/Nav";
import Login from "./Login";
import Dashboard_SideBar from "../compenents/Dashboard_SideBar";
import { useAppContext } from "../ApiContext/apicontext";
export const Account = () => {

    const {token} = useAppContext()

  

  return (
   token ? (
        <>
        <Nav></Nav>
        <div className="flex h-full ">

            <Dashboard_SideBar></Dashboard_SideBar>
            <Outlet></Outlet>
        </div>
        </>
   ):
   <Login></Login>
  )
}
