import React from 'react'
import './BlogBanner.css'
import Footer from '../../Footer/Footer'

function BlogBanner() {
  return (
    <>
        <div className="BGhome"> 
      
      <div className="BG-container">
       <div>
       <h2>Unfolding Perspectives</h2>
       <p>Stories That Inform, Engage, and Inspire</p>
     </div>
      </div>
 
      <div className="bg-contents">
         <div className="bg-col1 details">
           <div className="bgImg"><img src="assets/blogimg/bg-img.jpg" alt=""/><div className="bg-btn">RECENT <br/>
             BLOG</div></div>
           
             <h3>Flight Classes Explained: 
               Understanding the Differences</h3>
               <p>One of the key distinctions in air travel is the cost and what it covers. Nowadays, airfare primarily reflects the basic journey from point A to point B. However, with the introduction of multiple service classes and varied pricing options within each className, travelers can now customize their experience, paying only for the additional amenities they value.</p>
               <div className="bg-explore"><a href="" className="author"><img src="assets/blogimg/user.png" alt=""/> AUTHOR NAME AND DATE</a>
               <button className="bg-exploreBtn">EXPLORE MORE</button></div>
         </div>
 
 
         <div className="bg-col1 detailed">
           <div className="bg-row fst-coln">
               <div className="blog-img"><img src="assets/blogimg/bg-img1.jpg" alt=""/></div>
               <div className="bg-cont">
                 <h5>A Step-by-Step Guide to Managing
                   Your Air India Bookings</h5>
                   <a href="" className="author"><img src="assets/blogimg/user.png" alt=""/> AUTHOR NAME AND DATE</a>
               </div>
           </div>
 
           <div className="bg-row ">
             <div className="blog-img"><img src="assets/blogimg/bg-img2.jpg" alt=""/></div>
             <div className="bg-cont">
               <h5>United Arab Emirates Airports Food 
                 Spots You Must Know!</h5>
                 <a href="" className="author"><img src="assets/blogimg/user.png" alt=""/> AUTHOR NAME AND DATE</a>
             </div>
           </div>
 
           <div className="bg-row ">
             <div className="blog-img"><img src="assets/blogimg/bg-img3.jpg" alt=""/></div>
             <div className="bg-cont">
               <h5>What to Expect at Mumbai Intercontinental 
                 Airport Terminals?</h5>
                 <a href="" className="author"><img src="assets/blogimg/user.png" alt=""/> AUTHOR NAME AND DATE</a>
             </div>
           </div>
 
           <div className="bg-row ">
             <div className="blog-img"><img src="assets/blogimg/bg-img4.jpg" alt=""/></div>
             <div className="bg-cont">
               <h5>Top 6 Destinations Offering Visa on 
                 Arrival to Indian Travelers</h5>
                 <a href="" className="author"><img src="assets/blogimg/user.png" alt=""/> AUTHOR NAME AND DATE</a>
             </div>
           </div>
 
           <div className="bg-row ">
             <div className="blog-img"><img src="assets/blogimg/bg-img5.jpg" alt=""/></div>
             <div className="bg-cont">
               <h5>How to find senior airfare discounts </h5>
                 <a href="" className="author"><img src="assets/blogimg/user.png" alt=""/> AUTHOR NAME AND DATE</a>
             </div>
           </div>
        
       </div>
     </div>

     <Footer/>
     </div>
    </>
  )
}

export default BlogBanner