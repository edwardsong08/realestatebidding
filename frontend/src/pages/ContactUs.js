import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [contactType, setContactType] = useState('nonMember');

  const handleContactTypeChange = (e) => {
    setContactType(e.target.value);
  };

  return (
    <div className="contactus-container">
      <div className="contactus-card">
        {/* Fixed header area */}
        <div className="contactus-header">
          <h1>Contact Us</h1>
          <div className="contact-type-selection">
            <label>
              <input 
                type="radio" 
                name="contactType" 
                value="nonMember" 
                checked={contactType === 'nonMember'}
                onChange={handleContactTypeChange}
              />
              Non-Member
            </label>
            <label>
              <input 
                type="radio" 
                name="contactType" 
                value="member" 
                checked={contactType === 'member'}
                onChange={handleContactTypeChange}
              />
              Member
            </label>
            <label>
              <input 
                type="radio" 
                name="contactType" 
                value="enterprise" 
                checked={contactType === 'enterprise'}
                onChange={handleContactTypeChange}
              />
              Enterprise/Partner
            </label>
          </div>
        </div>

        {/* Form container – starts below the header */}
        <div className="contactus-form-container">
          <form className="contactus-form">
            {contactType === 'nonMember' && (
              <div className="form-fields">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    placeholder="Enter your full name" 
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your email" 
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="Subject" 
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Your message" 
                    required
                  ></textarea>
                </div>
              </div>
            )}

            {contactType === 'member' && (
              <div className="form-fields">
                <div className="form-group">
                  <label htmlFor="memberName">Name</label>
                  <input 
                    type="text" 
                    id="memberName" 
                    name="memberName" 
                    placeholder="Enter your name" 
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="memberEmail">Email Address</label>
                  <input 
                    type="email" 
                    id="memberEmail" 
                    name="memberEmail" 
                    placeholder="Enter your email" 
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="memberId">Member ID</label>
                  <input 
                    type="text" 
                    id="memberId" 
                    name="memberId" 
                    placeholder="Enter your member ID" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="Subject" 
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Your message" 
                    required
                  ></textarea>
                </div>
              </div>
            )}

            {contactType === 'enterprise' && (
              <div className="form-fields">
                <div className="form-group">
                  <label htmlFor="companyName">Company Name</label>
                  <input 
                    type="text" 
                    id="companyName" 
                    name="companyName" 
                    placeholder="Enter your company name" 
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contactPerson">Contact Person</label>
                  <input 
                    type="text" 
                    id="contactPerson" 
                    name="contactPerson" 
                    placeholder="Enter contact person name" 
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="enterpriseEmail">Email Address</label>
                  <input 
                    type="email" 
                    id="enterpriseEmail" 
                    name="enterpriseEmail" 
                    placeholder="Enter your email" 
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="Enter your phone number" 
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="Subject" 
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Your message" 
                    required
                  ></textarea>
                </div>
              </div>
            )}

            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
