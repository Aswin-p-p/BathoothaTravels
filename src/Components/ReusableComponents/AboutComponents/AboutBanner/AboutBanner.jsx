import React from 'react'
import './AboutBanner.css'

function AboutBanner() {
  return (
  <>
     <div className="AB-team">
      <div className="team-cont">
      <div className="ab-teamRow">  
      </div>
      <div className="quote">
        <h4>The Team Behind</h4>
        <p>The team behind our travel agency is a group of passionate travel enthusiasts and industry professionals dedicated to creating exceptional travel experiences.</p>
      </div> </div>
      <div className="image">
        <p>Asheer nakunnath <br/><span>Managing Director</span></p>
        <div className="team-img"><img src="assets/aboutimage/asheer-sir.png" alt=""/></div>
      </div>
     </div>
  </>
  )
}

export default AboutBanner