
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
        
        // Instead of showing error, redirect to the React admin dashboard
        window.location.href = "/admin/dashboard";
        
    } catch (error) {
        window.toast.show('Login failed. Please try again.', 'error');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }
});
