import React, { useState, useEffect } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [contactType, setContactType] = useState('nonMember');

  useEffect(() => {
    // Automatically add fade-in to all fade-element elements on mount
    const fadeElements = document.querySelectorAll('.fade-element');
    fadeElements.forEach(el => el.classList.add('fade-in'));
  }, []);

  return (
    <div className="contactus-page">
      {/* Hero Section */}
      <header className="contactus-hero">
        <div className="overlay">
          <h1 className="fade-element">Get in Touch</h1>
          <p className="fade-element">
            We’d love to hear from you. Whether you’re a buyer, seller, or partner, let’s start a conversation.
          </p>
        </div>
      </header>
      {/* Main Content Section */}
      <section className="contactus-content">
        <div className="contact-info fade-element">
          <h2>Contact Information</h2>
          <p><strong>Office:</strong> 123 Real Estate Avenue, New York, NY</p>
          <p><strong>Phone:</strong> (123) 456‑7890</p>
          <p><strong>Email:</strong> info@OpenBid.com</p>
          <div className="map-placeholder"></div>
        </div>
        <div className="contact-form-container fade-element">
          <div className="form-header">
            <div className="tabs">
              <button
                className={contactType === 'nonMember' ? 'active' : ''}
                onClick={() => setContactType('nonMember')}
              >
                Non‑Member
              </button>
              <button
                className={contactType === 'member' ? 'active' : ''}
                onClick={() => setContactType('member')}
              >
                Member
              </button>
              <button
                className={contactType === 'enterprise' ? 'active' : ''}
                onClick={() => setContactType('enterprise')}
              >
                Enterprise/Partner
              </button>
            </div>
          </div>
          <form className="contact-form">
            {contactType === 'nonMember' && (
              <div className="form-fields">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Your message" required></textarea>
                </div>
              </div>
            )}
            {contactType === 'member' && (
              <div className="form-fields">
                <div className="form-group">
                  <label htmlFor="memberName">Name</label>
                  <input type="text" id="memberName" name="memberName" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="memberEmail">Email Address</label>
                  <input type="email" id="memberEmail" name="memberEmail" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="memberId">Member ID</label>
                  <input type="text" id="memberId" name="memberId" placeholder="Enter your member ID" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Your message" required></textarea>
                </div>
              </div>
            )}
            {contactType === 'enterprise' && (
              <div className="form-fields">
                <div className="form-group">
                  <label htmlFor="companyName">Company Name</label>
                  <input type="text" id="companyName" name="companyName" placeholder="Enter your company name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contactPerson">Contact Person</label>
                  <input type="text" id="contactPerson" name="contactPerson" placeholder="Enter contact person name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="enterpriseEmail">Email Address</label>
                  <input type="email" id="enterpriseEmail" name="enterpriseEmail" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Your message" required></textarea>
                </div>
              </div>
            )}
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
