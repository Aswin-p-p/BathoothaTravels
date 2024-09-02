import React from 'react'
import Navbar from '../../ReusableComponents/MainHeader/Navbar'
import Footer from '../../ReusableComponents/Footer/Footer'
import ServiceContainer from '../../ReusableComponents/ServiceComponent/ServiceContainer'
import ServicePackage from '../../ReusableComponents/ServiceComponent/ServicePackage'


function Service() {
  return (
   <>
   <Navbar/>
     <ServiceContainer/>
     <ServicePackage/>
   <Footer/>
   </>
  )
}

export default Service