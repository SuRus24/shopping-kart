import {Outlet} from 'react-router-dom'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

import React from 'react'

function Layout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer/>
    </div>
  )
}

export default Layout