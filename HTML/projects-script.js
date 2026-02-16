// Projects Page JavaScript - CLEAN VERSION
document.addEventListener('DOMContentLoaded', function() {
  // Initialize project filtering
  initProjectFiltering();
  
  // Initialize project card animations
  initProjectAnimations();
});

// Project filtering functionality
function initProjectFiltering() {
  const categoryBtns = document.querySelectorAll('.category-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      categoryBtns.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const category = this.getAttribute('data-category');
      
      // Filter projects
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
          // Show the card
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          // Hide the card
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Project card animations
function initProjectAnimations() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach((card, index) => {
    // Add staggered animation on load
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
    
    // Hover effect for project overlay
    card.addEventListener('mouseenter', function() {
      const overlay = this.querySelector('.project-overlay');
      const overlayContent = this.querySelector('.overlay-content');
      if (overlay && overlayContent) {
        overlay.style.opacity = '1';
        overlayContent.style.transform = 'translateY(0)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      const overlay = this.querySelector('.project-overlay');
      const overlayContent = this.querySelector('.overlay-content');
      if (overlay && overlayContent) {
        overlay.style.opacity = '0';
        overlayContent.style.transform = 'translateY(20px)';
      }
    });
  });
}