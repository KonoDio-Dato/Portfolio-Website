// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize animations
  initAnimations();
  
  // Initialize navigation
  initNavigation();
  
  // Initialize scroll effects
  initScrollEffects();
  
  // Initialize interactive elements
  initInteractiveElements();
  
  // Initialize FAQ functionality
  initFAQ();
});

// Initialize animations
function initAnimations() {
  // Animate skill bars on scroll (for home page)
  const skillBars = document.querySelectorAll('.level-bar');
  skillBars.forEach(bar => {
    bar.style.width = '0%';
  });
  
  // Animate progress bars on scroll (for academic page)
  const progressBars = document.querySelectorAll('.progress-fill');
  progressBars.forEach(bar => {
    bar.style.width = '0%';
  });
  
  // Add animation delay to navigation cards
  const navCards = document.querySelectorAll('.nav-card');
  navCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
}

// Initialize navigation
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Set active nav link based on current page
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Mobile menu toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      const navLinksContainer = document.querySelector('.nav-links');
      navLinksContainer.classList.toggle('show');
      
      // Animate menu lines
      const menuLines = this.querySelectorAll('.menu-line');
      menuLines.forEach((line, index) => {
        line.style.transform = navLinksContainer.classList.contains('show') 
          ? index === 0 ? 'rotate(45deg) translate(5px, 5px)' 
            : index === 1 ? 'scale(0)' 
            : 'rotate(-45deg) translate(7px, -6px)' 
          : 'none';
      });
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    const navLinksContainer = document.querySelector('.nav-links');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (navLinksContainer && navLinksContainer.classList.contains('show') && 
        !navLinksContainer.contains(e.target) && 
        !mobileMenuBtn.contains(e.target)) {
      navLinksContainer.classList.remove('show');
      
      // Reset menu lines
      const menuLines = document.querySelectorAll('.menu-line');
      menuLines.forEach(line => {
        line.style.transform = 'none';
      });
    }
  });
}

// Initialize scroll effects
function initScrollEffects() {
  const backToTopBtn = document.querySelector('.back-to-top');
  
  // Show/hide back to top button
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
    
    // Parallax effect for floating shapes
    const shapes = document.querySelectorAll('.shape, .bg-circle');
    shapes.forEach(shape => {
      const speed = 0.5;
      const yPos = -(window.scrollY * speed * 0.1);
      shape.style.transform = `translateY(${yPos}px)`;
    });
    
    // Animate skill bars on scroll
    animateSkillBars();
    
    // Animate elements on scroll
    animateOnScroll();
  });
  
  // Back to top functionality
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Animate skill bars on scroll
function animateSkillBars() {
  // For home page skill bars
  const skillCategories = document.querySelectorAll('.skill-category');
  const windowHeight = window.innerHeight;
  
  skillCategories.forEach(category => {
    const categoryTop = category.getBoundingClientRect().top;
    if (categoryTop < windowHeight - 100) {
      const skillBar = category.querySelector('.level-bar');
      if (skillBar) {
        const targetWidth = skillBar.parentElement.querySelector('.level-text').textContent;
        skillBar.style.width = targetWidth;
        category.classList.add('animate');
      }
    }
  });
  
  // For academic page skill bars
  const skillProgressItems = document.querySelectorAll('.skill-progress-item');
  skillProgressItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < windowHeight - 100) {
      const progressFill = item.querySelector('.progress-fill');
      if (progressFill) {
        const targetWidth = item.querySelector('.skill-info span:last-child').textContent;
        progressFill.style.width = targetWidth;
        progressFill.classList.add('animate');
      }
    }
  });
}

// Animate elements on scroll
function animateOnScroll() {
  const animateElements = document.querySelectorAll('.skill-category, .nav-card, .timeline-card, .certification-card');
  const windowHeight = window.innerHeight;
  
  animateElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      element.classList.add('animate');
    }
  });
}

// Initialize interactive elements
function initInteractiveElements() {
  // Add hover effects to navigation cards
  const navCards = document.querySelectorAll('.nav-card');
  navCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.card-icon');
      if (icon) {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.card-icon');
      if (icon) {
        icon.style.transform = 'scale(1) rotate(0deg)';
      }
    });
  });
  
  // Add click effect to social links
  const socialLinks = document.querySelectorAll('.social-link, .social-icon');
  socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Create click effect
      this.style.transform = 'scale(0.9)';
      setTimeout(() => {
        this.style.transform = '';
      }, 200);
    });
  });
  
  // Add hover effect to timeline cards
  const timelineCards = document.querySelectorAll('.timeline-card');
  timelineCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
    });
  });
  
  // Add hover effect to certification cards
  const certCards = document.querySelectorAll('.certification-card');
  certCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Project category filtering
  const categoryBtns = document.querySelectorAll('.category-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      categoryBtns.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter') || 'all';
      
      // Show/hide project cards based on filter
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 100);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
  
  // Contact form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const submitBtn = this.querySelector('.submit-btn');
      const originalText = submitBtn.innerHTML;
      
      // Simulate form submission
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }
}

// Initialize FAQ functionality
function initFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.parentElement;
      const isActive = faqItem.classList.contains('active');
      
      // Close all FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Open clicked FAQ item if it wasn't active
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      const navLinks = document.querySelector('.nav-links');
      if (navLinks && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        const menuLines = document.querySelectorAll('.menu-line');
        menuLines.forEach(line => {
          line.style.transform = 'none';
        });
      }
    }
  });
});

// Add CSS for animations
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .nav-links.show {
      display: flex !important;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: rgba(10, 10, 20, 0.98);
      backdrop-filter: blur(20px);
      flex-direction: column;
      padding: 1.5rem;
      gap: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      z-index: 1001;
    }
    
    .skill-category, .nav-card, .timeline-card, .certification-card, .project-card {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .skill-category.animate, .nav-card.animate, .timeline-card.animate, 
    .certification-card.animate, .project-card.animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Smooth transitions for all interactive elements */
    * {
      transition: all 0.3s ease;
    }
    
    /* Profile image animation */
    .profile-pic {
      transition: transform 0.5s ease;
    }
    
    .profile-image:hover .profile-pic {
      transform: scale(1.05);
    }
    
    /* Skill bar animation */
    .level-bar, .progress-fill {
      transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* FAQ answer animation */
    .faq-answer {
      transition: max-height 0.3s ease, padding 0.3s ease;
    }
  </style>
`);

// Initialize on first load
window.addEventListener('load', function() {
  // Trigger initial animations
  animateOnScroll();
  animateSkillBars();
  
  // Add loading animation
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});