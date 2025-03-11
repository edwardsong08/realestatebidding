import React, { useEffect } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    // Scroll to the top on mount
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-element');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="aboutus-page">
      {/* Hero Section: Only the text fades in */}
      <header className="aboutus-hero-section">
        <div className="aboutus-hero-overlay"></div>
        <div className="aboutus-hero-content fade-element">
          <h1>About OpenBid</h1>
          <p>Transforming Real Estate with Integrity, Innovation &amp; Clarity</p>
        </div>
      </header>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-card fade-element">
          <h2>Our Story &amp; Vision</h2>
          <p>
            OpenBid was founded by industry experts determined to revolutionize property transactions.
            Our vision is to create a seamless, data‑driven marketplace that empowers buyers, sellers, and professionals.
            By merging innovative technology with time‑honored values, we ensure transparency and trust in every deal.
          </p>
          <p>
            At OpenBid, our journey began with a simple yet powerful realization: the traditional real estate market is ripe for transformation. 
            Founded by seasoned industry professionals, we witnessed firsthand the challenges of opaque transactions and inefficient processes. 
            Determined to redefine these experiences, we envisioned a platform where technology and transparency converge to empower every participant.
          </p>
          <p>
            Our vision is to build a seamless, data‑driven marketplace that elevates the standards of trust and efficiency in property transactions. 
            By harnessing cutting‑edge technology alongside time‑honored values, we create an environment where buyers, sellers, and professionals can engage with complete confidence. 
            Every decision we make is rooted in a commitment to ethical practices and a passion for innovation, ensuring that every deal reflects clarity, fairness, and mutual respect.
          </p>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="mission-values-section">
        <div className="mv-container">
          <div className="mv-card fade-element">
            <h2>Our Mission</h2>
            <p>
              To build a marketplace that is fair, efficient, and transparent.
              We provide the insights and tools to empower every stakeholder in making informed decisions.
            </p>
          </div>
          <div className="mv-card fade-element">
            <h2>Our Values</h2>
            <p>
              Integrity, innovation, and accountability drive us.
              We cultivate a culture of open communication and ethical practices to earn lasting trust.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-content">
          <h2 className="fade-element">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-card fade-element">
              <img src="https://via.placeholder.com/150" alt="Jane Doe" />
              <h3>Jane Doe</h3>
              <p>CEO &amp; Founder</p>
            </div>
            <div className="team-card fade-element">
              <img src="https://via.placeholder.com/150" alt="John Smith" />
              <h3>John Smith</h3>
              <p>CTO</p>
            </div>
            <div className="team-card fade-element">
              <img src="https://via.placeholder.com/150" alt="Emily Johnson" />
              <h3>Emily Johnson</h3>
              <p>COO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
