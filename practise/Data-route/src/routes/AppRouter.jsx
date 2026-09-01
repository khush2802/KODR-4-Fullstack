import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from '../layouts/AuthLayout';
import LoginForm from '../pages/LoginForm';
import RegisterForm from '../pages/RegisterForm';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Shop from '../pages/Shop';
import { getData } from '../api/productApi';
import Product from '../pages/Product';


const AppRouter = () => {

     let router = createBrowserRouter([
          {
               path:"/main",
               element:<MainLayout/>,

               children:[{
                    path:"",
                    element:<Home/>
               },{
                    path:"about",
                    element:<About/>
               },{
                    path:"shop",
                    loader:getData,
                    hydrateFallbackElement:<h1>Loading...</h1>,
                    element:<Product/>
               }]
          }
     ])


  return <RouterProvider
     router={router}
  />
}

export default AppRouter
