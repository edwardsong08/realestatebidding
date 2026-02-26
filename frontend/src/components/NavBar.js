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

  // Helper function to scroll to top
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  // Enable transparent behavior on specific pages
  const enableTransparentBehavior =
    location.pathname === '/' ||
    location.pathname === '/aboutus' ||
    location.pathname === '/contactus' ||
    location.pathname === '/signin';

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

  // Close hamburger menu when navigating to a new page
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Scroll handler for specific pages
  useEffect(() => {
    if (!enableTransparentBehavior) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableTransparentBehavior, location.pathname]);

  // Handle ESC key to close menu for better keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to={isAuthenticated ? "/dashboard" : "/"} onClick={handleLinkClick}>
            <div className="navbar-logo">
              <img src={logo} alt="Logo" />
              <span>OpenBid</span>
            </div>
          </Link>
          <div className="navbar-links" ref={navMenuContainerRef}>
            <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
              {isAuthenticated ? (
                <>
                  <li>
                    <Link to="/dashboard" onClick={handleLinkClick}>My Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/bids" onClick={handleLinkClick}>Bids</Link>
                  </li>
                  <li className="dropdown" ref={dropdownRef}>
                    <button className="dropdown-toggle" onClick={toggleSettings}>Settings</button>
                    {settingsOpen && (
                      <ul className="dropdown-menu open">
                        <li>
                          <Link to="/settings/account" onClick={handleLinkClick}>My Account Settings</Link>
                        </li>
                        <li>
                          <Link to="/dashboard/contactus" onClick={handleLinkClick}>Contact Us</Link>
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
                    <Link to="/" onClick={handleLinkClick}>Home</Link>
                  </li>
                  <li>
                    <Link to="/aboutus" onClick={handleLinkClick}>About Us</Link>
                  </li>
                  <li>
                    <Link to="/contactus" onClick={handleLinkClick}>Contact Us</Link>
                  </li>

                  {/* KEY FIX:
                      Always navigate with ?form=signin so clicking Sign In
                      switches to sign-in mode even if you're already on /signin. */}
                  <li className="sign-in-link">
                    <Link to="/signin?form=signin" onClick={handleLinkClick}>Sign In</Link>
                  </li>
                </>
              )}
            </ul>
            <button
              className={`hamburger ${isOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              type="button"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </nav>
      {isOpen && <div className="navbar-overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default NavBar;