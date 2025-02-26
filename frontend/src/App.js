import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Bids from './pages/Bids';
import AccountSettings from './pages/AccountSettings';
import ContactUsAuth from './pages/ContactUsAuth';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/dashboard" replace /> : <LandingPage />
          }
        />
        <Route
          path="/signin"
          element={
            isAuthenticated ? <Navigate to="/dashboard" replace /> : <SignIn />
          }
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/bids"
          element={isAuthenticated ? <Bids /> : <Navigate to="/" replace />}
        />
        <Route
          path="/settings/account"
          element={
            isAuthenticated ? <AccountSettings /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/dashboard/contactus"
          element={
            isAuthenticated ? <ContactUsAuth /> : <Navigate to="/" replace />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
