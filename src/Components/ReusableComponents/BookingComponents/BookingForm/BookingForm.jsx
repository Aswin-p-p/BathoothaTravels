import React from 'react'
import './BookingForm.css'

function BookingForm() {
  return (
  <>
        <div className="bk-lowPrice">
        <div className="aireoplane"><img src="assets/bookingimage/aireoplane.png" alt=""/></div>

        <div className="bk-formHead low">
          <h4>Found a Lower Price? <br/><span style={{color:'#029094'}}>We'll Take it to the lowest</span></h4>
          <div className="bk-icons">
            <div className="bkicon"><img src="assets/bookingimage/plane.png" alt=""/><p>Flights</p></div>
            <div className="bkicon"><img src="assets/bookingimage/hotel.png" alt=""/><p>Hotel</p></div>
          </div>
        </div>
        <div className="bkFrm-Low">
          <form className="formPrice">
            <input type="text" className='bookform' placeholder="Name"/>
            <input type="text" className='bookform' placeholder="Email Address"/>
            <input type="text" className='bookform' placeholder="Return Date"/>
            <input type="text" className='bookform' placeholder="Depart Date"/>
            <input type="text" className='bookform' placeholder="Contact Number"/>
            <input type="text" className='bookform' placeholder="Number of Passengers"/>
            <input type="text" className='bookform' placeholder="Contact Number"/>
            <input type="text" className='bookform' placeholder="Depart Date"/>
          </form>
        </div>

        <div className="scrnshot">
            <h5>Share the screenshot or URL of the lowest price</h5>
            <p>You've fpund on other websites. We will surpass it with our unbeatable offer</p>
            <form className="frmPrice">
              <input type="text" className='bookform' placeholder="The website you found"/>
              <input type="text" className='bookform' placeholder="Upload Screenshot"/>
            </form>

            <div className="submitBtn"><button>Done</button></div>
        </div>
     </div>
  </>
  )
}

export default BookingForm