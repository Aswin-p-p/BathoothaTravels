import React from 'react'
import Navbar from '../../ReusableComponents/MainHeader/Navbar'
import Footer from '../../ReusableComponents/Footer/Footer'
import ServiceContainer from '../../ReusableComponents/ServiceComponent/ServiceContainer'
import ServicePackage from '../../ReusableComponents/ServiceComponent/ServicePackage'
import Header from '../../ReusableComponents/Header/Header'


function Service() {
  return (
   <>
   <Header/>
     <ServiceContainer/>
     <ServicePackage/>
   <Footer/>
   </>
  )
}

export default Service