import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import logo from './logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Temporary state for authentication; in a real app, get this from context or props.
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const navigate = useNavigate();

  // Ref for the dropdown container (for the Settings submenu)
  const dropdownRef = useRef(null);
  // Ref for the hamburger menu (the main navigation links container)
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  // Close the Settings dropdown if clicking outside of it
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
  }, [dropdownRef]);

  // Close the hamburger menu if clicking outside of it
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
  }, [isOpen, menuRef]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span>RealEstateBidding</span>
      </div>
      <div className="navbar-links">
        <ul ref={menuRef} className={`navbar-menu ${isOpen ? "open" : ""}`}>
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
