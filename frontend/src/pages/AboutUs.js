import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <header className="aboutus-header">
        <h1>About RealEstateBidding</h1>
      </header>
      <section className="aboutus-content">
        <p>
          At RealEstateBidding, we envision a real estate market where every transaction is defined by clarity, fairness, and trust. Our platform is built on the core values of transparency in market dealings and unbiased property valuations, ensuring that every participant—be it a buyer, seller, or real estate professional—has access to accurate and actionable information.
        </p>
        <p>
          We are committed to fostering an environment where the interests of all parties align. For buyers, this means discovering opportunities with confidence; for sellers, it translates to achieving the best possible value; and for real estate agents and companies, it offers a robust, efficient tool to serve their clients better. Our approach is rooted in ethical business practices and innovative technology, providing a seamless, user-friendly experience that respects the traditions of the industry while embracing modern efficiency.
        </p>
        <p>
          RealEstateBidding stands for a market that is both dynamic and equitable. We believe that by promoting transparency and open communication, we can build lasting trust and create value that benefits entire communities. Join us as we redefine property transactions with integrity and innovation.
        </p>
      </section>
      <footer className="aboutus-footer">
        <p>
          &copy; {new Date().getFullYear()} RealEstateBidding &mdash; Transforming Real Estate with Integrity and Innovation.
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
