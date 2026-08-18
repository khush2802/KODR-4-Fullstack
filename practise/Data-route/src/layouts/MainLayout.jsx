import React from 'react'
import { NavLink, Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
     <Outlet/>
     {/* <NavLink/> */}
    
      
    </div>
  )
}

export default MainLayout
