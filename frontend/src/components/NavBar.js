import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './NavBar.css';
import logo from './logo.png';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Enable transparent behavior on landing ("/") and About Us ("/aboutus") pages
  const enableTransparentBehavior = location.pathname === '/' || location.pathname === '/aboutus' || location.pathname === '/contactus' || location.pathname === '/signin';

  // Refs for clicks outside
  const navMenuContainerRef = useRef(null);
  const dropdownRef = useRef(null);

  // Toggle hamburger menu
  const toggleMenu = () => setIsOpen(prev => !prev);
  const toggleSettings = () => setSettingsOpen(prev => !prev);
  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutsideDropdown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutsideDropdown);
    return () => document.removeEventListener('mousedown', handleClickOutsideDropdown);
  }, []);

  // Close hamburger menu when clicking outside the navbar-links container
  useEffect(() => {
    const handleClickOutsideContainer = (event) => {
      if (isOpen && navMenuContainerRef.current && !navMenuContainerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutsideContainer);
    return () => document.removeEventListener('mousedown', handleClickOutsideContainer);
  }, [isOpen]);

  // Scroll handler for landing page
  useEffect(() => {
    if (!enableTransparentBehavior) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    handleScroll(); // Set initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableTransparentBehavior, location.pathname]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to={isAuthenticated ? "/dashboard" : "/"} onClick={() => window.scrollTo(0, 0)}>
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
            <span>RealEstateBidding</span>
          </div>
        </Link>
        <div className="navbar-links" ref={navMenuContainerRef}>
          <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/dashboard" onClick={() => window.scrollTo(0, 0)}>My Dashboard</Link>
                </li>
                <li>
                  <Link to="/bids" onClick={() => window.scrollTo(0, 0)}>Bids</Link>
                </li>
                <li className="dropdown" ref={dropdownRef}>
                  <button className="dropdown-toggle" onClick={toggleSettings}>Settings</button>
                  {settingsOpen && (
                    <ul className="dropdown-menu open">
                      <li>
                        <Link to="/settings/account" onClick={() => window.scrollTo(0, 0)}>My Account Settings</Link>
                      </li>
                      <li>
                        <Link to="/dashboard/contactus" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>
                      </li>
                      <li>
                        <button className="dropdown-link" onClick={handleSignOut}>Sign Out</button>
                      </li>
                    </ul>
                  )}
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                </li>
                <li>
                  <Link to="/aboutus" onClick={() => window.scrollTo(0, 0)}>About Us</Link>
                </li>
                <li>
                  <Link to="/contactus" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>
                </li>
                <li className="sign-in-link">
                  <Link to="/signin" onClick={() => window.scrollTo(0, 0)}>Sign In</Link>
                </li>
              </>
            )}
          </ul>
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
