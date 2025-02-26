import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      
      {/* Full-Screen Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to RealEstateBidding</h1>
          <p>Your premier platform for property auctions in New York and New Jersey.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2>About Our Platform</h2>
          <p>
            At RealEstateBidding, transparency, efficiency, and fairness drive every transaction.
            We connect buyers, sellers, and real estate professionals in an environment where clear data and ethical practices create value for everyone.
          </p>
          <p>
            Our mission is to empower every stakeholder with the tools and information needed to make informed decisions, ensuring that market transactions are as open and beneficial as possible.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2>Benefits for Everyone</h2>
        <div className="benefit-cards">
          <div className="benefit-card">
            <h3>Buyers</h3>
            <p>
              Discover your dream property with confidence and bid transparently for the best value.
            </p>
          </div>
          <div className="benefit-card">
            <h3>Sellers</h3>
            <p>
              Reach a wide audience and secure competitive offers, ensuring optimal returns on your property.
            </p>
          </div>
          <div className="benefit-card">
            <h3>Agents & Partners</h3>
            <p>
              Enhance your service portfolio with real-time insights and streamlined transaction tools.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="service-area-section">
        <div className="service-area-content">
          <h2>Serving New York & New Jersey</h2>
          <p>
            Our platform is designed specifically for the dynamic markets of New York and New Jersey, providing localized expertise and support.
          </p>
        </div>
      </section>

      {/* Call-to-Action / Features Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Experience the Future of Real Estate Transactions</h2>
          <p>
            Explore a platform where every detail is engineered for transparency and efficiency. Ready to transform the way you transact? Dive in and discover the benefits.
          </p>
        </div>
      </section>

      {/* Additional Placeholder Image Section */}
      <section className="placeholder-section">
        {/* Background image set via CSS */}
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>
              "RealEstateBidding revolutionized my approach to property buying. The process is transparent and empowering."
            </p>
            <span>- John Doe, Buyer</span>
          </div>
          <div className="testimonial">
            <p>
              "This platform streamlines every step of the property sale. It's a game-changer for our agency."
            </p>
            <span>- Jane Smith, Real Estate Agent</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} RealEstateBidding. All rights reserved.</p>
      </footer>
      
    </div>
  );
};

export default LandingPage;
