import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './SignIn.css';
import { signUp, logIn } from '../api/auth';
import { AuthContext } from '../context/AuthContext';

const AuthForm = () => {
  // Use the useLocation hook to read query parameters
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialForm = queryParams.get("form") === "signup" ? "signup" : "signin";

  const [formType, setFormType] = useState(initialForm);
  const [signInError, setSignInError] = useState(null);
  const [signUpErrors, setSignUpErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  // Clear errors when switching between forms
  useEffect(() => {
    setSignInError(null);
    setSignUpErrors({});
  }, [formType]);

  // Handle Sign In form submission
  const handleSignIn = async (e) => {
    e.preventDefault();
    const username = e.target.elements['username'].value;
    const password = e.target.elements['password'].value;
    const credentials = { username, password };

    try {
      const response = await logIn(credentials);
      console.log('Sign in successful:', response);
      login(response.token || true);
      navigate('/dashboard');
    } catch (error) {
      console.error('Sign in failed:', error.response?.data || error.message);
      setSignInError(
        error.response?.data?.error ||
        error.response?.data?.detail ||
        "Invalid username or password. Please try again."
      );
    }
  };

  // Handle Sign Up form submission with field-specific error handling
  const handleSignUp = async (e) => {
    e.preventDefault();
    const username = e.target.elements['username'].value;
    const email = e.target.elements['email'].value;
    const password = e.target.elements['password'].value;
    const userData = { username, email, password };

    try {
      const response = await signUp(userData);
      console.log('Sign up successful:', response);
      setSignUpErrors({});
      login(response.token || true);
      navigate('/dashboard');
    } catch (error) {
      console.error('Sign up failed:', error.response?.data || error.message);
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

  // Handle Forgot Password form submission (placeholder)
  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log('Forgot password functionality is not yet implemented.');
  };

  // Render Sign In form with a single error message
  const renderSignIn = () => (
    <>
      <h1>Sign In</h1>
      <form className="signin-form" onSubmit={handleSignIn}>
        <div className="form-group">
          <label htmlFor="signin-username">Username</label>
          <input
            type="text"
            id="signin-username"
            name="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="signin-password">Password</label>
          <input
            type="password"
            id="signin-password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        {signInError && <div className="error-message">{signInError}</div>}
        <button type="submit" className="btn">Sign In</button>
      </form>
      <div className="signin-links">
        <button className="link-button" onClick={() => setFormType('signup')}>
          Sign Up
        </button>
        <button className="link-button" onClick={() => setFormType('forgot')}>
          Forgot Password?
        </button>
      </div>
    </>
  );

  // Render Sign Up form with field-specific error messages
  const renderSignUp = () => (
    <>
      <h1>Sign Up</h1>
      <form className="signin-form" onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="signup-username">Username</label>
          <input
            type="text"
            id="signup-username"
            name="username"
            placeholder="Enter your username"
            required
          />
          {signUpErrors.username && <div className="error-message">{signUpErrors.username}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="signup-email">Email Address</label>
          <input
            type="email"
            id="signup-email"
            name="email"
            placeholder="Enter your email"
            required
          />
          {signUpErrors.email && <div className="error-message">{signUpErrors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="signup-password">Password</label>
          <input
            type="password"
            id="signup-password"
            name="password"
            placeholder="Create a password"
            required
          />
          {signUpErrors.password && <div className="error-message">{signUpErrors.password}</div>}
        </div>
        {signUpErrors.general && <div className="error-message">{signUpErrors.general}</div>}
        <button type="submit" className="btn">Sign Up</button>
      </form>
      <div className="signin-links">
        <button className="link-button" onClick={() => setFormType('signin')}>
          Back to Sign In
        </button>
      </div>
    </>
  );

  // Render Forgot Password form (placeholder)
  const renderForgotPassword = () => (
    <>
      <h1>Reset Password</h1>
      <form className="signin-form" onSubmit={handleForgotPassword}>
        <div className="form-group">
          <label htmlFor="forgot-email">Email Address</label>
          <input
            type="email"
            id="forgot-email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className="btn">Send Reset Link</button>
      </form>
      <div className="signin-links">
        <button className="link-button" onClick={() => setFormType('signin')}>
          Back to Sign In
        </button>
      </div>
    </>
  );

  return (
    <div className="signin-container">
      <div className="signin-card">
        {formType === 'signin' && renderSignIn()}
        {formType === 'signup' && renderSignUp()}
        {formType === 'forgot' && renderForgotPassword()}
      </div>
    </div>
  );
};

export default AuthForm;
