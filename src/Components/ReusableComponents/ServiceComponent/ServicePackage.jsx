import React from 'react'
import './Service.css'
import { Link } from 'react-router-dom';

function ServicePackage() {
  return (
    <>
       <div className="services-colns">
  <div className="svContents">
    <div className="SvImg">
      <img src="assets/serviceimage/serv-img1.jpg" alt="" />
    </div>
    <div className="svdetails">
      <h4 id="svHead">Connecting You to Every Destination, Near and Far.</h4>
      <div className="services">
        <h4>Domestic & International Ticketing</h4>
        <p>
          At Bathootha Travels, we’ve honed the art of ticketing to perfection over decades of experience. Whether you’re booking a domestic flight or jetting off internationally, our expertise ensures you receive the best deals and prices available. Leveraging our extensive knowledge, we help you choose the most efficient travel routes, so you can minimize travel time and maximize your enjoyment.
        </p>
      </div>
      <div className="svExploreBtn">
      <Link to="/ticketpage">  <button>EXPLORE MORE</button> </Link>
      </div>
    </div>
  </div>

  <div className="svContents secondSect">
    <div className="svdetails">
      <h4 id="svHead">Luxury, Comfort, and Convenience—Book It All</h4>
      <div className="services servicesSec">
        <h4>Hotel Booking</h4>
        <p>
          Say farewell to restless nights and let us find you a delightful home away from home. Each hotel we recommend is meticulously vetted for quality and value, ensuring it meets your highest expectations. Tailored to your specific needs, our handpicked selections promise a perfect stay along with exceptional deals
        </p>
      </div>
      <div className="svExploreBtn-Left">
      <Link to="/hotelpage">  <button>EXPLORE MORE</button> </Link>
      </div>
    </div>
    <div className="SvImg">
      <img src="assets/serviceimage/serv-img2.jpg" alt="" />
    </div>
  </div>

  <div className="svContents">
    <div className="SvImg">
      <img src="assets/serviceimage/serv-img3.jpg" alt="" />
    </div>
    <div className="svdetails">
      <h4 id="svHead">Hassle-Free Passport Services, Just for You</h4>
      <div className="services">
        <h4>Passport Assistance</h4>
        <p>
          Navigating complex processes is easier with a reliable support system by your side. For something as intricate as a passport application, you can depend on us. We handle everything from online form completion and document management to scheduling your appointments. With our guidance, we ensure a streamlined and stress-free experience every step of the way.
        </p>
      </div>
      <div className="svExploreBtn">
      <Link to="/visapage">  <button>EXPLORE MORE</button> </Link>
      </div>
    </div>
  </div>

  <div className="svContents secondSect">
    <div className="svdetails">
      <h4 id="svHead">Seamless Exchanges, Smooth Travels</h4>
      <div className="services servicesSec">
        <h4>Foreign Exchange</h4>
        <p>
          Experience effortless currency exchange with our competitive rates and swift, straightforward transactions. Whether you're traveling overseas or managing international transactions, we provide a seamless exchange process with clear fees and outstanding customer support. Rely on us to maximize the value of your money, wherever your travels may lead.
        </p>
      </div>
      <div className="svExploreBtn-Left">
      <Link to="/hotelpage">  <button>EXPLORE MORE</button> </Link>
      </div>
    </div>
    <div className="SvImg">
      <img src="assets/serviceimage/serv-img4.jpg" alt="" />
    </div>
  </div>
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
            <h4><u>No hidden charges</u></h4>
            <p>We don't add hidden extras cost. All trips include travel permit, lodging and fooding. There are no surprises with hidden costs.</p>
          </div>
        </li>
        <li>
          <img src="assets/serviceimage/man.png" alt="" />
          <div className="Svrw1">
            <h4><u>Local Experts. Middle-man Free Pricing</u></h4>
            <p>We're a local travel agency. When you book with us, you get best possible price, which is middle-man free.</p>
          </div>
        </li>
        <li>
          <img src="assets/serviceimage/support.png" alt="" />
          <div>
            <h4><u>Efficient Customer Support</u></h4>
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

export default ServicePackage