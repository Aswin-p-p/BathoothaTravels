import React from 'react'
import Header from '../../ReusableComponents/Header/Header'
import Footer from '../../ReusableComponents/Footer/Footer'
import AboutContent from '../../ReusableComponents/AboutComponents/AboutContent/AboutContent'
import AboutBanner from '../../ReusableComponents/AboutComponents/AboutBanner/AboutBanner'
import Testimonial from '../../ReusableComponents/BookingComponents/Testimonial/Testimonial'
import Bookwithus from '../../ReusableComponents/BookingComponents/Bookwithus/Bookwithus'

function About() {
  return (
    <>
    <Header/>
    <AboutContent/>
    <AboutBanner/>
    <Testimonial/>
    <Bookwithus/>
    <Footer/>
    </>
  )
}

export default About