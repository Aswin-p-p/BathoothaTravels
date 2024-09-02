import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      <div className="guidence">
        <div className="coln1">
          <div className="cont1 line">
            <div className="circle">
              <img src="assets/blogimg/1.png" alt="Assured best fares" />
            </div>
            <p>Assured <br /> best fares</p>
          </div>
          
          <div className="cont1 line">
            <div className="circle">
              <img src="assets/blogimg/2.png" alt="24x7 Customer Support" />
            </div>
            <p>24x7 Customer <br /> Support</p>
          </div>
          
          <div className="cont1">
            <div className="circle">
              <img src="assets/blogimg/3.png" alt="One Stop for All Travel Services" />
            </div>
            <p>One Stop for <br /> All Travel Services</p>
          </div>
        </div>

        <div className="line1"></div>

        <div className="coln1 coln2">
          <div className="subscribe">
            <h6>Subscribe to our newsletter</h6>
            <p>Be the first to get latest offers and News directly in your inbox</p>
          </div>
          <div className="txtEmail">
            <input type="text" placeholder="Your Email Address" />
            <button><img src="assets/blogimg/send.png" alt="Send" /></button>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>
          Copyright &copy; 2024 bathootha | 
          <a href="">Privacy Policy</a> |
          <a href=""> About Us</a> |
          <a href="/faq"> FAQ</a> |
          <a href=""> Contact Support</a>
        </p>
      </div>
    </>
  );
}

export default Footer;
