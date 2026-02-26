import React, { useState, useContext, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SignIn.css';
import { signUp, logIn } from '../api/auth';
import { AuthContext } from '../context/AuthContext';

const AuthForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formType, setFormType] = useState('signin');
  const [signInError, setSignInError] = useState(null);
  const [signUpErrors, setSignUpErrors] = useState({});

  const getFormFromQuery = useCallback(() => {
    const queryParams = new URLSearchParams(location.search);
    const raw = (queryParams.get('form') || '').toLowerCase();
    if (raw === 'signup') return 'signup';
    if (raw === 'forgot') return 'forgot';
    return 'signin';
  }, [location.search]);

  // ✅ Single source of truth: change form by updating the URL.
  const setForm = useCallback(
    (nextForm) => {
      const safe =
        nextForm === 'signup' || nextForm === 'forgot' || nextForm === 'signin'
          ? nextForm
          : 'signin';

      // Update URL even if you're already on /signin.
      navigate(`/signin?form=${safe}`, { replace: false });
    },
    [navigate]
  );

  // ✅ HARD GUARANTEE scroll-to-top (hero fully visible, not skipped).
  // Also disable browser scroll restoration which can fight you.
  useEffect(() => {
    const prev = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    const forceTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    // Do it multiple times to beat any late layout/focus/restore behavior.
    forceTop();
    requestAnimationFrame(forceTop);
    setTimeout(forceTop, 0);
    setTimeout(forceTop, 50);

    return () => {
      window.history.scrollRestoration = prev || 'auto';
    };
  }, [location.pathname, location.search]);

  // ✅ Sync component state to query param every time it changes.
  useEffect(() => {
    setFormType(getFormFromQuery());
  }, [getFormFromQuery]);

  // Clear errors when switching form types
  useEffect(() => {
    setSignInError(null);
    setSignUpErrors({});
  }, [formType]);

  // Fade-in on mount
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-element');
    fadeElements.forEach((el) => el.classList.add('fade-in'));
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const username = e.target.elements['username'].value;
    const password = e.target.elements['password'].value;

    try {
      const response = await logIn({ username, password });
      login(response.token || true);
      navigate('/dashboard');
    } catch (error) {
      setSignInError(
        error.response?.data?.error ||
          error.response?.data?.detail ||
          'Invalid username or password. Please try again.'
      );
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const username = e.target.elements['username'].value;
    const email = e.target.elements['email'].value;
    const password = e.target.elements['password'].value;

    try {
      const response = await signUp({ username, email, password });
      setSignUpErrors({});
      login(response.token || true);
      navigate('/dashboard');
    } catch (error) {
      if (error.response?.data && typeof error.response.data === 'object') {
        setSignUpErrors({
          username: error.response.data.username ? error.response.data.username.join(' ') : '',
          email: error.response.data.email ? error.response.data.email.join(' ') : '',
          password: error.response.data.password ? error.response.data.password.join(' ') : '',
          general: error.response.data.non_field_errors
            ? error.response.data.non_field_errors.join(' ')
            : '',
        });
      } else {
        setSignUpErrors({
          general: 'Invalid sign up details. Please check your username, email, and password.',
        });
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
        <button type="submit" className="btn">
          Sign In
        </button>
      </form>

      <div className="or-divider">
        <span>OR</span>
      </div>

      <div className="action-buttons">
        <button className="secondary-btn" onClick={() => setForm('signup')}>
          Create an Account
        </button>
        <button className="secondary-btn" onClick={() => setForm('forgot')}>
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
          <input
            type="text"
            id="signup-username"
            name="username"
            placeholder="Choose a username"
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
            placeholder="Your email address"
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
        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>

      <div className="form-switch">
        <button className="back-button" onClick={() => setForm('signin')}>
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
          <input
            type="email"
            id="forgot-email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className="btn">
          Send Reset Link
        </button>
      </form>

      <div className="form-switch">
        <button className="back-button" onClick={() => setForm('signin')}>
          Back to Sign In
        </button>
      </div>
    </>
  );

  return (
    <div className="signin-page">
      <header className="signin-hero">
        <div className="hero-overlay">
          <div className="hero-text fade-element">
            <h1 className="hero-title">Welcome to OpenBid</h1>
            <p className="hero-subtitle">Streamlining transactions. Maximizing results.</p>
          </div>
        </div>
      </header>

      <section className="signin-content">
        <div className="signin-card-container fade-element">
          <div className="signin-info">
            <div className="info-overlay">
              <div className="info-text">
                <h2 className="info-title">Experience the Future of Real Estate</h2>
                <p className="info-description">
                  At OpenBid, innovative technology meets trusted industry expertise to create a transparent,
                  competitive marketplace. Enjoy faster sales, fair market value, and hassle-free negotiations—
                  transforming the way you transact.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="signin-card-container fade-element">
          <div className="auth-card">
            {formType === 'signin' && renderSignIn()}
            {formType === 'signup' && renderSignUp()}
            {formType === 'forgot' && renderForgotPassword()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthForm;