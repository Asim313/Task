// Define the Settings class which holds user settings and preferences
export class Settings {

    /**
     * Constructor to initialize a new Settings object.
     * @param {number} id - The ID of the settings.
     * @param {Object} sessionData - The session data object.
     * @param {Function} updateSessionData - The function to update session data.
     */
    constructor(id, sessionData, updateSessionData){
     
        this.id = id; // Set the ID for the settings
        this.birthday = new Date(); // Initialize birthday with the current date
        this.age = 0; // Initialize age to 0
        this.ageRange = 0; // Initialize age range to 0
        this.gender = ""; // Initialize gender as an empty string
        this.notification = false; // Initialize notification to false
        this.selectedLanguages = []; // Initialize selected languages as an empty array
        this.selectedCities = []; // Initialize selected cities as an empty array
        this.sessionData = sessionData; // Set session data
        this.updateSessionData = updateSessionData; // Set the function to update session data
        this.preferences = []; // Initialize preferences as an empty array
        this.orient = []; // Initialize orientation as an empty array
        this.profile = ""; // Initialize profile as an empty string
        this.notificationEnabled = true; // Set notificationEnabled to true
        this.gender = ""; // Initialize gender as an empty string (duplicate, already initialized above)
        this.genderToString = ""; // Initialize genderToString as an empty string
        this.orientToString = ""; // Initialize orientToString as an empty string
        this.genderPreference = ""; // Initialize gender preference as an empty string
        this.username = ""; // Initialize username as an empty string
        this.name = ""; // Initialize name as an empty string
        this.nonewsletter = false; // Initialize newsletter preference to false
        this.smoking = ""; // Initialize smoking preference as an empty string
        this.alcohol = ""; // Initialize alcohol preference as an empty string
        this.religion = ""; // Initialize religion as an empty string
        this.origin = ""; // Initialize origin as an empty string
        this.profession = ""; // Initialize profession as an empty string
        this.familyPlans = ""; // Initialize family plans as an empty string
        this.education = ""; // Initialize education as an empty string
        this.sport = ""; // Initialize sport preference as an empty string
        this.location = null; // Initialize location as null
        this.locationRange = 0; // Initialize location range to 0
        this.search = ""; // Initialize search as an empty string
        this.origin = ""; // Initialize origin as an empty string (duplicate, already initialized above)
    }

    /**
     * A simple method that returns "Hello World".
     * @returns {string} - A greeting message.
     */
    helloWorld() {
        return "Hello World";
    }
}
