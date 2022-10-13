import React from 'react'
import DownLoad from './DownLoad'
import Footer from './Footer'
import NavBars from './NavBars'

function Layout({children}) {
  
  return (
    <div>
      <NavBars/>
      
      {children}
      <DownLoad />
      <Footer/>
    </div>
  )
}

export default Layout
