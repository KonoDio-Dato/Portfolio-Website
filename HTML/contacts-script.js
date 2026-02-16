// Contacts Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Initialize form validation
  initFormValidation();
  
  // Initialize FAQ accordion
  initFAQAccordion();
  
  // Initialize file upload
  initFileUpload();
});

// Form validation
function initFormValidation() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form elements
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const subject = document.getElementById('subject');
      const service = document.getElementById('service');
      const message = document.getElementById('message');
      
      // Validate inputs
      let isValid = true;
      
      // Clear previous errors
      clearErrors();
      
      // Validate name
      if (!name.value.trim()) {
        showError(name, 'Please enter your name');
        isValid = false;
      }
      
      // Validate email
      if (!email.value.trim()) {
        showError(email, 'Please enter your email');
        isValid = false;
      } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
      }
      
      // Validate subject
      if (!subject.value.trim()) {
        showError(subject, 'Please enter a subject');
        isValid = false;
      }
      
      // Validate service
      if (!service.value) {
        showError(service, 'Please select a service');
        isValid = false;
      }
      
      // Validate message
      if (!message.value.trim()) {
        showError(message, 'Please enter your message');
        isValid = false;
      } else if (message.value.trim().length < 10) {
        showError(message, 'Message must be at least 10 characters long');
        isValid = false;
      }
      
      if (isValid) {
        submitForm();
      }
    });
  }
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show error message
function showError(input, message) {
  const formGroup = input.closest('.form-group');
  
  // Remove existing error
  const existingError = formGroup.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }
  
  // Add error class to input
  input.classList.add('error');
  
  // Create error message
  const errorMessage = document.createElement('div');
  errorMessage.className = 'error-message';
  errorMessage.style.cssText = `
    color: #ff4757;
    font-size: 0.85rem;
    margin-top: 0.5rem;
  `;
  errorMessage.textContent = message;
  
  formGroup.appendChild(errorMessage);
}

// Clear all errors
function clearErrors() {
  // Remove error classes
  document.querySelectorAll('.error').forEach(input => {
    input.classList.remove('error');
  });
  
  // Remove error messages
  document.querySelectorAll('.error-message').forEach(error => {
    error.remove();
  });
}

// Form submission
function submitForm() {
  const submitBtn = document.querySelector('.submit-btn');
  const originalText = submitBtn.innerHTML;
  
  // Show loading state
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;
  
  // Simulate API call
  setTimeout(() => {
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.style.cssText = `
      background: rgba(46, 204, 113, 0.1);
      color: #2ecc71;
      padding: 1rem;
      border-radius: 10px;
      margin-top: 1rem;
      text-align: center;
      border: 1px solid rgba(46, 204, 113, 0.3);
    `;
    successMessage.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <h3>Message Sent Successfully!</h3>
      <p>Thank you for your message. I will get back to you within 24 hours.</p>
    `;
    
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(successMessage, form.nextSibling);
    
    // Reset form
    form.reset();
    
    // Reset button
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Remove success message after 5 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  }, 2000);
}

// FAQ Accordion
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', function() {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const answer = otherItem.querySelector('.faq-answer');
          answer.style.maxHeight = '0';
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
      const answer = item.querySelector('.faq-answer');
      
      if (item.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = '0';
      }
    });
  });
}

// File upload
function initFileUpload() {
  const fileInput = document.getElementById('attachment');
  const fileLabel = document.querySelector('.file-label');
  
  if (fileInput && fileLabel) {
    fileInput.addEventListener('change', function() {
      if (this.files.length > 0) {
        const fileName = this.files[0].name;
        const fileSize = this.files[0].size;
        const maxSize = 5 * 1024 * 1024; // 5MB
        
        if (fileSize > maxSize) {
          alert('File size must be less than 5MB');
          this.value = '';
          fileLabel.innerHTML = '<i class="fas fa-paperclip"></i> Attach Files (Optional)';
        } else {
          fileLabel.innerHTML = `<i class="fas fa-check"></i> ${fileName} (${formatFileSize(fileSize)})`;
          fileLabel.style.color = '#40e0d0';
          fileLabel.style.borderColor = '#40e0d0';
        }
      }
    });
  }
}

// Format file size
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Quick contact buttons
document.addEventListener('DOMContentLoaded', function() {
  const quickBtns = document.querySelectorAll('.quick-btn');
  
  quickBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      if (this.href.includes('mailto:')) {
        // Email button
        e.preventDefault();
        const subject = encodeURIComponent('Project Inquiry');
        const body = encodeURIComponent("Hi Nico,\n\nI'm interested in discussing a project with you.\n\nBest regards,\n[Your Name]");
        window.location.href = `mailto:nico.galvez@example.com?subject=${subject}&body=${body}`;
      } else if (this.href.includes('tel:')) {
        // Phone button - show modal instead
        e.preventDefault();
        alert('Schedule a Call Feature:\n\nThis would open a calendar scheduling tool in a real implementation.');
      }
    });
  });
});