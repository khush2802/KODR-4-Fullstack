import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from '../layouts/AuthLayout';
import LoginForm from '../pages/LoginForm';
import RegisterForm from '../pages/RegisterForm';


const AppRouter = () => {

     let router = createBrowserRouter([
          {
               path:"/",
               element:<AuthLayout/>,

               children:[{
                    path:"",
                    element:<LoginForm/>
               },{
                    path:"register",
                    element:<RegisterForm/>
               }]
          }
     ])


  return <RouterProvider
     router={router}
  />
}

export default AppRouter
