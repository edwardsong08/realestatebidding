import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './SignIn.css';

const AuthForm = () => {
  // 'signin' | 'signup' | 'forgot'
  const [formType, setFormType] = useState('signin');

  const renderSignIn = () => (
    <>
      <h1>Sign In</h1>
      <form className="signin-form">
        <div className="form-group">
          <label htmlFor="signin-email">Email Address</label>
          <input
            type="email"
            id="signin-email"
            name="email"
            placeholder="Enter your email"
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
        {/* Use buttons styled as links to switch forms */}
        <button className="link-button" onClick={() => setFormType('signup')}>
          Sign Up
        </button>
        <button className="link-button" onClick={() => setFormType('forgot')}>
          Forgot Password?
        </button>
      </div>
    </>
  );

  const renderSignUp = () => (
    <>
      <h1>Sign Up</h1>
      <form className="signin-form">
        <div className="form-group">
          <label htmlFor="signup-name">Full Name</label>
          <input
            type="text"
            id="signup-name"
            name="name"
            placeholder="Enter your full name"
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

  const renderForgotPassword = () => (
    <>
      <h1>Reset Password</h1>
      <form className="signin-form">
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
