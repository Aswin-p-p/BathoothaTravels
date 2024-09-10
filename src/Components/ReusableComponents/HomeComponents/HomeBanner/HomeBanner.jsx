import React, { useState } from 'react';
import Slider from 'react-slick';
import './HomeBanner.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PlanForm from './PlanForm';
import PriceForm from './PriceForm';

function HomeBanner() {
  const [openForm, setOpenForm] = useState(null); // Control the visibility of forms

  const toggleForm = (formName) => {
    setOpenForm(openForm === formName ? null : formName); // Toggle between forms
  };

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    speed: 500,
    autoplaySpeed: 2000,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
  };

  return (
    <div className="home-container">
      <Slider {...settings} className="heroSlide">
        {['slide1.jpg', 'slide2.jpg', 'slide3.jpg', 'slide4.jpg'].map((slide, index) => (
          <div key={index}>
            <img src={`assets/homeimg/${slide}`} alt="" />
            <div className="sliderCont">
              <h2>
                {index === 0 ? (
                 <> 
                 <span >Your Gateway to </span>
                 <br />
                 <span>Global Travel</span>
                 </>
                ) :
                 index === 1 ? (
                  <>
                    <span>Discover More</span>
                    <br />
                    <span>with Every Mile</span>
                  </>
                ) :
                 index === 2 ?  (
                  <> 
                  <span >Your Journey </span>
                  <br />
                  <span>Begins with Us</span>
                  </>
                 ) :
                 (
                  <> 
                  <span className='main-span'>Taking care of your
                  <br />
                 business travelers, any time, 
                  <br />
                  any where</span>
                  </>
                 ) 
                  }
              </h2>
            </div>
            <div className="add-filter">
              <div className="btns">
                <div className="form-btns Fst-btn" onClick={() => toggleForm('first')}>
                  <div><img src="assets/homeimg/flight-icon.png" alt="" /></div>
                  <h6>Have you decided on your journey? <br /><span>Share your travel plan!</span></h6>
                </div>
                <div className="form-btns icon scnd-btn" onClick={() => toggleForm('second')}>
                  <div><img src="assets/homeimg/icon2.png" alt="" /></div>
                  <h6>Found a Lower Price? <br /><span>We'll Take it to the lowest</span></h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="homefooter">
      <div className="coln1">
  {[
    (
      <> 
        <span className='sub-span'>Assured
        <br />
        best 
       
       fares</span>
      </>
    ),
    (
      <>
        <span className='sub-span'>24x7
       
       Customer <br />
       
        Support</span>
      </>
    ),
    (
      <>
        <span className='sub-span'>One Stop for
        <br />
        All Travel 
     
        Services</span>
      </>
    )
  ].map((text, i) => (
    <div key={i} className={`cont1 ${i !== 2 ? 'line' : '' } homeline`}>
      <div className="circle">
        <img src={`assets/homeimg/${i + 1}.png`} alt="" />
      </div>
      <p>{text}</p>
    </div>
  ))}
</div>
<div className="line1" style={{ marginLeft: '102px' }}></div>
        <div className="coln1 coln2">
          <div className="subscribe">
            <h6>Subscribe to our newsletter</h6>
            <p>Be the first to get latest offers and News directly in your inbox</p>
          </div>
          <div className="txtEmail">
            <input type="text" placeholder="Your Email Address" />
            <button><img src="assets/homeimg/send.png" alt="" /></button>
          </div>
        </div>
      </div>

      {/* First Form */}
      {openForm === 'first' && (
        <div className="forms-coln frm-fst show">
          <div className="btn-close2 clse" onClick={() => toggleForm(null)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="image">
            <img src="assets/homeimg/aireoplane.png" alt="" />
          </div>
          <PlanForm />
        </div>
      )}

      {/* Second Form */}
      {openForm === 'second' && (
        <div className="forms-coln forms-coln2 show">
          <div className="btn-close3 clse" onClick={() => toggleForm(null)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="booking">
            <div className="head">
              <h4>Found a Lower Price? <br /><span>We'll Take it to the lowest</span></h4>
              <div className="icons">
                <button><img src="assets/homeimg/plane.png" alt="" />Flights</button>
                <button><img src="assets/homeimg/hotel.png" alt="" />Hotels</button>
              </div>
            </div>
            <PriceForm />
            <div className="secndFrm-div">
              <div className="frm-head">
                <h5>Share the screenshot or URL of the lowest price</h5>
                <p>We'll surpass it with our unbeatable offer.</p>
              </div>
              <form className="form_Book frm">
                <input type="text" placeholder="The website you found " />
                <input type="text" placeholder="Upload Screenshot" />
              </form>
            </div>
            <div className="search-btn">
              <button>Done</button>
            </div>
          </div>
        </div>
      )}

      <div className="copyright">
        <p>
          Copyright &copy; 2024 bathootha |
          <a href=""> Privacy Policy</a> |
          <a href=""> About Us</a> |
          <a href=""> FAQ</a> |
          <a href=""> Contact Support</a>
        </p>
      </div>
    </div>
  );
}

export default HomeBanner;
