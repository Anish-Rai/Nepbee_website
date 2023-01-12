import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <>
        <Navbar />
          <div className='p-4 lg:px-44'>
            {children}
          </div>
        <Footer />
    </>
  )
}

export default Layout