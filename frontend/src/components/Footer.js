import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="section-content">
        <p>
          &copy; {new Date().getFullYear()} OpenBid &mdash; Transforming Real Estate with Integrity and Innovation.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
