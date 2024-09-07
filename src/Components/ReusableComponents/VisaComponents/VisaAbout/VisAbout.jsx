import React from 'react'
import './VisaAbout.css'
function VisAbout() {
  return (
    <>
         <div className="VA-section">
        <div className="VASection-col1 ">
          <li>Online Visa Processing services</li>
          <li>Professional Visa Application Case Managers</li>
          <li>Real time online tracking of the Visa process</li>
          <li>Online Document Acknowledgement System</li>
          <li>Assistance at all application centres (on request)</li>
        </div>
        <div className="vrLine1"></div>
        <div className="VASection-col1 VAcoln2">
          <h1>Smooth Visa Process, Stress-Free Travel.</h1>
          <button>Yes, I am interested</button>
      </div>
     </div>

     <div className="visa-services">
      <div className="VAList">
          <ul className="listing">
            <h5>Short Term Visa processing Services</h5>
            <li><div><i className="fa-solid fa-minus"></i></div>  Tourists Visas</li>
            <li><div><i className="fa-solid fa-minus"></i></div>  Visiting family or friends (VFR) visa</li>
            <li><div><i className="fa-solid fa-minus"></i></div>  Business / Conference / Training / Trade Fair Visas</li>
            <li><div><i className="fa-solid fa-minus"></i></div>  Transit Visas</li>
          </ul>
      </div>
      <div className="VAList">
        <ul className="listing">
          <h5>Long Term Visas</h5>
          <li><div><i className="fa-solid fa-minus"></i></div>  Employment Visa Stamping</li>
          <li><div><i className="fa-solid fa-minus"></i></div>  Student Visas</li>
          <li><div><i className="fa-solid fa-minus"></i></div>  Family Reunion / Dependent Visas</li>
          <li><div><i className="fa-solid fa-minus"></i></div>  Group Visas</li>
        </ul>
      </div>
      <div className="VAList">   
        <ul className="listing">
          <h5>Document Attestation Services</h5>
          <li><div><i className="fa-solid fa-minus"></i></div>  Apostille Services</li>
          <li><div><i className="fa-solid fa-minus"></i></div>  HRD Attestation</li>
          <li><div><i className="fa-solid fa-minus"></i></div>  Home Department Attestation</li>
          <li><div><i className="fa-solid fa-minus"></i></div>  MEA Attestation</li>
          <li><div><i className="fa-solid fa-minus"></i></div>  Kuwait, Qatar, UAE, Saudi Arabia, Oman and Bahrain Attestation</li>
        </ul>
      </div>
  </div>

  <div class="AB-booking">
      <div className="serv-travel">
  <img src="assets/serviceimage/travel.jpg" alt="" />
  <div className="Svbook-with  visassis">
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

export default VisAbout