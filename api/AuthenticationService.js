// Import the 'post' function from the 'ApiHandler' module
import { post } from './ApiHandler';

/**
 * Registers a new user with the provided user data.
 * @param {Object} userData - The data of the user to be registered.
 * @returns {Object} response - The response from the registration endpoint.
 * @throws {Error} error - Throws an error if registration fails.
 */
const registerUser = async (userData) => {
  try {
    const endpoint = '/auth/register'; // Define the registration endpoint
    const response = await post(endpoint, userData); // Send a POST request to the registration endpoint with user data
    console.log('User registered:', response); // Log the response on successful registration
    return response; // Return the response object
  } catch (error) {
    console.error('Registration failed:', error); // Log an error message if registration fails
    throw error; // Re-throw the error to be handled by the caller
  }
};

/**
 * Logs in a user with the provided credentials.
 * @param {Object} credentials - The login credentials of the user.
 * @returns {Object} response - The response from the login endpoint.
 * @throws {Error} error - Throws an error if login fails.
 */
const loginUser = async (credentials) => {
  try {
    const endpoint = '/auth/login'; // Define the login endpoint
    const response = await post(endpoint, credentials); // Send a POST request to the login endpoint with user credentials
    return response; // Return the response object
  } catch (error) {
    console.error('Login failed:', error); // Log an error message if login fails
    throw error; // Re-throw the error to be handled by the caller
  }
};

// Export the registerUser and loginUser functions for use in other modules
export { registerUser, loginUser };
