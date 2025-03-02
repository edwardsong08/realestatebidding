import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      
      {/* Full-Screen Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Real estate made simple. Streamline your transactions and maximize results.
          </h1>
          <Link to="/signin?form=signup" className="hero-button">
            Get Started
          </Link>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <div className="why-choose-content">
          <h2>Why Choose RealEstateBidding?</h2>
          <p className="subheading">
            A smarter way to buy and sell properties—built to align everyone’s interests.
          </p>
          <ul className="benefits-list">
            <li>
              <strong>Faster Sales:</strong> Sell in weeks, not months—reducing costs and time on the market.
            </li>
            <li>
              <strong>No Back-and-Forth Negotiations:</strong> Auctions eliminate prolonged negotiations, simplifying transactions.
            </li>
            <li>
              <strong>Transparent Bidding:</strong> Every bid is visible in real time, ensuring fairness and eliminating hidden offers.
            </li>
          </ul>
        </div>
      </section>

      {/* What We Can Do for You Section */}
<section className="what-we-can-section">
  <h2>What We Can Do for You</h2>
  <div className="what-we-can-cards">
    <div className="what-we-can-card">
      <h3>For Buyers</h3>
      <p>Find your dream home with confidence in an open, competitive marketplace.</p>
      <ul>
        <li>
          <strong>Fair Market Value:</strong> Competitive bidding ensures properties sell for what they’re worth.
        </li>
        <li>
          <strong>Committed Sellers:</strong> Only serious sellers list on our platform, reducing wasted time.
        </li>
        <li>
          <strong>Seamless Planning:</strong> Transparent timelines let you plan your purchase without surprises.
        </li>
      </ul>
    </div>
    <div className="what-we-can-card">
      <h3>For Sellers</h3>
      <p>Maximize your property’s value with the power of competitive bidding.</p>
      <ul>
        <li>
          <strong>Faster Sales, Lower Costs:</strong> Selling quickly reduces taxes, maintenance, and holding costs.
        </li>
        <li>
          <strong>Better Offers Through Competition:</strong> Auctions drive prices higher than traditional negotiations.
        </li>
        <li>
          <strong>Unmatched Market Exposure:</strong> Gain access to a wide pool of motivated buyers.
        </li>
      </ul>
    </div>
    <div className="what-we-can-card">
      <h3>For Real Estate Agents & Partners</h3>
      <p>Expand your client base and close deals faster with tech-powered transactions.</p>
      <ul>
        <li>
          <strong>Shorter Sales Cycles:</strong> Auctions speed up transactions, minimizing market delays.
        </li>
        <li>
          <strong>Higher Client Satisfaction:</strong> Transparent and efficient processes build trust.
        </li>
        <li>
          <strong>Access to a Larger Buyer Network:</strong> More competition means more successful sales.
        </li>
      </ul>
    </div>
  </div>
</section>

      {/* Where We Operate Section */}
<section className="where-we-operate-section">
  <div className="where-we-operate-content">
    <h2>Where We Operate</h2>
    <p>
      We are currently available in New York and New Jersey, bringing innovation and transparency to local real estate transactions.
    </p>
    <div className="state-cards">
      <div className="state-card">
        <div className="state-image new-york">
          {/* Replace the placeholder URL with an outlined SVG or image of New York */}
        </div>
        <h3>New York</h3>
      </div>
      <div className="state-card">
        <div className="state-image new-jersey">
          {/* Replace the placeholder URL with an outlined SVG or image of New Jersey */}
        </div>
        <h3>New Jersey</h3>
      </div>
    </div>
  </div>
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

              {/* Split Call-to-Action Section */}
  <section className="cta-split-section">
    <div className="cta-image"></div>
    <div className="cta-text">
      <h2>Experience the Future of Real Estate Transactions</h2>
      <p>
        Explore a platform where every detail is engineered for transparency and efficiency.
        Ready to transform the way you transact? Dive in and discover the benefits.
      </p>
      <Link to="/signin?form=signup" className="cta-button">
        Get Started
      </Link>
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
