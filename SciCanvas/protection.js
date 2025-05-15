// SciCanvas application - Password Protection
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already authorized
    if (!sessionStorage.getItem('scicanvas_authorized')) {
        // Create overlay and prompt
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overlay.style.zIndex = '9999';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        
        const promptBox = document.createElement('div');
        promptBox.style.backgroundColor = 'white';
        promptBox.style.padding = '30px';
        promptBox.style.borderRadius = '8px';
        promptBox.style.maxWidth = '400px';
        promptBox.style.textAlign = 'center';
        
        promptBox.innerHTML = `
            <h2 style="color: #1B2A41; margin-top: 0;">SciCanvas Access</h2>
            <p>Please enter the password to access SciCanvas:</p>
            <input type="password" id="password-input" style="padding: 8px; width: 100%; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 4px;">
            <button id="submit-btn" style="background-color: #4ECDC4; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer;">Submit</button>
            <p id="error-message" style="color: #FF6B6B; margin-top: 10px; display: none;">Incorrect password. Please try again.</p>
        `;
        
        overlay.appendChild(promptBox);
        document.body.appendChild(overlay);
        
        // Add event listeners
        const passwordInput = document.getElementById('password-input');
        const submitBtn = document.getElementById('submit-btn');
        const errorMessage = document.getElementById('error-message');
        
        // Focus on password input
        passwordInput.focus();
        
        // The password
        const correctPassword = 'scicanvas2025';
        
        function checkPassword() {
            if (passwordInput.value === correctPassword) {
                // Set authorized in session storage and remove overlay
                sessionStorage.setItem('scicanvas_authorized', 'true');
                document.body.removeChild(overlay);
            } else {
                // Show error message
                errorMessage.style.display = 'block';
                passwordInput.value = '';
                passwordInput.focus();
            }
        }
        
        // Add event listeners
        submitBtn.addEventListener('click', checkPassword);
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }
});

console.log('SciCanvas protection loaded'); 