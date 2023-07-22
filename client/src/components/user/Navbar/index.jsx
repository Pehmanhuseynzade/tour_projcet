import React from 'react'
import "./navbar.scss"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <header>
      <div>
      <Link><img src="https://demo.mekshq.com/trawell/wp-content/themes/trawell/assets/img/trawell_logo_mini.png" alt="navimage" /></Link>
      </div>
      <div className='nav-links'>
        <Link to=''><p>Home</p></Link>
        <Link to='about'><p>About</p></Link>
        <Link to='countries'><p>Countries</p></Link>
        <Link to='tours'><p>Tours</p></Link>
        <Link to='contact'><p>Contact</p></Link>
        <Link to='bought'><p>Bought</p></Link>
      </div>
    </header>
  )
}

export default Navbar