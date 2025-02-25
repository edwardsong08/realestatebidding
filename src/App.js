import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Bids from './pages/Bids';
import AccountSettings from './pages/AccountSettings'; // Ensure file is named AccountSettings.js
import ContactUsAuth from './pages/ContactUsAuth';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs'; // if you still have a public Contact Us page

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bids" element={<Bids />} />
        <Route path="/settings/account" element={<AccountSettings />} />
        <Route path="/dashboard/contactus" element={<ContactUsAuth />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
