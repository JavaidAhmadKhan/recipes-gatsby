import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
        {children}
      <Navbar />
      <Footer />
    </React.Fragment>
  )
}

export default Layout
