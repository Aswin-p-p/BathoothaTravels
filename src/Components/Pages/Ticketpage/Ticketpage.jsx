import React from 'react'
import Header from '../../ReusableComponents/Header/Header'
import Footer from '../../ReusableComponents/Footer/Footer'
import Bookwithus from '../../ReusableComponents/BookingComponents/Bookwithus/Bookwithus'
import TicketContent from '../../ReusableComponents/TicketComponent/TicketContent/TicketContent'
import TicketAbout from '../../ReusableComponents/TicketComponent/TicketAbout/TicketAbout'


function Ticketpage() {
  return (
  <>
  <Header/>
  <TicketContent/>
  <TicketAbout/>
  <Bookwithus/>
  <Footer/>
  </>
  )
}

export default Ticketpage