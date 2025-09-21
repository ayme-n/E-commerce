import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import { Account } from './pages/Account'
import { AppProvider } from './ApiContext/apicontext'
import Orders from './pages/Orders'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Cart from './pages/Cart'
import Men from './pages/Men'
import Women from './pages/Women'
import AddProduct from './pages/AddProduct'
import { Shop } from './pages/Shop'
import { Hero } from './compenents/Hero'
import Dashboard from './compenents/Dashboard'
import Admin from './pages/Admin'
import Product from './pages/Product'
import './index.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children : [
      {
        index:true,
        element:<Hero/>
      },
      {
        path:"/men",
        children : [
          {
            index:true,
            element:<Men/>
          }
        ]
      },
      {
        path:"/women",
        element:<Women/>
      }
    ]
  },
  {
    path: "/account",
    element: <Account />,
    children : [
      {
        index:true,
        element:<Dashboard/>
      },
      {
        path:"/account/orders",
        element :<Orders/>
      },
      {
        path:"/account/cart",
        element:<Cart/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/admin",
    children:[
      {
        index:true,
        element:<Admin/>
      }
      ,
      {
        path:"/admin/add",
        element:<AddProduct/>
      }
    ]
  },
  {
    path:"/:genre/:category",
    children:[
      {
        index:true,
        element:<Shop/>
      },
      {
        path:"/:genre/:category/:id",
        element:<Product/>
      }
    ]
  }
  
]);

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID} >
    <StrictMode>
    <AppProvider>
        <RouterProvider router={router} />
    </AppProvider>
    </StrictMode>
  </GoogleOAuthProvider>,
  
)
