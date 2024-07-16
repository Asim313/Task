// Import the Settings class from the specified module
import { Settings } from '../model/Settings';

// Define the User class which represents a user and their associated information
export class User {
     
    // Static property to keep track of the current user ID
    static currentId = 0;
    
    // Default properties for user registration and database write status
    register = true; 
    writeToDb = false; 

    /**
     * Constructor to initialize a new User object.
     * @param {string} name - The name of the user.
     * @param {string} email - The email of the user.
     * @param {string} token - The token associated with the user.
     * @param {string} phone - The phone number of the user.
     * @param {string} appleid - The Apple ID of the user.
     * @param {Settings} setting - The settings associated with the user.
     */
    constructor(name, email, token, phone, appleid, setting) {
        this.id = ++User.currentId; // Increment and assign a unique ID to the user
        this.name = name; // Set the user's name
        this.email = email; // Set the user's email
        this.token = token; // Set the user's token
        this.phone = phone; // Set the user's phone number
        this.appleid = appleid; // Set the user's Apple ID
        this.setting = setting; // Set the user's settings
        this.verification = ""; // Initialize verification status as an empty string
        this.images = ""; // Initialize images as an empty string
        this.imagesId = []; // Initialize imagesId as an empty array
        this.mockupDistance = 0; // Initialize mockup distance to 0
        this.chatId; // Initialize chatId (undefined initially)
        this.creationTimestamp; // Initialize creation timestamp (undefined initially)
    }

    /**
     * Set the user's settings.
     * @param {Settings} setting - The settings to be assigned to the user.
     */
    setSetting(setting) {
        this.settings = setting;
    }

    /**
     * Set the user's ID from the database.
     * @param {number} id - The ID to be assigned to the user.
     */
    setIdFromDb(id) {
        this.id = id;
    }

    /**
     * Set the user's registration status.
     * @param {boolean} input - The registration status to be set.
     */
    setRegister(input) {
        this.register = input;
    }

    /**
     * Set the database write status for the user.
     * @param {boolean} input - The database write status to be set.
     */
    setDatabaseWrite(input) {
        this.writeToDb = input;
    }

    /**
     * Set the user's images.
     * @param {string} images - The images to be assigned to the user.
     */
    setImages(images) {
        this.images = images;
    }
}
