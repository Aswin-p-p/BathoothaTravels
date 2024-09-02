import React from 'react'
import './Bookwithus.css'

function Bookwithus() {
  return (
    <>
       <div className="ab-travel">
        <img src="assets/bookingimage/travel.jpg" alt="Travel Experience" />
        <div className="book-with">
          <div>
            <h3>Why Book with Us</h3>
            <p>
              We strive hard to make every second of your travel experience beautiful, comfortable, and enjoyable.
            </p>
            <ul className="list">
              <li>
                <img src="assets/bookingimage/rupees.png" alt="No hidden charges" id="rupees" />
                <div className="rw1"></div>
                <h4>No hidden charges</h4>
                <p>
                  We don't add hidden extra costs. All trips include travel permits, lodging, and fooding. There are no surprises with hidden costs.
                </p>
              </li>
              <li>
                <img src="assets/bookingimage/man.png" alt="Local Experts" />
                <div className="rw1"></div>
                <h4>Local Experts. Middle-man Free Pricing</h4>
                <p>
                  We're a local travel agency. When you book with us, you get the best possible price, which is middle-man free.
                </p>
              </li>
              <li>
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
      </div>
    </>
  )
}

export default Bookwithus