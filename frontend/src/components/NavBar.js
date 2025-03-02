import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import logo from './logo.png';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const navigate = useNavigate();

  // Refs for detecting clicks outside
  const navMenuContainerRef = useRef(null);
  const dropdownRef = useRef(null);

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const toggleSettings = () => {
    setSettingsOpen((prevSettingsOpen) => !prevSettingsOpen);
  };

  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  // Close Settings dropdown when clicking outside
  useEffect(() => {
    const handleClickOutsideDropdown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSettingsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutsideDropdown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDropdown);
    };
  }, []);

  // Close hamburger menu when clicking outside of the entire nav menu container
  useEffect(() => {
    const handleClickOutsideContainer = (event) => {
      if (isOpen && navMenuContainerRef.current && !navMenuContainerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutsideContainer);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideContainer);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      {/* Wrap the logo and company name in a Link */}
      <Link to={isAuthenticated ? "/dashboard" : "/"}>
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
          <span>RealEstateBidding</span>
        </div>
      </Link>
      {/* Wrap the menu and hamburger icon in the same container */}
      <div className="navbar-links" ref={navMenuContainerRef}>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          {isAuthenticated ? (
            <>
              <li><Link to="/dashboard">My Dashboard</Link></li>
              <li><Link to="/bids">Bids</Link></li>
              <li className="dropdown" ref={dropdownRef}>
                <button className="dropdown-toggle" onClick={toggleSettings}>
                  Settings
                </button>
                {settingsOpen && (
                  <ul className="dropdown-menu open">
                    <li>
                      <Link to="/settings/account">My Account Settings</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/contactus">Contact Us</Link>
                    </li>
                    <li>
                      <button className="dropdown-link" onClick={handleSignOut}>
                        Sign Out
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </>
          ) : (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
              <li className="sign-in-link"><Link to="/signin">Sign In</Link></li>
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
