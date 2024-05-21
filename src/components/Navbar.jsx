import React from 'react'
import SiteLogo from './images/site-logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="d-flex">
          <div className="site-logo">
            <a href="#"><img src={SiteLogo} alt /></a>
          </div>
          <div className="main-menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar