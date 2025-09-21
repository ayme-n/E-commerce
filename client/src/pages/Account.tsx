import { googleLogout } from "@react-oauth/google"
import { Outlet, useNavigate } from "react-router-dom";
import Nav from "../compenents/Nav";
import { isLoggedIn } from "../helpers/isLogedin";
import Login from "./Login";
import Dashboard_SideBar from "../compenents/Dashboard_SideBar";


export const Account = () => {

    const navigate = useNavigate()
    const IsLoggedIn = isLoggedIn()
  

    function handleLogout() {
    googleLogout(); 
    localStorage.removeItem("google_token");
    navigate("/account")
  }

  

  return (
   IsLoggedIn ? (
        <>
        <Nav></Nav>
        <div className="flex h-full ">

            <Dashboard_SideBar handleLogout={handleLogout} ></Dashboard_SideBar>
            <Outlet></Outlet>
        </div>
        </>
   ):
   <Login></Login>
  )
}
