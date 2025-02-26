// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  // Initialize the authentication state.
  // For persistence, you could check localStorage if needed.
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);

  // When isAuthenticated changes, update localStorage so the state persists across reloads
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    if (authToken) {
      localStorage.setItem('authToken', authToken);
    } else {
      localStorage.removeItem('authToken');
    }
  }, [authToken]);

  // Function to log in the user
  const login = (token) => {
    setIsAuthenticated(true);
    setAuthToken(token);
  };

  // Function to log out the user
  const logout = () => {
    setIsAuthenticated(false);
    setAuthToken(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authToken,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
