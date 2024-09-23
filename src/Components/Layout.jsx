import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
        {/* `````````````````$Footer will be define here$`````````````````*/}
    </div>
  )
}

export default Layout;