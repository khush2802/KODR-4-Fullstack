import React from 'react'
import {Outlet} from 'react-router'

const Home = () => {
  return (
    <div>
      <h1>
          Home page
          <Outlet />
      </h1>
    </div>
  )
}

export default Home
