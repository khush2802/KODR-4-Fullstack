import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-4 ">
     <h1>Logo</h1>
     <NavLink to="/main">Home</NavLink>
     <NavLink to="/main/about">About</NavLink>
     <NavLink to="/main/shop" >Shop</NavLink>
      
    </div>
  )
}

export default Navbar
