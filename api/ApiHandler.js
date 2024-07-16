import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pixlfirst.de', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json'
  }
});

/**
 * Handle GET requests
 */
const get = async (endpoint, params = {}) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

/**
 * Handle POST requests
 */
const post = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

/**
 * Handle DELETE requests
 */
const del = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

/**
 * Handle errors from API requests.
 */
const handleError = (error) => {
  if (error.response) {
    console.error('API Error:', error.response.data);
    console.error('Status:', error.response.status);
    console.error('Headers:', error.response.headers);
  } else if (error.request) {
    console.error('API No Response:', error.request);
  } else {
    console.error('API Error Message:', error.message);
  }
};

export { get, post, del };
