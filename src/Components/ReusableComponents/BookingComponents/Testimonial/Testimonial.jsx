import React from 'react'
import './Testimonial.css'

function Testimonial() {
  return (
   <>
      <div className="ab-testimonials">
      <h4>Testimonials</h4>
      <div className="testimonials">
        <div className="photos"><img src="assets/bookingimage/testi-img1.png" alt=""/></div>
        <p>The team behind our travel agency is a group of passionate travel enthusiasts and industry professionals dedicated to creating exceptional travel experiences.</p>
        <p id="name">Isthifa Safeer <br/> <span>Abudhabi </span></p>
      </div>

      <button className="explore">EXPLORE MORE</button>
     </div>
   </>
  )
}

export default Testimonial