import React, { useState } from 'react';
import './Heade.css'

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const toggleNavBar = () => {
    setIsActive(!isActive);
  };

  const toggleNavBarHide = () => {
    setIsHidden(!isHidden);
    setIsActive(!isActive);
  };

  return (
    <>
        <header>
    <div className="navbar">
       <div className="logo"><img src='assets/homeimg/logo.png' alt="" /></div>
       <div className={`nav ${isActive ? 'active' : ''} ${isHidden ? 'hide' : ''}`}>
        <div  className="btn-close1" onClick={toggleNavBarHide}><i className="fa-solid fa-xmark"></i></div>
        <div  className="link">
          <li><a href="/reserve">Reservation Policy </a></li><div className="line-bar"></div>
          <li><a href="/faq">FAQ </a></li><div class="line-bar"></div>
          <li><a href="/terms">Terms and Conditions</a></li>
        </div>

       <ul className="menuBar">
      
            <li><a href="">About Us</a></li>
            <li><a href="/service">Services</a></li>
            <li><a href="">Holiday Packages</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="">Contact Us</a></li>
        </ul>
      </div>
        <div className="bar"  onClick={toggleNavBar}><i className="fa-solid fa-bars"></i></div>
       </div>
       
</header>
    </>
  )
}

export default Header