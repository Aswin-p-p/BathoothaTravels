import React from 'react'
import './ContactLocation.css'

function ContactLocation() {
  return (
  <>
       <div className="CT-details">
      <div className="location">
      <div className="box"> </div>
        <div className="locate">
          <h4>Bathootha Travel</h4>
          <p>Kinfra Techno Industrial Park, Kakkanchery,  Kerala, India </p>
        </div> 
      </div>

      <div className="vr-line fst"></div>

      <div className="contact call">
          <img src="assets/contactimage/call.png" alt=""/>
          <p>+91 8848806212 </p>
      </div>
      <div className="vr-line"></div>
      <div className="contact">
        <img src="assets/contactimage/call.png" alt=""/>
        <p><a href="">info@bathoothatravel.com </a></p>
      </div>
      
   
     </div>

     <div className="google-Map">
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1107.7477225273685!2d75.98022589387301!3d10.995156920285487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b538a2586c13%3A0xae0a551dc7d3a259!2sBathootha%20Group!5e1!3m2!1sen!2sin!4v1725422236801!5m2!1sen!2sin" width="100%" height="360px" style={{border:'0px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </div>
  </>
  )
}

export default ContactLocation