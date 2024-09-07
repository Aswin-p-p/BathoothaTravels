import React from 'react';
import Slider from 'react-slick';
import './HomeBanner.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from'react';
import PlanForm from './PlanForm';
import PriceForm from './PriceForm';


function HomeBanner() {
  const [isFirstFormVisible, setFirstFormVisible] = useState(false);
  const [isSecondFormVisible, setSecondFormVisible] = useState(false);

  const toggleFirstForm = () => {
    setFirstFormVisible(!isFirstFormVisible);
    if (!isFirstFormVisible) {
      setSecondFormVisible(false); // Close the second form if the first form is opened
    }
  };

  const closeFirstForm = () => {
    setFirstFormVisible(false);
  };

  const toggleSecondForm = () => {
    setSecondFormVisible(!isSecondFormVisible);
    if (!isSecondFormVisible) {
      setFirstFormVisible(false); // Close the first form if the second form is opened
    }
  };

  const closeSecondForm = () => {
    setSecondFormVisible(false);
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
        <div>
          <img src="assets/homeimg/slide1.jpg" alt="" />
          <div className="sliderCont">
            <h2>Your Gateway to<br /> Global Travel</h2>
          </div>
          <div className="add-filter">
            <div className="btns">
              <div className="form-btns Fst-btn" onClick={toggleFirstForm}>
                <div><img src="assets/homeimg/flight-icon.png" alt="" /></div>
                <h6>
                  Have you decided on your journey? <br />
                  <span>Share your travel plan!</span>
                </h6>
              </div>
              <div className="form-btns icon scnd-btn" onClick={toggleSecondForm}>
                <div><img src="assets/homeimg/icon2.png" alt="" /></div>
                <h6>
                  Found a Lower Price? <br />
                  <span>We'll Take it to the lowest</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="assets/homeimg/slide2.jpg" alt="" />
          <div className="sliderCont">
            <h2>Discover More <br /> with Every Mile</h2>
          </div>
          <div className="add-filter">
            <div className="btns">
              <div className="form-btns Fst-btn">
                <div><img src="assets/homeimg/flight-icon.png" alt="" /></div>
                <h6>
                  Have you decided on your journey? <br />
                  <span>Share your travel plan!</span>
                </h6>
              </div>
              <div className="form-btns icon scnd-btn">
                <div><img src="assets/homeimg/icon2.png" alt="" /></div>
                <h6>
                  Found a Lower Price? <br />
                  <span>We'll Take it to the lowest</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="assets/homeimg/slide3.jpg" alt="" />
          <div className="sliderCont">
            <h2>Your Journey <br /> Begins with Us</h2>
          </div>
          <div className="add-filter">
            <div className="btns">
              <div className="form-btns Fst-btn">
                <div><img src="assets/homeimg/flight-icon.png" alt="" /></div>
                <h6>
                  Have you decided on your journey? <br />
                  <span>Share your travel plan!</span>
                </h6>
              </div>
              <div className="form-btns icon scnd-btn">
                <div><img src="assets/homeimg/icon2.png" alt="" /></div>
                <h6>
                  Found a Lower Price? <br />
                  <span>We'll Take it to the lowest</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="assets/homeimg/slide4.jpg" alt="" />
          <div className="sliderCont">
            <h2 id="slide4-cont">Taking care of your <br /> business travelers, any time,<br /> any where</h2>
          </div>
          <div className="add-filter">
            <div className="btns">
              <div className="form-btns Fst-btn">
                <div><img src="assets/homeimg/flight-icon.png" alt="" /></div>
                <h6>
                  Have you decided on your journey? <br />
                  <span>Share your travel plan!</span>
                </h6>
              </div>
              <div className="form-btns icon scnd-btn">
                <div><img src="assets/homeimg/icon2.png" alt="" /></div>
                <h6>
                  Found a Lower Price? <br />
                  <span>We'll Take it to the lowest</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div className="homefooter">
        <div className="coln1">
          <div className="cont1 line">
            <div className="circle"><img src="assets/homeimg/1.png" alt="" /></div>
            <p>Assured <br /> best fares</p>
          </div>
          <div className="cont1 line">
            <div className="circle"><img src="assets/homeimg/2.png" alt="" /></div>
            <p>24x7 Customer <br /> Support</p>
          </div>
          <div className="cont1">
            <div className="circle"><img src="assets/homeimg/3.png" alt="" /></div>
            <p>One Stop for <br /> All Travel Services</p>
          </div>
        </div>
        <div className="line1"></div>
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
      <div className={`forms-coln frm-fst ${isFirstFormVisible ? 'show' : ''}`}>
        <div className="btn-close2 clse" onClick={closeFirstForm}><i className="fa-solid fa-xmark"></i></div>
        <div className="image"><img src="assets/homeimg/aireoplane.png" alt="" /></div>
       <PlanForm/>
      </div>
      <div className={`forms-coln forms-coln2 ${isSecondFormVisible ? 'show' : ''}`}>
        <div className="btn-close3 clse" onClick={closeSecondForm}><i className="fa-solid fa-xmark"></i></div>
        <div className="booking">
          <div className="head">
            <h4>Found a Lower Price? <br /><span>We'll Take it to the lowest</span></h4>
            <div className="icons">
              <button><img src="assets/homeimg/plane.png" alt="" />Flights</button>
              <button><img src="assets/homeimg/hotel.png" alt="" />Hotels</button>
            </div>
          </div>
            <PriceForm/>
          <div className="secndFrm-div">
            <div className="frm-head">
              <h5>Share the screenshot or URL of the lowest price</h5>
              <p>you've found on other websites. We'll surpass it with our unbeatable offer.</p>
            </div>
            <form className="form_Book frm">
              <input type="text" placeholder="The website you found " />
              <input type="text" placeholder="Upload Screenshot" />
            </form>
          </div>
          <div className="search-btn"><button>Done</button></div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; 2024 bathootha | <a href="">Privacy Policy</a> |<a href=""> About Us</a> |<a href=""> FAQ</a> |<a href=""> Contact Support</a></p>
      </div>
    </div>
  );
}

export default HomeBanner;
