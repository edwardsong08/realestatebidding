import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import logo from './logo.png';

const NavBar = () => {
  // Initialize authentication state by reading from localStorage.
  // If the value is 'true', the user is considered authenticated.
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const [isOpen, setIsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const navigate = useNavigate();

  // Ref for the Settings dropdown container
  const dropdownRef = useRef(null);
  // Ref for the hamburger menu container
  const menuRef = useRef(null);

  // Toggle the hamburger menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle the Settings dropdown open/close
  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  // Handle sign out:
  //  - Clear the temporary auth flag from localStorage
  //  - Update the local state
  //  - Navigate back to the landing page
  const handleSignOut = () => {
    localStorage.setItem('isAuthenticated', 'false');
    setIsAuthenticated(false);
    navigate('/');
  };

  // Close the Settings dropdown when clicking outside of it
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

  // Close the hamburger menu when clicking outside of it
  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutsideMenu);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span>RealEstateBidding</span>
      </div>
      <div className="navbar-links">
        <ul ref={menuRef} className={`navbar-menu ${isOpen ? 'open' : ''}`}>
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
