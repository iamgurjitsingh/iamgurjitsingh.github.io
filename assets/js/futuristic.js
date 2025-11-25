/*==============================================================
# FUTURISTIC ENHANCEMENTS - JavaScript
==============================================================*/

(function() {
  "use strict";

  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Particles.js Configuration
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#FDCD57'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#FDCD57',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }

  // Theme Toggle Functionality
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const body = document.body;

  // Check for saved theme preference
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'light') {
    body.classList.add('light-theme');
    themeIcon.classList.remove('bx-moon');
    themeIcon.classList.add('bx-sun');
  }

  themeToggle.addEventListener('click', function() {
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
      themeIcon.classList.remove('bx-moon');
      themeIcon.classList.add('bx-sun');
      localStorage.setItem('theme', 'light');
    } else {
      themeIcon.classList.remove('bx-sun');
      themeIcon.classList.add('bx-moon');
      localStorage.setItem('theme', 'dark');
    }
  });

  // Cursor Trail Effect
  const cursorTrail = document.querySelector('.cursor-trail');
  let mouseX = 0, mouseY = 0;
  let trailX = 0, trailY = 0;

  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateTrail() {
    const distX = mouseX - trailX;
    const distY = mouseY - trailY;
    
    trailX += distX * 0.1;
    trailY += distY * 0.1;
    
    cursorTrail.style.left = trailX + 'px';
    cursorTrail.style.top = trailY + 'px';
    
    requestAnimationFrame(animateTrail);
  }
  animateTrail();

  // Skill Progress Bar Animation
  function animateSkillBars() {
    const skillBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const progress = progressBar.getAttribute('data-progress');
          progressBar.style.setProperty('--progress-width', progress + '%');
          progressBar.classList.add('animated');
          observer.unobserve(progressBar);
        }
      });
    }, {
      threshold: 0.5
    });

    skillBars.forEach(bar => {
      observer.observe(bar);
    });
  }

  // Initialize skill bar animation when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateSkillBars);
  } else {
    animateSkillBars();
  }

  // 3D Tilt Effect for Cards
  const cards = document.querySelectorAll('.card-3d');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', function() {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });

  // Smooth scrolling is handled by main.js and CSS

  // Add Scroll Progress Indicator
  function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, #FDCD57, #FFA500);
      z-index: 99999;
      transition: width 0.2s ease;
      box-shadow: 0 0 10px #FDCD57;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      progressBar.style.width = scrolled + '%';
    });
  }
  createScrollProgress();

  // Add Loading Animation
  function createLoadingScreen() {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(loadingOverlay);

    window.addEventListener('load', () => {
      setTimeout(() => {
        loadingOverlay.classList.add('hidden');
        setTimeout(() => {
          loadingOverlay.remove();
        }, 500);
      }, 500);
    });
  }
  createLoadingScreen();

  // Enhanced Image Hover Effects
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseenter', function() {
      this.style.filter = 'brightness(1.1) contrast(1.1)';
    });
    
    img.addEventListener('mouseleave', function() {
      this.style.filter = 'brightness(1) contrast(1)';
    });
  });

  // Parallax Effect for Sections
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax-section');
    
    parallaxElements.forEach(element => {
      const speed = 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Dynamic Background Color Change on Scroll
  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      document.body.style.setProperty('--scroll-direction', 'down');
    } else {
      // Scrolling up
      document.body.style.setProperty('--scroll-direction', 'up');
    }
    lastScrollTop = scrollTop;
  });

  // Add Floating Animation to Icons
  const icons = document.querySelectorAll('.icon-box i');
  icons.forEach((icon, index) => {
    icon.style.animation = `float 3s ease-in-out infinite`;
    icon.style.animationDelay = `${index * 0.1}s`;
  });

  // Easter Egg: Konami Code
  let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        activateEasterEgg();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  function activateEasterEgg() {
    // Create confetti effect
    const colors = ['#FDCD57', '#FFA500', '#FF6B6B', '#4ECDC4', '#45B7D1'];
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        createConfetti(colors[Math.floor(Math.random() * colors.length)]);
      }, i * 30);
    }
  }

  function createConfetti(color) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: ${color};
      top: -10px;
      left: ${Math.random() * 100}%;
      opacity: 1;
      transform: rotate(${Math.random() * 360}deg);
      pointer-events: none;
      z-index: 99999;
    `;
    document.body.appendChild(confetti);

    const fallDuration = Math.random() * 3 + 2;
    confetti.animate([
      { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
      { transform: `translateY(${window.innerHeight + 10}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
    ], {
      duration: fallDuration * 1000,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });

    setTimeout(() => {
      confetti.remove();
    }, fallDuration * 1000);
  }

  // Add Magnetic Effect to Social Links
  const socialLinks = document.querySelectorAll('.social-links a');
  socialLinks.forEach(link => {
    link.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translate(0, 0)';
    });
  });

  // Add Typing Sound Effect (Optional - Commented Out)
  /*
  const typed = document.querySelector('.typing');
  if (typed) {
    typed.addEventListener('DOMSubtreeModified', function() {
      // Play typing sound
      // new Audio('assets/sounds/typing.mp3').play();
    });
  }
  */

  // Performance Monitoring
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          console.log('Page Load Time:', entry.loadEventEnd - entry.fetchStart, 'ms');
        }
      }
    });
    observer.observe({ entryTypes: ['navigation'] });
  }

  // Add Viewport Resize Handler
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      AOS.refresh();
      console.log('Viewport resized - AOS refreshed');
    }, 250);
  });

  // Log initialization
  console.log('%c🚀 Futuristic Portfolio Initialized! ', 'background: #FDCD57; color: #000; font-size: 20px; padding: 10px;');
  console.log('%cTry the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A', 'color: #FDCD57; font-size: 14px;');

})();

