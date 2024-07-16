import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Initial state of the session slice
const initialState = {
  currentLanguage: 'de', // Default language setting
  isLoading: false, // State to track loading operations
};

// Async thunk for loading session data from AsyncStorage
export const loadSessionData = createAsyncThunk('session/loadData', async () => {
  const storedData = await AsyncStorage.getItem('sessionData');
  return storedData ? JSON.parse(storedData) : initialState; // Parse stored data or return initial state if none found
});

// Creating the slice with reducers and handling asynchronous actions with extraReducers
const sessionSlice = createSlice({
  name: 'session', // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Reducer to update session data
    updateSessionData(state, action) {
      const newState = { ...state, ...action.payload }; // Merge new data into the existing state
      AsyncStorage.setItem('sessionData', JSON.stringify(newState)); // Persist the new state to AsyncStorage
      return newState; // Return the updated state
    },
    // Reducer to clear session data
    clearSessionData(state) {
      AsyncStorage.clear(); // Clear all AsyncStorage data
      return {}; // Reset the state to an empty object
    },
      // Reducer to update user attributes
      // for example:  dispatch(updateUserAttribute({ attribute: 'name', value: name }));
      updateUserAttribute(state, action) {
        const { attribute, value } = action.payload;
        state.user[attribute] = value; // Update the user attribute
        // Optionally, persist these changes to AsyncStorage
        AsyncStorage.setItem('sessionData', JSON.stringify(state));
      },
  },
  extraReducers: (builder) => {
    builder
      // Handle the fulfilled state of the loadSessionData thunk
      .addCase(loadSessionData.fulfilled, (state, action) => {
        return { ...state, ...action.payload, isLoading: false }; // Merge loaded data into state and set isLoading to false
      })
      // Handle the pending state of the loadSessionData thunk
      .addCase(loadSessionData.pending, (state) => {
        state.isLoading = true; // Set isLoading to true while data is being loaded
      })
      // Handle the rejected state of the loadSessionData thunk
      .addCase(loadSessionData.rejected, (state) => {
        state.isLoading = false; // Set isLoading to false if the data load fails
      });
  }
});

// Export actions so they can be dispatched in the application
export const { updateSessionData, clearSessionData, updateUserAttribute } = sessionSlice.actions;

// Export the reducer to be included in the store
export default sessionSlice.reducer;
