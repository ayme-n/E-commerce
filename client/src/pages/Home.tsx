import Nav from "../compenents/Nav"
import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <>
    <div>
      <Nav></Nav>
      <Outlet/>
    </div>
    </>
  )
}

export default Home