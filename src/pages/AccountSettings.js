// src/pages/AccountSettings.js
import React, { useState, useEffect } from 'react';
import './AccountSettings.css';

const AccountSettings = () => {
  // Initialize dark mode from localStorage (defaults to false if not set)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`account-settings ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Account Settings</h1>
      <div className="settings-section">
        <h2>Appearance</h2>
        <div className="toggle-container">
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <span className="slider round"></span>
          </label>
          <span>Dark Mode</span>
        </div>
      </div>
      {/* Additional settings can be added here */}
    </div>
  );
};

export default AccountSettings;
