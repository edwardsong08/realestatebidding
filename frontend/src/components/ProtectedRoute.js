import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  // If not authenticated, redirect to landing page ("/")
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  // Otherwise, render the protected content
  return children;
};

export default ProtectedRoute;
