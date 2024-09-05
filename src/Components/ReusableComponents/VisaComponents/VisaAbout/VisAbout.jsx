import React from 'react'
import './VisaAbout.css'
function VisAbout() {
  return (
    <>
         <div className="VA-section">
        <div className="VASection-col1 ">
          <li>Online Visa Processing services</li>
          <li>Professional Visa Application Case Managers</li>
          <li>Real time online tracking of the Visa process</li>
          <li>Online Document Acknowledgement System</li>
          <li>Assistance at all application centres (on request)</li>
        </div>
        <div className="vrLine1"></div>
        <div className="VASection-col1 VAcoln2">
          <h1>Smooth Visa Process, Stress-Free Travel.</h1>
          <button>Yes, I am interested</button>
      </div>
     </div>

     <div className="visa-services">
      <div className="VAList">
          <ul className="listing">
            <h5>Short Term Visa processing Services</h5>
            <li><div><i className="fa-solid fa-minus"></i></div>  Tourists Visas</li>
            <li><div><i className="fa-solid fa-minus"></i></div>  Visiting family or friends (VFR) visa</li>
            <li><div><i className="fa-solid fa-minus"></i></div>  Business / Conference / Training / Trade Fair Visas</li>
            <li><div><i className="fa-solid fa-minus"></i></div>  Transit Visas</li>
          </ul>
      </div>
      <div className="VAList">
        <ul className="listing">
          <h5>Long Term Visas</h5>
          <li><div><i className="fa-solid fa-minus"></i></div>  Employment Visa Stamping</li>
          <li><div><i className="fa-solid fa-minus"></i></div>  Student Visas</li>
          <li><div><i className="fa-solid fa-minus"></i></div>  Family Reunion / Dependent Visas</li>
          <li><div><i className="fa-solid fa-minus"></i></div>  Group Visas</li>
        </ul>
      </div>
      <div className="VAList">   
        <ul className="listing">
          <h5>Document Attestation Services</h5>
          <li><div><i className="fa-solid fa-minus"></i></div>  Apostille Services</li>
          <li><div><i className="fa-solid fa-minus"></i></div>  HRD Attestation</li>
          <li><div><i className="fa-solid fa-minus"></i></div>  Home Department Attestation</li>
          <li><div><i className="fa-solid fa-minus"></i></div>  MEA Attestation</li>
          <li><div><i className="fa-solid fa-minus"></i></div>  Kuwait, Qatar, UAE, Saudi Arabia, Oman and Bahrain Attestation</li>
        </ul>
      </div>
  </div>
  </>
  )
}

export default VisAbout