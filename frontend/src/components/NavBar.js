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
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  const handleSignOut = () => {
    logout(); // Use the logout function from AuthContext
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

  // Close hamburger menu when clicking outside
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
