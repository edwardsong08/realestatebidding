import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';
// Import API helper functions
import { signUp, logIn } from '../api/auth';
// Import the global authentication context
import { AuthContext } from '../context/AuthContext';

const AuthForm = () => {
  // 'signin' | 'signup' | 'forgot'
  const [formType, setFormType] = useState('signin');
  const navigate = useNavigate();
  // Get the login function from the global AuthContext
  const { login } = useContext(AuthContext);

  // Handle Sign In form submission
  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent page reload
    // Retrieve values from the form fields using their name attributes
    const username = e.target.elements['username'].value;
    const password = e.target.elements['password'].value;
    
    // Create an object containing credentials.
    const credentials = { 
      username,
      password 
    };

    try {
      // Call the logIn function from our API helper, which sends a POST request to our backend
      const response = await logIn(credentials);
      console.log('Sign in successful:', response);
      // Use the context's login function to update global auth state (pass token if available)
      login(response.token || true);
      // Redirect the user to the dashboard page
      navigate('/dashboard');
    } catch (error) {
      console.error('Sign in failed:', error.response?.data || error.message);
      // Optionally display an error message to the user here
    }
  };

  // Handle Sign Up form submission
  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent page reload
    // Retrieve values from the sign-up form fields.
    const username = e.target.elements['username'].value;
    const email = e.target.elements['email'].value;
    const password = e.target.elements['password'].value;
    
    // Prepare the user data object expected by your signUp API helper.
    const userData = {
      username, // shorthand for username: username
      email,    // shorthand for email: email
      password, // shorthand for password: password
    };

    try {
      // Call the signUp function from our API helper, which sends a POST request to your Django endpoint
      const response = await signUp(userData);
      console.log('Sign up successful:', response);
      // Update global auth state
      login(response.token || true);
      // Redirect to the dashboard page
      navigate('/dashboard');
    } catch (error) {
      console.error('Sign up failed:', error);
      // Optionally display an error message here
    }
  };

  // Handle Forgot Password form submission (placeholder; implement as needed)
  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log('Forgot password functionality is not yet implemented.');
    // You can add your forgot-password API call here when ready.
  };

  // Render Sign In form
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

  // Render Sign Up form
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
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
      <div className="signin-links">
        <button className="link-button" onClick={() => setFormType('signin')}>
          Back to Sign In
        </button>
      </div>
    </>
  );

  // Render Forgot Password form
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
