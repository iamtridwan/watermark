import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Nav from './nav/Nav'

const Layout = () => {
  return (
    <div className='layout'>
        <Nav />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout