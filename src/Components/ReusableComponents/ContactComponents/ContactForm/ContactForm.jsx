import React from 'react'
import './ContactForm.css'

function ContactForm() {
  return (
    <>          
    <div className="CT-container">
<div>
<h2>We’re Ready to Listen and Assist</h2>
<p>Contact Us for Prompt and Personalized Support</p>
</div>
</div>
<div className="CT-contents">
 <div className="CT-coln">
   <h5>Get in touch with Bathootha Travel for a complimentary evaluation of your global travel program.</h5>
   <p>Bathootha Travel creates streamlined and impactful global travel programs tailored to achieve strategic outcomes for businesses across all markets.</p>
   <p>Our skilled global travel team excels at uncovering cost-saving opportunities, enhancing operational efficiency, boosting policy compliance, and driving the adoption of cutting-edge technology. We’re committed to ensuring a strong return on your travel investment.</p>
   <p>Reach out to us today for a complimentary assessment of your global travel program</p>
</div>

 <div className="CT-coln CT-coln1">
   <h5>Your Questions Answered, 
     Fast and Friendly</h5>
   <p>The team behind our travel agency is a group of passionate travel enthusiasts and industry professionals dedicated to creating exceptional travel experiences.</p>
     <div >
       <form className="CT-form">
           <input type="text" placeholder="your name"/>
           <input type="text" placeholder="your second name"/>
           <input type="text" placeholder="email address"/>
           <input type="text" placeholder="contact number"/>
           <input type="text" placeholder="country"/>
           <input type="text" placeholder="company"/>
           <textarea placeholder="your query"></textarea>
       </form>
       <div className="CTBtn"><button>Search</button></div>
     </div>
 </div>
</div>
    </>
  )
}

export default ContactForm