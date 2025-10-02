// Authentication module for password protection
const auth = {
    // SHA-256 hash of the password (default: "robot2024")
    // To generate new hash: https://emn178.github.io/online-tools/sha256.html
    // Or use: console.log(auth.hashPassword("yourpassword"))
    passwordHash: "9bf32db52342925062cdd41e07254192e70f36bbfb368dfa585e24b4c9e19d1f", 

    // Hash function using SHA-256
    async hashPassword(password) {
        const msgBuffer = new TextEncoder().encode(password);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    },

    // Check password
    async checkPassword() {
        const input = document.getElementById('passwordInput');
        const errorDiv = document.getElementById('passwordError');
        const password = input.value.trim();

        if (!password) {
            errorDiv.textContent = 'Please enter a password';
            errorDiv.style.display = 'block';
            return;
        }

        const hash = await this.hashPassword(password);

        if (hash === this.passwordHash) {
            // Password correct - store authentication and show app
            sessionStorage.setItem('authenticated', 'true');
            this.showApp();
        } else {
            // Password incorrect
            errorDiv.textContent = 'Incorrect password. Please try again.';
            errorDiv.style.display = 'block';
            input.value = '';
            input.focus();
        }
    },

    // Show the main application
    showApp() {
        const passwordScreen = document.getElementById('passwordScreen');
        const mainNav = document.getElementById('mainNavigation');

        if (passwordScreen) {
            passwordScreen.classList.remove('active');
        }
        if (mainNav) {
            mainNav.classList.add('active');
        }
    },

    // Check if already authenticated
    checkAuth() {
        if (sessionStorage.getItem('authenticated') === 'true') {
            this.showApp();
        }
    },

    // Allow Enter key to submit
    init() {
        const input = document.getElementById('passwordInput');
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.checkPassword();
                }
            });
            input.focus();
        }

        // Check if already authenticated
        this.checkAuth();
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    auth.init();
});
