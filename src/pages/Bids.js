// src/pages/Bids.js
import React from 'react';
import './Bids.css';

const Bids = () => {
  const darkMode = localStorage.getItem('darkMode') === 'true';

  return (
    <div className={`bids ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Bids</h1>
      <p>This is the Bids page. View your active bids and bid history here.</p>
    </div>
  );
};

export default Bids;
