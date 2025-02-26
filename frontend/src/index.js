import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext'; // Import the AuthProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap your app in AuthProvider to provide authentication state globally */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
