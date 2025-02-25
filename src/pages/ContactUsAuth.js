// src/pages/ContactUsAuth.js
import React, { useState } from 'react';
import './ContactUsAuth.css';

const ContactUsAuth = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted form:', formData);
    // Add your API call logic here
  };

  const darkMode = localStorage.getItem('darkMode') === 'true';

  return (
    <div className={`contactus-auth-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="contactus-auth-card">
        <h1>Contact Us</h1>
        <p>Please fill out the form below and we'll get back to you as soon as possible.</p>
        <form className="contactus-auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsAuth;
