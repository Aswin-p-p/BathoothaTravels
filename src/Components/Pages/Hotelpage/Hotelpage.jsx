import React from 'react'
import Header from '../../ReusableComponents/Header/Header'
import Footer from '../../ReusableComponents/Footer/Footer'
import Bookwithus from '../../ReusableComponents/BookingComponents/Bookwithus/Bookwithus'
import HotelContent from '../../ReusableComponents/HotelComponent/HotelContent/HotelContent'
import HotelAbout from '../../ReusableComponents/HotelComponent/HotelAbout/HotelAbout'

function Hotelpage() {
  return (
    <>
    <Header/>
    <HotelContent/>
    <HotelAbout/>
    <Bookwithus/>
    <Footer/>
    </>
  )
}

export default Hotelpage