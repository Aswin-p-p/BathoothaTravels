import React from 'react'
import './Testimonial.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation , Scrollbar, A11y, Autoplay, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide,  } from 'swiper/react';

function Testimonial() {
  
  return (
   <>
     <div class="testimonial-Section">
     <div class="swiper testimonial-div">
     <div class="swiper-wrapper testi-slider">
     <Swiper 
    modules={[ Autoplay]}

    loop={true}
      autoplay={{ delay: 2000 }}
   >
       <SwiperSlide>
      <div className="swiper-slide ab-testimonials">
      <h4>Testimonials</h4>
      <div className="testimonials">
        <div className="photos"><img src="assets/bookingimage/testi-img1.png" alt=""/></div>
        <p>The team behind our travel agency is a group of passionate travel enthusiasts and industry professionals dedicated to creating exceptional travel experiences.</p>
        <p id="name">Isthifa Safeer <br/> <span>Abudhabi </span></p>
      </div>
      </div>
      </SwiperSlide>
       <SwiperSlide>
      <div className="swiper-slide ab-testimonials">
      <h4>Testimonials</h4>
      <div className="testimonials">
        <div className="photos"><img src="assets/bookingimage/testi-img1.png" alt=""/></div>
        <p>The team behind our travel agency is a group of passionate travel enthusiasts and industry professionals dedicated to creating exceptional travel experiences.</p>
        <p id="name">Isthifa Safeer <br/> <span>Abudhabi </span></p>
      </div>
      </div>
      </SwiperSlide>

      </Swiper>
      </div>
      </div>
      <button className="explore">EXPLORE MORE</button>
      </div>
   </>
  )
}

export default Testimonial