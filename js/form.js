
// Initialize form elements
const form = document.getElementById('violation-form');
const fileUpload = document.getElementById('file-upload');
const previewContainer = document.getElementById('preview-container');
const dropzone = document.getElementById('dropzone');

// Handle file upload and preview
function handleFileSelect(file) {
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
        window.toast.show('Please upload an image file', 'error');
        return;
    }
    
    if (file.size > 10 * 1024 * 1024) {
        window.toast.show('File size must be less than 10MB', 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        previewContainer.innerHTML = `
            <img src="${e.target.result}" alt="Preview" class="preview-image">
            <button type="button" class="remove-image">
                <i data-lucide="x"></i>
            </button>
        `;
        lucide.createIcons();
        
        // Add remove button functionality
        const removeButton = previewContainer.querySelector('.remove-image');
        removeButton.addEventListener('click', resetFileUpload);
    };
    reader.readAsDataURL(file);
}

function resetFileUpload() {
    fileUpload.value = '';
    previewContainer.innerHTML = `
        <i data-lucide="camera" class="upload-icon"></i>
        <p>Click to upload or drag and drop</p>
        <p class="file-hint">PNG, JPG up to 10MB</p>
    `;
    lucide.createIcons();
}

// File upload event listeners
fileUpload.addEventListener('change', (e) => {
    handleFileSelect(e.target.files[0]);
});

// Drag and drop functionality
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, unhighlight, false);
});

function highlight() {
    dropzone.classList.add('dragover');
}

function unhighlight() {
    dropzone.classList.remove('dragover');
}

dropzone.addEventListener('drop', (e) => {
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
});

// Form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    try {
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        window.toast.show('Report submitted successfully!', 'success');
        
        // Reset form
        form.reset();
        resetFileUpload();
        
    } catch (error) {
        window.toast.show('Failed to submit report. Please try again.', 'error');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }
});
