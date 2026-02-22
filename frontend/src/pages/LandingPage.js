import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import salesIcon from './resources/sales.png';
import negotiationsIcon from './resources/negotiations.png';
import auctionIcon from './resources/auction.png';
import buyersImage from './resources/homebuyer.jpg';
import sellersImage from './resources/homeseller.jpg';
import agentsImage from './resources/realestateagent.jpg';
import newYorkIcon from './resources/new-york.png';
import newJerseyIcon from './resources/new-jersey.png';
import callToActionImg from './resources/calltoactionimg.jpg';

const LandingPage = () => {
  useEffect(() => {
    // Scroll to the top on mount
    window.scrollTo(0, 0);

    // Parallax effect: adjust background position on scroll
    const handleScroll = () => {
      const offset = window.pageYOffset * 0.5;
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        heroSection.style.backgroundPosition = `center calc(40% + ${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for fade-in effects.
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-element, .fade-zoom, .fade-text');
    elements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content fade-element">
          <h1>
            Real estate made simple. <br />
            Streamline your transactions and maximize results.
          </h1>
          <Link to="/signin?form=signup" className="cta-button">
            Get Started
          </Link>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <div className="why-choose-content fade-element">
          <h2>Why Choose OpenBid?</h2>
          <p className="subheading">
            A smarter way to buy and sell properties—built to align everyone’s interests.
          </p>
          <div className="why-choose-cards">
            <div className="why-choose-card fade-element">
              <img src={salesIcon} alt="Sales" className="card-icon" />
              <h3>Faster Sales</h3>
              <p>Sell in weeks, not months—reducing costs and time on the market.</p>
            </div>
            <div className="why-choose-card fade-element">
              <img src={negotiationsIcon} alt="Negotiations" className="card-icon" />
              <h3>Hassle-Free Negotiations</h3>
              <p>Auctions eliminate prolonged negotiations, simplifying transactions.</p>
            </div>
            <div className="why-choose-card fade-element">
              <img src={auctionIcon} alt="Auction" className="card-icon" />
              <h3>Transparent Bidding</h3>
              <p>Every bid is visible in real time, ensuring fairness and eliminating hidden offers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width "What We Can Do for You" Section */}
      <section className="what-we-can-fullwidth">
        <div className="fullwidth-grid">
          {/* A: Top Left: Image for Buyers with zoom effect */}
          <div className="grid-item image-box top-left grid-A">
            <div
              className="image-inner fade-zoom"
              style={{ backgroundImage: `url(${buyersImage})` }}
            ></div>
          </div>

          {/* B: Top Right: Text for Buyers */}
          <div className="grid-item text-box top-right grid-B">
            <div className="text-fade fade-text">
              <h3>For Buyers</h3>
              <p>Find your dream home with confidence in an open, competitive marketplace.</p>
              <ul>
                <li>
                  <strong>Fair Market Value:</strong> Competitive bidding ensures properties sell for what
                  they’re worth.
                </li>
                <li>
                  <strong>Committed Sellers:</strong> Only serious sellers list on our platform, reducing
                  wasted time.
                </li>
                <li>
                  <strong>Seamless Planning:</strong> Transparent timelines let you plan your purchase
                  without surprises.
                </li>
              </ul>
            </div>
          </div>

          {/* C: Middle Left: Text for Sellers */}
          <div className="grid-item text-box middle-left grid-C">
            <div className="text-fade fade-text">
              <h3>For Sellers</h3>
              <p>Maximize your property’s value with the power of competitive bidding.</p>
              <ul>
                <li>
                  <strong>Faster Sales, Lower Costs:</strong> Selling quickly reduces taxes, maintenance,
                  and holding costs.
                </li>
                <li>
                  <strong>Better Offers Through Competition:</strong> Auctions drive prices higher than
                  traditional negotiations.
                </li>
                <li>
                  <strong>Unmatched Market Exposure:</strong> Gain access to a wide pool of motivated
                  buyers.
                </li>
              </ul>
            </div>
          </div>

          {/* D: Middle Right: Image for Sellers with zoom effect */}
          <div className="grid-item image-box middle-right grid-D">
            <div
              className="image-inner fade-zoom"
              style={{ backgroundImage: `url(${sellersImage})` }}
            ></div>
          </div>

          {/* E: Bottom Left: Image for Agents with zoom effect */}
          <div className="grid-item image-box bottom-left grid-E">
            <div
              className="image-inner fade-zoom"
              style={{ backgroundImage: `url(${agentsImage})` }}
            ></div>
          </div>

          {/* F: Bottom Right: Text for Agents & Partners */}
          <div className="grid-item text-box bottom-right grid-F">
            <div className="text-fade fade-text">
              <h3>For Real Estate Agents &amp; Partners</h3>
              <p>Expand your client base and close deals faster with tech-powered transactions.</p>
              <ul>
                <li>
                  <strong>Shorter Sales Cycles:</strong> Auctions speed up transactions, minimizing market
                  delays.
                </li>
                <li>
                  <strong>Higher Client Satisfaction:</strong> Transparent and efficient processes build
                  trust.
                </li>
                <li>
                  <strong>Access to a Larger Buyer Network:</strong> More competition means more
                  successful sales.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Operate Section */}
      <section className="where-we-operate-section">
        <div className="where-we-operate-content fade-element">
          <h2>Where We Operate</h2>
          <p className="subheading">
            Serving New York &amp; New Jersey with full compliance to state regulations—ensuring
            transparency and reliability.
          </p>
          <div className="state-cards">
            <div className="state-card fade-element">
              <div className="state-image">
                <img src={newYorkIcon} alt="New York" />
              </div>
              <h3>New York</h3>
            </div>
            <div className="state-card fade-element">
              <div className="state-image">
                <img src={newJerseyIcon} alt="New Jersey" />
              </div>
              <h3>New Jersey</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <h2 className="fade-element">What Our Users Say</h2>
        <div className="testimonials">
          <div className="testimonial fade-element">
            <p>
              "OpenBid revolutionized my approach to property buying. The process is transparent and
              empowering."
            </p>
            <span>- John Doe, Buyer</span>
          </div>
          <div className="testimonial fade-element">
            <p>
              "This platform streamlines every step of the property sale. It's a game-changer for our
              agency."
            </p>
            <span>- Jane Smith, Real Estate Agent</span>
          </div>
        </div>
      </section>

      {/* Split Call-to-Action Section */}
      <section className="cta-split-section">
        <div className="cta-image" style={{ height: '600px' }}>
          <div
            className="image-inner fade-zoom"
            style={{ backgroundImage: `url(${callToActionImg})` }}
          ></div>
        </div>
        <div className="cta-text">
          <div className="text-fade fade-text">
            <h2>Experience the Future of Real Estate Transactions</h2>
            <p>
              Explore a platform where every detail is engineered for transparency and efficiency. Ready
              to transform the way you transact? Dive in and discover the benefits.
            </p>
            <Link to="/signin?form=signup" className="cta-button">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;