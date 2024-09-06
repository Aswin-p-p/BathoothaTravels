import React from 'react'
import './Service.css'
import { Link } from 'react-router-dom';

function ServiceContainer() {
  return (
    <>
         <div className="serv-container">
      <div>
      <h2>Your Journey, Our Mission</h2>
      <p>Ticketing ,Hotel Booking ,Passport Assistance ,Foreign Exchange</p>
    </div>
     </div>
     <div className="service-theme">
        <img src="assets/serviceimage/sevice-banner.jpg" alt=""/>

        <div  className="svRow">
            <div  className="colnSv">
                <h1>Ensuring the well-being of your business travelers, anytime, anywhere</h1>
            </div>
            <div  className="coln2Sv">
              <div  className="subDiv">
                <p>For small businesses, the key to a successful trip is having confident, well-supported employees. That's why we offer Traveler Tracking through our dedicated team, allowing you to quickly locate and assist your travelers when they need it the most.</p>
                <p>When your team requires assistance, our travel experts are ready to help in their native language—we have consultants fluent in over 10 languages. Additionally, our website offers convenient self-service options for quick and easy support.</p>
              </div>
              <div  className="sv-btn"><a href="/service_cooperative">  <button>EXPLORE MORE</button> </a></div>
            </div>
        </div>
     </div>
    </>
  )
}

export default ServiceContainer