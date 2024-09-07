import React from 'react'
import './TicketAbout.css'

function TicketAbout() {
  return (
 <>
     <div className="ST-details">
        <p>fter you’ve settled on your holiday destination and travel dates, the next important step is booking your flight tickets. We know that securing the right flight can be overwhelming, especially during the busy holiday season. With countless options to choose from, you want to find the best fare, match your travel dates, minimize travel time, and ensure quality service. It’s a complex puzzle that can leave you feeling frustrated.</p>
        <p>
          At Bathootha Travels we’re here to take that burden off your shoulders. We simplify the entire process by handling your flight bookings, so you can focus on enjoying your upcoming trip. As an authorized agency, we provide air tickets to destinations around the world.Understanding the critical role that air ticketing plays in your travel plans, our team manages every detail, from ticket issuance and seat reservations to meal preferences, ensuring a smooth and comfortable journey. Our experts work tirelessly to make sure everything is taken care of, so you can relax and travel with peace of mind. In addition to flight bookings, we offer support with flight schedules, quality checks, visa assistance, and more. Whether you’re planning well in advance or need a last-minute booking, we’re equipped to get you the best rates and preferred seats on your chosen dates.</p>

          <div className="ST-row">
              <div className="ticketing-col">
                <img src="assets/ticketimage/search.png" alt=""/>
                <h6>Search for 
                    Flights</h6>
              </div>
              <div className="ticketing-col ">
                <img src="assets/ticketimage/compare.png" alt=""/>
                <h6>Compare 
                  Options</h6>
              </div>
              <div className="ticketing-col ">
                <img src="assets/ticketimage/book.png" alt=""/>
                <h6>Book 
                  Securely</h6>
              </div>
              <div className="ticketing-col ">
                <img src="assets/ticketimage/recieve.png" alt=""/>
                <h6>Receive 
                  Confirmation</h6>
              </div>
              <div className="ticketing-col right">
                <img src="assets/ticketimage/manage.png" alt=""/>
                <h6>Manage 
                  Your Booking</h6>
              </div>
          </div>

      </div>

      <div className="ST-contentSec">
        <div className="ST-col2 STcoln3">
          <p>Have you already booked a flight at a great price? What if we told you that you could get an even better deal? At [Your Company Name], our mission is simple: to ensure you fly for the absolute lowest price available.</p>
      </div>
        <div className="ST-col2">
            <h1>Already found a flight at a low price?</h1>
            <button>Now, let’s aim for the lowest!</button>
        </div>
     </div>

    <div className="ticketing-services">
        <p>Have you already booked a flight at a great price? What if we told you that you could get an even better deal? At Bathootha Travel  our mission is simple: to ensure you fly for the absolute lowest price available.</p>
        <h5>This service is perfect for savvy travelers who want to ensure they’re getting the absolute best deal on their flights. Whether you’re a frequent flyer or planning a one-time trip, we help you save even more.</h5>
      
        <div className="Ticket-services">
          <div className="ticketServ-col">
            <img src="assets/ticketimage/share.png" alt=""/>
            <h6>Share Your 
              Booking</h6>
          </div>
          <div className="ticketServ-col ">
            <img src="assets/ticketimage/find.png" alt=""/>
            <h6>We Find a 
              Lower Rate</h6>
          </div>
          <div className="ticketServ-col ">
            <img src="assets/ticketimage/get.png" alt=""/>
            <h6>Get the 
              Lowest Price</h6>
          </div>
          <div className="ticketServ-col right1">
            <img src="assets/ticketimage/saving.png" alt=""/>
            <h6>Instant 
              Savings</h6>
          </div>
      </div>
      
    </div>



    <div class="AB-booking tickbook">
      <div className="serv-travel">
  <img src="assets/serviceimage/travel.jpg" alt="" />
  <div className="Svbook-with ticketsv">
    <div>
      <h3>Why Book with Us</h3>
      <p>We strive hard to make every second of your travel experience beautiful, comfortable, and enjoyable.</p>
      <div className="Svlist">
        <li>
          <img src="assets/serviceimage/rupees.png" alt="" id="rupees" />
          <div className="Svrw1">
            <h4 >No hidden charges</h4>
            <p>We don't add hidden extras cost. All trips include travel permit, lodging and fooding. There are no surprises with hidden costs.</p>
          </div>
        </li>
        <li>
          <img src="assets/serviceimage/man.png" alt="" />
          <div className="Svrw1">
            <h4 >Local Experts. Middle-man Free Pricing</h4>
            <p>We're a local travel agency. When you book with us, you get best possible price, which is middle-man free.</p>
          </div>
        </li>
        <li>
          <img src="assets/serviceimage/support.png" alt="" />
          <div>
            <h4 >Efficient Customer Support</h4>
            <p>Our customer support is extended to your destinations to make your travel hassle-free</p>
          </div>
        </li>
      </div>
    </div>
  </div>
</div>
</div>
 </>
  )
}

export default TicketAbout