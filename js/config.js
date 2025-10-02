// Application Configuration
// Centralized configuration for the Robot Framework Training Platform

const config = {
    // API Configuration
    API_BASE_URL: window.location.hostname === 'localhost'
        ? 'http://localhost:8000'
        : '/api',  // Production will use relative path (proxied)

    // Authentication
    PASSWORD_HASH: "9bf32db52342925062cdd41e07254192e70f36bbfb368dfa585e24b4c9e19d1f", // SHA-256 hash of "admin"

    // Exercise Configuration
    EXERCISE_TIMEOUT: 30000, // 30 seconds
    CODE_SIZE_LIMIT: 5000,   // 5KB max

    // Question Files - Auto-loaded from questions/ directory structure
    QUESTION_CHAPTERS: {
        1: { name: "Introduction to Robot Framework", subchapters: 5 },
        2: { name: "Robot Framework Test Data", subchapters: 6 },
        3: { name: "Keywords and Variables", subchapters: 5 },
        4: { name: "Test/Task Execution & Flow Control", subchapters: 5 },
        5: { name: "Advanced Topics", subchapters: 2 }
    },

    // UI Configuration
    RESULTS_ANIMATION_DURATION: 300, // ms

    // Development/Debug
    DEBUG_MODE: window.location.hostname === 'localhost',

    // Helper methods
    getApiUrl(endpoint) {
        return `${this.API_BASE_URL}${endpoint}`;
    },

    log(...args) {
        if (this.DEBUG_MODE) {
            console.log('[Config]', ...args);
        }
    }
};

// Log configuration on load (only in debug mode)
if (config.DEBUG_MODE) {
    console.log('Configuration loaded:', {
        apiUrl: config.API_BASE_URL,
        environment: window.location.hostname === 'localhost' ? 'development' : 'production'
    });
}
