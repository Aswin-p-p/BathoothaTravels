import React from 'react'
import './HotelAbout.css'

function HotelAbout() {
  return (
   <>
   <div className="HB-coln3Sect">
        <p>After you’ve settled on your holiday destination and travel dates, the next important step is booking your flight tickets. We know that securing the right flight can be overwhelming, especially during the busy holiday season. With countless options to choose from, you want to find the best fare, match your travel dates, minimize travel time, and ensure quality service. It’s a complex puzzle that can leave you feeling frustrated.</p>
        <p>At Bathootha Travels we’re here to take that burden off your shoulders. We simplify the entire process by handling your flight bookings, so you can focus on enjoying your upcoming trip. As an authorized agency, we provide air tickets to destinations around the world.Understanding the critical role that air ticketing plays in your travel plans, our team manages every detail, from ticket issuance and seat reservations to meal preferences, ensuring a smooth and comfortable journey. Our experts work tirelessly to make sure everything is taken care of, so you can relax and travel with peace of mind. In addition to flight bookings, we offer support with flight schedules, quality checks, visa assistance, and more. Whether you’re planning well in advance or need a last-minute booking, we’re equipped to get you the best rates and preferred seats on your chosen dates.</p>
       
        <div className="bookin-Frm">
            <h6>Once we receive the filed form, we will contact you shortly to confirm availability.</h6>
            <div className="frm-forConfirm">
                <div className="frm-box">
                  <img src="assets/hotelimage/user.png" alt=""/>
                  <input type="text" placeholder=" Name "/>
                </div>

                <div className="frm-box">
                  <img src="assets/hotelimage/email.png" alt=""/>
                  <input type="text" placeholder=" Email Address"/>
                </div>

                <div className="frm-box">
                  <img src="assets/hotelimage/call.png" alt=""/>
                  <input type="text" placeholder=" Phone Number "/>
                </div>

                <div className="frm-box">
                  <img src="assets/hotelimage/booking.png" alt=""/>
                  <input type="text" placeholder=" Where are you going ? "/>
                </div>

                <div class="frm-box ">
                  <img src="assets/hotelimage/date.png" alt=""/>
                  <div class="dateBox">
                  <input type="text" id="date-input" placeholder="Check-in - Date  -" onfocus="(this.type='date')" onblur="if(!this.value)this.type='text'"/>
                  <input type="text" id="date-input" placeholder="Check-out date" onfocus="(this.type='date')" onblur="if(!this.value)this.type='text'"/>
                </div>
                   {/* <input type="date" placeholder=" Check-in - Date  -">
                  <input type="date" placeholder="Check - out date ">  */}
                </div>

                <div className="frm-box">
                  <img src="assets/hotelimage/room.png" alt=""/>
                  <select >
                    <option value="">2 Adults - 0 Children - 1 room</option>
                   {/* <input type="text" placeholder="  "/>  */}
                </select>
                </div>

                <div className="frm-box querysec">
                  <img src="assets/hotelimage/query.png" alt=""/>
                  <textarea placeholder="Your Query if any"></textarea>
                </div>
            </div>
        </div>

      </div>
   </>
  )
}

export default HotelAbout