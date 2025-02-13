
// Initialize form
const form = document.getElementById('login-form');

// Handle form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    try {
        submitButton.disabled = true;
        submitButton.textContent = 'Logging in...';
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show error message (for demo purposes)
        window.toast.show('Invalid credentials. Please try again.', 'error');
        
    } catch (error) {
        window.toast.show('Login failed. Please try again.', 'error');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }
});
