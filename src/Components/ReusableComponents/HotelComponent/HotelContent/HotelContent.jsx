import React from 'react'
import './HotelContent.css'

function HotelContent() {
  return (
    <>
          <div className="HB-container">
      <div className="hero-content">
      <h2>Hotel Booking</h2>
      <p>Ticketing   &nbsp;&nbsp; | &nbsp;&nbsp;  Hotel Booking  &nbsp;&nbsp; | &nbsp;&nbsp;  Passport Assistance &nbsp;&nbsp; | &nbsp;&nbsp; Foreign Exchange</p>
    </div>
     </div>

     <div className="HB-section">
        <div className="HBSection-col1">
            <h1>Where Comfort Meets Convenience</h1>
            <button>Contact Us </button>
        </div>
        <div className="HBSection-col1 HBcoln2">
            <p>Book your stay at leading hotels worldwide with our simple and intuitive hotel booking form. Just input your destination, travel dates, and the number of guests to discover the best available rooms. Once we've secured the ideal hotel for you, we'll ensure your travel and stay plans are completely hassle-free.</p>
        </div>
     </div>
    </>
  )
}

export default HotelContent