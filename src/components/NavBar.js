import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Temporary state for authentication. Set to true to simulate a signed-in user.
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Replace the placeholder URL with your actual logo */}
        <img src="https://via.placeholder.com/40" alt="Logo" />
        <span>RealEstateBidding</span>
      </div>
      <div className="navbar-links">
        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          {isAuthenticated ? (
            <>
              <li><Link to="/dashboard/myaccount">My Account</Link></li>
              <li><Link to="/dashboard/buy">Buy</Link></li>
              <li><Link to="/dashboard/sell">Sell</Link></li>
              <li><Link to="/dashboard/settings">Settings</Link></li>
              <li><Link to="/signout">Sign Out</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
            </>
          )}
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
