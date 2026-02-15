// src/api/auth.js

import axios from 'axios';

// Use env var in production (Vercel), fallback to local Django for dev.
// NOTE: In Create React App, env vars must start with REACT_APP_
// Example (local): REACT_APP_API_BASE_URL=http://localhost:8000
// Example (prod):  REACT_APP_API_BASE_URL=https://your-backend.onrender.com
const API_BASE_URL =
  (process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000') +
  '/api/accounts/';

/**
 * signUp: Sends a POST request to the sign-up endpoint to create a new user.
 *
 * @param {Object} userData - An object containing the new user's details.
 *   Expected properties (based on our serializer):
 *     - username (string)
 *     - email (string, optional)
 *     - password (string)
 *
 * @returns {Object} The response data from the server, which might include user details.
 *
 * @throws Will throw an error if the request fails.
 */
export const signUp = async (userData) => {
  try {
    // Construct the endpoint URL by appending 'signup/' to the base URL.
    const response = await axios.post(`${API_BASE_URL}signup/`, userData);
    // If successful, the API returns data (for example, the created user details).
    return response.data;
  } catch (error) {
    // Log the error for debugging. error.response contains the server response, if any.
    console.error('Error during sign-up:', error.response || error.message);
    // Rethrow the error so that the calling component can handle it.
    throw error;
  }
};

/**
 * logIn: Sends a POST request to the login endpoint to authenticate a user.
 *
 * @param {Object} credentials - An object containing the user's login credentials.
 *   Expected properties:
 *     - username (string)
 *     - password (string)
 *
 * @returns {Object} The response data from the server, which may include an authentication token.
 *
 * @throws Will throw an error if the request fails.
 */
export const logIn = async (credentials) => {
  try {
    // Construct the endpoint URL by appending 'login/' to the base URL.
    // (Ensure you have a corresponding login view in your Django accounts app.)
    const response = await axios.post(`${API_BASE_URL}login/`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error during log in:', error.response || error.message);
    throw error;
  }
};
