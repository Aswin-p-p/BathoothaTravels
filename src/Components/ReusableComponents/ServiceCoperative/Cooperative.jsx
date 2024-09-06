import React from 'react'
import './Cooperative.css'

function Cooperative() {
  return (
<>
<div className="serviceCT-container">
      <div className="hero-content">
      <h2>Corporate Travel</h2>
      <p>Ticketing &nbsp;&nbsp; | &nbsp;&nbsp; Hotel Booking &nbsp;&nbsp; | &nbsp;&nbsp; Passport Assistance &nbsp;&nbsp; | &nbsp;&nbsp; Foreign Exchange</p>
    </div>
     </div>

     <div className="bookCT">
        <div className="bookCT-col1">
            <h1>Book Corporate travel needs in one place</h1>
            <button>Contact Us </button>
        </div>
        <div className="bookCT-col1 CTcoln2">
            <h6>Maximize Efficiency, Minimize Costs with Expert Travel Management</h6>
            <p>Navigating the complexities of corporate travel can be daunting, but with the right travel agent by your side, it becomes seamless. Our business corporate travel agents specialize in providing tailored travel management solutions that meet the unique needs of your organization. From booking flights and accommodations to handling last-minute changes, our agents are dedicated to ensuring your business trips are smooth, cost-effective, and stress-free.</p>
        </div>
     </div>
<div className="Ourservices">
        <p>Our corporate travel service is designed to meet the unique needs of businesses, offering end-to-end travel management solutions that streamline every aspect of your company’s travel experience. We provide a full suite of services, including flight and hotel bookings, ground transportation, travel policy compliance, expense management, and 24/7 support. With a focus on cost savings and efficiency, we leverage our industry expertise and advanced technology to negotiate the best rates, optimize travel itineraries, and ensure a smooth, hassle-free journey for your employees. Whether it’s a single trip or managing a global travel program, our dedicated team is committed to delivering exceptional service, ensuring your business travel is always on time, on budget, and on point.</p>
          <div className="services-div">
                <h3>Our Services Include</h3>
                <div className="services-list">
                    <div className="SVList">
                        <div><img src="assets/cooperative/F-booking.png" alt=""/></div>
                        <h6>Flight Booking</h6>
                        <p>Access to exclusive corporate rates and flexible booking options.</p>
                    </div>

                    <div className="SVList">
                      <div><img src="assets/cooperative/accomodation.png" alt=""/></div>
                      <h6>Accomodation</h6>
                      <p>Partnerships with leading hotel chains and boutique options.</p>
                    </div>

                    <div className="SVList">
                      <div><img src="assets/cooperative/car.png" alt=""/></div>
                      <h6>Car Rentals</h6>
                      <p>Convenient and affordable car rental solutions for business travelers.</p>
                    </div>

                    <div className="SVList">
                      <div><img src="assets/cooperative/travel.png" alt=""/></div>
                      <h6>Travel Itinerary Management</h6>
                      <p>Detailed and organized itineraries tailored to your business needs.</p>
                    </div>

                    <div className="SVList">
                      <img src="assets/cooperative/group.png" alt=""/>
                      <h6>Group Travel</h6>
                      <p>Specialized services for organizing group travel for conferences, meetings, and events.</p>
                    </div>

                </div>
          </div>
      </div>

      <div className="customer-support">
          <h5>Enjoy the best customer suppor</h5>
          <p>We’re available 24/7 and answer within seconds. This is not an outsourcing thing.
            This is us responding on phone, chat, or email, whenever you need us.</p>

         <a href="/contactus">  <button> Contact Us </button> </a> 
      </div>
      <div class="AB-booking">
      <div className="serv-travel">
  <img src="assets/serviceimage/travel.jpg" alt="" />
  <div className="Svbook-with">
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

export default Cooperative