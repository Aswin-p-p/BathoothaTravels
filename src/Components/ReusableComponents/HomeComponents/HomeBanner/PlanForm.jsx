import React, { useState } from 'react'
import './HomeBanner.css';
import validationSchema from '../Validation/Validater'

function PlanForm() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    travellerEconomy: '',
    preferredAirport: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    try {
      validationSchema.parse({
        ...formData,
        [e.target.name]: e.target.value,
      });
      setErrors({ ...errors, [e.target.name]: '' });
    } catch (err) {
      setErrors({
        ...errors,
        [e.target.name]: err.errors.find((error) => error.path[0] === e.target.name)?.message,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      validationSchema.parse(formData);
      alert('Form is valid!');
    } catch (err) {
      const validationErrors = {};
      err.errors.forEach((error) => {
        validationErrors[error.path[0]] = error.message;
      });
      setErrors(validationErrors);
    }
  };
  return (
    <>

<div className="booking">
          <div className="head">
            <h4>Your Gateway to Global Travel <br /><span>Share Your Travel Plan</span></h4>
            <div className="icons">
              <button><img src="assets/homeimg/plane.png" alt="" />Flights</button>
              <button><img src="assets/homeimg/hotel.png" alt="" />Hotels</button>
            </div>
          </div>
          <form className="form_Book" >
            <div>
              <input
                type="text"
                name="from"
                placeholder="From"
                value={formData.from}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ borderColor: errors.from ? 'red' : 'black' }}
              />
              {errors.from && <p style={{ color: 'red' }}>{errors.from}</p>}
            </div>
            <div>
              <input
                type="text"
                name="to"
                placeholder="To"
                value={formData.to}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ borderColor: errors.to ? 'red' : 'black' }}
              />
              {errors.to && <p style={{ color: 'red' }}>{errors.to}</p>}
            </div>
            <div>
              <input
                type="text"
                name="departDate"
                placeholder="Depart Date"
                value={formData.departDate}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ borderColor: errors.departDate ? 'red' : 'black' }}
              />
              {errors.departDate && <p style={{ color: 'red' }}>{errors.departDate}</p>}
            </div>
            <div>
              <input
                type="text"
                name="returnDate"
                placeholder="Return Date"
                value={formData.returnDate}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ borderColor: errors.returnDate ? 'red' : 'black' }}
              />
              {errors.returnDate && <p style={{ color: 'red' }}>{errors.returnDate}</p>}
            </div>
            <div>
              <input
                type="text"
                name="travellerEconomy"
                placeholder="Traveller Economy"
                value={formData.travellerEconomy}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ borderColor: errors.travellerEconomy ? 'red' : 'black' }}
              />
              {errors.travellerEconomy && (
                <p style={{ color: 'red' }}>{errors.travellerEconomy}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="preferredAirport"
                placeholder="Preferred Airport (Optional)"
                value={formData.preferredAirport}
                onChange={handleChange}
              />
            </div>

          </form>
          <div className="search-btn" onClick={handleSubmit}><button>Search</button></div>
        </div>
      

       
    </>
  )
}

export default PlanForm