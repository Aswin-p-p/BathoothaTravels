import React from 'react'
import Header from '../../ReusableComponents/Header/Header'
import Footer from '../../ReusableComponents/Footer/Footer'
import BookingContainer from '../../ReusableComponents/BookingComponents/BookingContainer/BookingContainer'
import BookingForm from '../../ReusableComponents/BookingComponents/BookingForm/BookingForm'
import Testimonial from '../../ReusableComponents/BookingComponents/Testimonial/Testimonial'
import Bookwithus from '../../ReusableComponents/BookingComponents/Bookwithus/Bookwithus'

function Booking() {
  return (
   <>
   <Header/>
   <BookingContainer/>
   <BookingForm/>
   <Testimonial/>
   <Bookwithus/>
   <Footer/>
   </>
  )
}

export default Booking