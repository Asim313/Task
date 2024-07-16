// useSessionUtils.js

// Import the useSessionData hook from the SessionContext component
import { useSessionData } from '../component/SessionContext'; // Adjust the import path as necessary

/**
 * Custom hook for session-related utilities.
 * @param {Function} onFavoritesChanged - Callback function to notify when favorites change.
 * @returns {Object} - An object containing utility functions for session management.
 */
const useSessionUtils = (onFavoritesChanged) => {
    // Destructure sessionData and updateSessionData from the useSessionData hook
    const { sessionData, updateSessionData } = useSessionData();

    /**
     * Update the user's name in the session data.
     * @param {string} newName - The new name to be set for the user.
     */
    const updateUserName = async (newName) => {
        try {
            // Parse the user data from the session data
            let user = JSON.parse(sessionData.userToRegister);
            // Update the user's name
            user.name = newName;
            // Update the session data with the new user information
            await updateSessionData({ userToRegister: JSON.stringify(user) });
        } catch (e) {
            console.error("Error updating user name:", e); // Log an error if updating fails
        }
    };

    /**
     * Load the favorites from the session data.
     * @returns {Object} - The favorites object from the session data.
     */
    const loadFavorites = () => {
        return sessionData.favorites || {}; // Return favorites or an empty object if undefined
    };

    /**
     * Save the favorites to the session data.
     * @param {Object} favorites - The favorites object to be saved.
     */
    const saveFavorites = async (favorites) => {
        try {
            // Update the session data with the new favorites
            await updateSessionData({ favorites });
        } catch (e) {
            console.error("Error saving favorites:", e); // Log an error if saving fails
        }
    };

    /**
     * Toggle the favorite status of an item.
     * @param {string} itemKey - The key of the item to toggle.
     */
    const toggleFavorite = async (itemKey) => {
        try {
            // Load current favorites
            const favorites = loadFavorites();
            // Toggle the favorite status of the item
            const updatedFavorites = {
                ...favorites,
                [itemKey]: !favorites[itemKey],
            };
            // Save the updated favorites
            await saveFavorites(updatedFavorites);
            // Notify about the change in favorites
            onFavoritesChanged(updatedFavorites);
        } catch (e) {
            console.error("Error toggling favorite:", e); // Log an error if toggling fails
        }
    };

    /**
     * Clear all favorites from the session data.
     */
    const clearAllFavorites = async () => {
        try {
            // Create a new empty favorites object
            const newFavorites = {};
            // Save the new empty favorites object
            await saveFavorites(newFavorites);
            // Notify about the change in favorites
            onFavoritesChanged(newFavorites);
        } catch (e) {
            console.error("Error clearing all favorites:", e); // Log an error if clearing fails
        }
    };

    // Return the utility functions for session management
    return {
        updateUserName,
        loadFavorites,
        saveFavorites,
        toggleFavorite, 
        clearAllFavorites
    };
};

// Export the useSessionUtils hook as the default export
export default useSessionUtils;
