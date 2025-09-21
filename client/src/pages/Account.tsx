import { Outlet } from "react-router-dom";
import Nav from "../compenents/Nav";
import { isLoggedIn } from "../helpers/isLogedin";
import Login from "./Login";
import Dashboard_SideBar from "../compenents/Dashboard_SideBar";


export const Account = () => {

    const IsLoggedIn = isLoggedIn()
  

  

  return (
   IsLoggedIn ? (
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
