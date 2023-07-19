import React from 'react'
import "./navbar.scss"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <header>
      <div>
      <img src="https://demo.mekshq.com/trawell/wp-content/themes/trawell/assets/img/trawell_logo_mini.png" alt="navimage" />
      </div>
      <div className='nav-links'>
        <Link><p>Home</p></Link>
        <Link><p>About</p></Link>
        <Link><p>Countries</p></Link>
        <Link><p>Tours</p></Link>
        <Link><p>Contact</p></Link>
        <Link><p>Login</p></Link>
      </div>
    </header>
  )
}

export default Navbar