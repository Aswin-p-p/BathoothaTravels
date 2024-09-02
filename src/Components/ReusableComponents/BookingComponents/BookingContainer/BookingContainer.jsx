import React from 'react'
import './BookingContainer.css'
function BookingContainer() {
  return (
    <>
         <div className="AB-container">
      <div>
      <h2>Plan your travel with confidence</h2>
      <p>Find and book a great expierience</p>
    </div>
     </div>
     <div className="booking-details">
      <div className="bk-coln bk-coln1">
        <h2>Your Journey Starts Here: <br/>
          Book Flights with Ease 
          and Confidence</h2>
          <p>Welcome to our flight booking page, your gateway to exploring the world with ease and convenience. Whether you're planning a business trip, a family vacation, or a spontaneous getaway, our streamlined booking system is designed to make the process as simple and enjoyable as possible</p>
      </div>
      <div className="breakLine"></div>
      <div className="bk-coln">
        <div className="bk-formHead">
          <h4>Your Gateway to Global Travel <br/><span>Share Your Travel Plan</span></h4>
          <div className="bk-icons">
            <div className="iconSec"><img src="assets/bookingimage/plane.png" alt=""/><p>Flights</p></div>
            <div className="iconSec"><img src="assets/bookingimage/hotel.png" alt=""/><p>Hotel</p></div>
          </div>
        </div>
          <div className="booking-form">
              <form className="boform">
                <input type="text" className='bookinput' placeholder="From"/>
                <input type="text" className='bookinput'  placeholder="To"/>
                <input type="text" className='bookinput'  placeholder="Depart Date"/>
                <input type="text" className='bookinput'  placeholder="Return Date"/>
                <input type="text" className='bookinput'  placeholder="Travellor Economy"/>
                <input type="text" className='bookinput'  placeholder="Preffered Airport(Optional)"/>
              </form>
              <div className="searchBtn"><button>Search</button></div>
          </div>
        
      </div>
     </div>
    </>
  )
}

export default BookingContainer