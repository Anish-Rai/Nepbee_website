import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <>
        <Navbar />
          <div className=' lg:px-44'>
            {children}
          </div>
        <Footer />
    </>
  )
}

export default Layout