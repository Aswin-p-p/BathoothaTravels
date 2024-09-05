import React from 'react'
import Header from '../../ReusableComponents/Header/Header'
import Footer from '../../ReusableComponents/Footer/Footer'
import VisAbout from '../../ReusableComponents/VisaComponents/VisaAbout/VisAbout'
import VisaContent from '../../ReusableComponents/VisaComponents/Visacontent/VisaConent'
import Bookwithus from '../../ReusableComponents/BookingComponents/Bookwithus/Bookwithus'

function Visapage() {
  return (
    <>
    <Header/>
    <VisaContent/>
    <VisAbout/>
    <Bookwithus/>
    <Footer/>
    </>
  )
}

export default Visapage