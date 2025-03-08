import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SignIn.css';
import { signUp, logIn } from '../api/auth';
import { AuthContext } from '../context/AuthContext';

const AuthForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialForm = queryParams.get("form") === "signup" ? "signup" : "signin";

  const [formType, setFormType] = useState(initialForm);
  const [signInError, setSignInError] = useState(null);
  const [signUpErrors, setSignUpErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    setSignInError(null);
    setSignUpErrors({});
  }, [formType]);

  // Apply fade-in to elements with the 'fade-element' class on mount
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-element');
    fadeElements.forEach(el => el.classList.add('fade-in'));
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const username = e.target.elements['username'].value;
    const password = e.target.elements['password'].value;
    const credentials = { username, password };

    try {
      const response = await logIn(credentials);
      login(response.token || true);
      navigate('/dashboard');
    } catch (error) {
      setSignInError(
        error.response?.data?.error ||
        error.response?.data?.detail ||
        "Invalid username or password. Please try again."
      );
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const username = e.target.elements['username'].value;
    const email = e.target.elements['email'].value;
    const password = e.target.elements['password'].value;
    const userData = { username, email, password };

    try {
      const response = await signUp(userData);
      setSignUpErrors({});
      login(response.token || true);
      navigate('/dashboard');
    } catch (error) {
      if (error.response?.data && typeof error.response.data === 'object') {
        setSignUpErrors({
          username: error.response.data.username ? error.response.data.username.join(" ") : "",
          email: error.response.data.email ? error.response.data.email.join(" ") : "",
          password: error.response.data.password ? error.response.data.password.join(" ") : "",
          general: error.response.data.non_field_errors ? error.response.data.non_field_errors.join(" ") : ""
        });
      } else {
        setSignUpErrors({ general: "Invalid sign up details. Please check your username, email, and password." });
      }
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Implement forgot password functionality as needed
  };

  const renderSignIn = () => (
    <>
      <h2 className="form-title">Sign In</h2>
      <form className="auth-form" onSubmit={handleSignIn}>
        <div className="form-group">
          <label htmlFor="signin-username">Username</label>
          <input type="text" id="signin-username" name="username" placeholder="Enter your username" required />
        </div>
        <div className="form-group">
          <label htmlFor="signin-password">Password</label>
          <input type="password" id="signin-password" name="password" placeholder="Enter your password" required />
        </div>
        {signInError && <div className="error-message">{signInError}</div>}
        <button type="submit" className="btn">Sign In</button>
      </form>
      <div className="or-divider">
        <span>OR</span>
      </div>
      <div className="action-buttons">
        <button className="secondary-btn" onClick={() => setFormType('signup')}>
          Create an Account
        </button>
        <button className="secondary-btn" onClick={() => setFormType('forgot')}>
          Forgot Password?
        </button>
      </div>
    </>
  );

  const renderSignUp = () => (
    <>
      <h2 className="form-title">Sign Up</h2>
      <form className="auth-form" onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="signup-username">Username</label>
          <input type="text" id="signup-username" name="username" placeholder="Choose a username" required />
          {signUpErrors.username && <div className="error-message">{signUpErrors.username}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="signup-email">Email Address</label>
          <input type="email" id="signup-email" name="email" placeholder="Your email address" required />
          {signUpErrors.email && <div className="error-message">{signUpErrors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="signup-password">Password</label>
          <input type="password" id="signup-password" name="password" placeholder="Create a password" required />
          {signUpErrors.password && <div className="error-message">{signUpErrors.password}</div>}
        </div>
        {signUpErrors.general && <div className="error-message">{signUpErrors.general}</div>}
        <button type="submit" className="btn">Sign Up</button>
      </form>
      <div className="form-switch">
        <button className="back-button" onClick={() => setFormType('signin')}>
          Back to Sign In
        </button>
      </div>
    </>
  );

  const renderForgotPassword = () => (
    <>
      <h2 className="form-title">Reset Password</h2>
      <form className="auth-form" onSubmit={handleForgotPassword}>
        <div className="form-group">
          <label htmlFor="forgot-email">Email Address</label>
          <input type="email" id="forgot-email" name="email" placeholder="Enter your email" required />
        </div>
        <button type="submit" className="btn">Send Reset Link</button>
      </form>
      <div className="form-switch">
        <button className="back-button" onClick={() => setFormType('signin')}>
          Back to Sign In
        </button>
      </div>
    </>
  );

  return (
    <div className="signin-page">
      {/* Hero Section: The hero background and overlay are static; hero text is inside fade-element */}
      <header className="signin-hero">
        <div className="hero-overlay">
          <div className="hero-text fade-element">
            <h1 className="hero-title">Welcome to RealEstateBidding</h1>
            <p className="hero-subtitle">Streamlining transactions. Maximizing results.</p>
          </div>
        </div>
      </header>
      {/* Split Layout with 2 Card Containers; entire card containers fade in */}
      <section className="signin-content">
        {/* Left Card: Entire container fades in */}
        <div className="signin-card-container fade-element">
          <div className="signin-info">
            <div className="info-overlay">
              <div className="info-text">
                <h2 className="info-title">Experience the Future of Real Estate</h2>
                <p className="info-description">
                  At RealEstateBidding, innovative technology meets trusted industry expertise to create a transparent, competitive marketplace.
                  Enjoy faster sales, fair market value, and hassle‑free negotiations—transforming the way you transact.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Card: Entire container fades in */}
        <div className="signin-card-container fade-element">
          <div className="auth-card">
            {formType === 'signin' && renderSignIn()}
            {formType === 'signup' && renderSignUp()}
            {formType === 'forgot' && renderForgotPassword()}
          </div>
        </div>
      </section>
      {/* Footer (static) */}
      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} RealEstateBidding. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AuthForm;
