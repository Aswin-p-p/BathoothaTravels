import React from 'react'
import Header from '../../ReusableComponents/Header/Header'
import Footer from '../../ReusableComponents/Footer/Footer'
import ContactForm from '../../ReusableComponents/ContactComponents/ContactForm/ContactForm'
import ContactLocation from '../../ReusableComponents/ContactComponents/ContactLocation/ContactLocation'
import Testimonial from '../../ReusableComponents/BookingComponents/Testimonial/Testimonial'

function Contact() {
  return (
    
    <>
    <Header/>
    <ContactForm/>
    <ContactLocation/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default Contact