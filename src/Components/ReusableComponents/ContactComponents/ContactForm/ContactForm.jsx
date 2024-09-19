import React, { useState } from 'react';
import './ContactForm.css';
import { z } from 'zod';

function ContactForm() {


  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    contactNumber: '',
    country: '',
    company: '',
    query: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data with zod
    const result = contactFormSchema.safeParse(formData);

    if (result.success) {
      console.log('Form data is valid:', result.data);
      // Proceed with form submission (e.g., send data to a server)
    } else {
      // Collect errors and set them to display
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors);
    }
  };
  
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
          <input
                type="text"
                name="firstName"
                placeholder="your name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                style={{borderColor: errors.firstName ? 'red' : 'black'}}
              />
              {/* {errors.firstName && <small className="error">{errors.firstName}</small>} */}
              <input
                type="text"
                name="secondName"
                placeholder="your second name"
                value={formData.secondName}
                onChange={handleInputChange}
                style={{borderColor: errors.secondName ? 'red' : 'black'}}
              />
              {/* {errors.secondName && <small className="error">{errors.secondName}</small>} */}

              <input
                type="text"
                name="email"
                placeholder="email address"
                value={formData.email}
                onChange={handleInputChange}
                style={{borderColor: errors.email ? 'red' : 'black'}}
              />
              {/* {errors.email && <small className="error">{errors.email}</small>} */}
              <input
                type="text"
                name="contactNumber"
                placeholder="contact number"
                value={formData.contactNumber}
                onChange={handleInputChange}
                style={{borderColor: errors.contactNumber ? 'red' : 'black'}}
              />
              {/* {errors.contactNumber && <small className="error">{errors.contactNumber}</small>} */}

              <input
                type="text"
                name="country"
                placeholder="country"
                value={formData.country}
                onChange={handleInputChange}
                style={{borderColor: errors.country ? 'red' : 'black'}}
              />
              {/* {errors.country && <small className="error">{errors.country}</small>} */}

           
              <input
                type="text"
                name="company"
                placeholder="company"
                value={formData.company}
                onChange={handleInputChange}
                style={{borderColor: errors.company ? 'red' : 'black'}}
              />

            <textarea
                name="query"
                placeholder="your query"
                value={formData.query}
                onChange={handleInputChange}
                style={{borderColor: errors.query ? 'red' : 'black'}}
              />
              {/* {errors.query && <small className="error">{errors.query}</small>} */}

       </form>
       <div className="CTBtn"><button onClick={handleSubmit}>Search</button></div>
     </div>
 </div>
</div>
    </>
  )
}

export default ContactForm

const contactFormSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  secondName: z.string().min(1, { message: 'Second name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  contactNumber: z.string().min(10, { message: 'Contact number must be at least 10 digits' }),
  country: z.string().min(1, { message: 'Country is required' }),
  company: z.string().optional(),
  query: z.string().min(1, { message: 'Query is required' }),
});