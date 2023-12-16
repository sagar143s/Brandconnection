import React, { useState } from 'react';
import './contact.css'; // Import your CSS file
import Image01 from '../../assets/contcat/BABOLAT WIDE 2.jpg'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    Phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLabelClick = (inputId) => {
    document.getElementById(inputId).focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add an API call or any other logic to handle form submission
  };

  return (
    <div className='container01' style={{ padding: '20px 0' }}>
      <div className='contact-container'>
        <div className='contact-image'>
          <img src={Image01} alt='Contact' />
        </div>
        <div className='contact-form-container'>
          <form onSubmit={handleSubmit} className='contact-form'>
            <div className='form-group'>
              <label
                htmlFor='name'
                className={formData.name ? 'active' : ''}
                onClick={() => handleLabelClick('name')}
              >
                Name:
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-group'>
              <label
                htmlFor='email'
                className={formData.email ? 'active' : ''}
                onClick={() => handleLabelClick('email')}
              >
                Email:
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-group'>
              <label
                htmlFor='Phone'
                className={formData.Phone ? 'active' : ''}
                onClick={() => handleLabelClick('Phone')}
              >
                Phone:
              </label>
              <input
                id='Phone'
                name='Phone'
                value={formData.Phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-group'>
              <label
                htmlFor='message'
                className={formData.message ? 'active' : ''}
                onClick={() => handleLabelClick('message')}
              >
                Message:
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
