import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='site-footer'>
        <div className="container">
            <div className='d-flex'>
                <div className='copyright'>
                    <p>Copyright @ react.com | All rights reserved.</p>
                </div>
                <div className='ft-menu'>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer