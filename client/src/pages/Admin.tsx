import Nav from "../compenents/Nav"
import { Link, Outlet } from "react-router-dom"

const Admin = () => {
  return (
    <>
    <Nav></Nav>
    <div className="flex items-center justify-center h-[90vh]">
        <Link to={"/admin/add"} className="bg-gray-400 text-white rounded-md font-semibold p-2" >Add Product</Link>
        <Outlet/>
    </div>
    </>
  )
}

export default Admin