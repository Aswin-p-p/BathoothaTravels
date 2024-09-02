import React, { useState, useEffect } from 'react';
import './Navbar.css'

function Navbar() {
  // State to handle the visibility of the nav
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.headerma');
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`headerma ${navActive ? 'active' : ''}`}>
      <div className="navbarma">
        <div className="logoma">
          <img src="assets/blogimg/logo.png" alt="Logo" />
        </div>
        <div className={`navma ${navActive ? 'active' : ''}`}>
          <div className="btn-close1" onClick={() => setNavActive(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="linkma">
            <li><a href="/reserve">Reservation Policy</a></li><div className="line-barma"></div>
            <li><a href="/faq">FAQ</a></li><div className="line-barma"></div>
            <li><a href="/terms">Terms and Conditions</a></li>
          </div>
          <ul className="menuBarma">
          <li><a href="/">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="/service">Services</a></li>
            <li><a href="#">Holiday Packages</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="barma" onClick={() => setNavActive(!navActive)}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>
  );
};


export default Navbar