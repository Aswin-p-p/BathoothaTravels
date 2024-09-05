import React from 'react'
import './Bookwithus.css'

function Bookwithus() {
  return (
    <>
    
       {/* <div className="ab-travel">
        <img src="assets/bookingimage/travel.jpg" alt="Travel Experience" />
        <div className="book-with">
          <div>
            <h3>Why Book with Us</h3>
            <p>
              We strive hard to make every second of your travel experience beautiful, comfortable, and enjoyable.
            </p>
            <ul className="b_list">
              <li className='b_li'>
                <img src="assets/bookingimage/rupees.png" alt="No hidden charges" id="rupees" />
                <div className="rw1"></div>
                <h4>No hidden charges</h4>
                <p>
                  We don't add hidden extra costs. All trips include travel permits, lodging, and fooding. There are no surprises with hidden costs.
                </p>  
              </li>
              <li className='b_li'>
                <img src="assets/bookingimage/man.png" alt="Local Experts" />
                <div className="rw1"></div>
                <h4>Local Experts. Middle-man Free Pricing</h4>
                <p>
                  We're a local travel agency. When you book with us, you get the best possible price, which is middle-man free.
                </p>
              </li>
              <li className='b_li'>
                <img src="assets/bookingimage/support.png" alt="Efficient Customer Support" />
                <div className="rw1"></div>
                <h4>Efficient Customer Support</h4>
                <p>
                  Our customer support is extended to your destinations to make your travel hassle-free.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
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
            <h4 style={{color:'#63e3e3', textDecoration:'none'  }}>No hidden charges</h4>
            <p>We don't add hidden extras cost. All trips include travel permit, lodging and fooding. There are no surprises with hidden costs.</p>
          </div>
        </li>
        <li>
          <img src="assets/serviceimage/man.png" alt="" />
          <div className="Svrw1">
            <h4 style={{color:'#63e3e3', textDecoration:'none'}}>Local Experts. Middle-man Free Pricing</h4>
            <p>We're a local travel agency. When you book with us, you get best possible price, which is middle-man free.</p>
          </div>
        </li>
        <li>
          <img src="assets/serviceimage/support.png" alt="" />
          <div>
            <h4 style={{color:'#63e3e3', textDecoration:'none'}}>Efficient Customer Support</h4>
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

export default Bookwithus