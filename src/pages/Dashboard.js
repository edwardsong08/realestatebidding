import React from 'react';
import './Dashboard.css'; // (Optional: Create this CSS file for styling your dashboard)

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome! This is your personal dashboard. More features will be added soon.</p>
      </header>
      <div className="dashboard-content">
        <section className="dashboard-section">
          <h2>Buy</h2>
          <p>Placeholder for the Buy component or feature.</p>
        </section>
        <section className="dashboard-section">
          <h2>Sell</h2>
          <p>Placeholder for the Sell component or feature.</p>
        </section>
        <section className="dashboard-section">
          <h2>Settings</h2>
          <p>Placeholder for your account settings.</p>
        </section>
        <section className="dashboard-section">
          <h2>My Account</h2>
          <p>Placeholder for account information and profile details.</p>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
