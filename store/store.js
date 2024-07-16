// Import the configureStore utility from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import the session reducer from the sessionSlice file
import sessionReducer from './sessionSlice';

// Create a Redux store using the configureStore function from Redux Toolkit
const store = configureStore({
  // Specify the reducers for the store. Each key-value pair represents a slice of state and its reducer
  reducer: {
    // The 'session' state slice is managed by the sessionReducer
    session: sessionReducer,
  },
  // Add Redux middleware settings if needed (e.g., for async actions). 
  // Redux Toolkit includes 'redux-thunk' by default for handling asynchronous logic
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Additional middleware can be added here
      serializableCheck: {
        // Ignore these action types from serialization checks, useful for actions with non-serializable content
        ignoredActions: ['session/updateSessionData', 'session/clearSessionData'],
      },
    }),

  // Enable Redux DevTools Extension for debugging and visualizing state changes
  // It is automatically set to 'true' in development mode and 'false' in production
  devTools: process.env.NODE_ENV !== 'production',
});

// Export the configured store so it can be used in the application
export default store;
