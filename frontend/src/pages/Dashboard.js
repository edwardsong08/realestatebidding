// src/pages/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const darkMode = localStorage.getItem('darkMode') === 'true';

  return (
    <div className={`dashboard ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Dashboard</h1>
      <p>This is the dashboard page. Welcome to your personalized dashboard!</p>
    </div>
  );
};

export default Dashboard;
