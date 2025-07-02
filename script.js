
// JavaScript for interactive functionality
document.addEventListener('DOMContentLoaded', function () {
    // Loading screen
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.classList.add('fade-out');
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }, 1500);

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');

        // Animate hamburger
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Portfolio item hover effects
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Simulate form submission
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert('Thank you for your message! We\'ll get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.portfolio-item, .service-item, .about-content > div');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add some interactive elements
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px) scale(1)';
            }, 150);
        });
    });

    // Typewriter effect for hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero h1');
    const text = heroTitle.textContent;
    heroTitle.textContent = '';

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(typeWriter, 2000);
});

// Add some dynamic background elements
function createFloatingElements() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 5; i++) {
        const element = document.createElement('div');
        element.style.position = 'absolute';
        element.style.width = Math.random() * 100 + 50 + 'px';
        element.style.height = element.style.width;
        element.style.background = 'rgba(255,255,255,0.1)';
        element.style.borderRadius = '50%';
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite alternate`;
        hero.appendChild(element);
    }
}

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
            @keyframes float {
                0% { transform: translateY(0px) rotate(0deg); }
                100% { transform: translateY(-20px) rotate(360deg); }
            }
        `;
document.head.appendChild(style);

// Initialize floating elements
setTimeout(createFloatingElements, 3000);

// -------------------------------------------------
// Blog Section JavaScript - Add to script.js

// // Blog card interactions
// document.addEventListener('DOMContentLoaded', function() {
//     const blogCards = document.querySelectorAll('.blog-card');
    
//     blogCards.forEach(card => {
//         // Add smooth hover animations
//         card.addEventListener('mouseenter', function() {
//             this.style.transform = 'translateY(-8px) scale(1.02)';
            
//             // Add subtle rotation effect
//             const image = this.querySelector('.blog-image img');
//             if (image) {
//                 image.style.transform = 'scale(1.05) rotate(0.5deg)';
//             }
            
//             // Animate category badge
//             const category = this.querySelector('.blog-category');
//             if (category) {
//                 category.style.transform = 'scale(1.05)';
//                 category.style.background = 'rgba(0,0,0,0.9)';
//             }
            
//             // Animate tags
//             const tags = this.querySelectorAll('.blog-tags .tag');
//             tags.forEach((tag, index) => {
//                 setTimeout(() => {
//                     tag.style.transform = 'translateY(-2px)';
//                     tag.style.background = '#e0e0e0';
//                 }, index * 50);
//             });
//         });
        
//         card.addEventListener('mouseleave', function() {
//             this.style.transform = 'translateY(0) scale(1)';
            
//             // Reset image
//             const image = this.querySelector('.blog-image img');
//             if (image) {
//                 image.style.transform = 'scale(1) rotate(0deg)';
//             }
            
//             // Reset category badge
//             const category = this.querySelector('.blog-category');
//             if (category) {
//                 category.style.transform = 'scale(1)';
//                 category.style.background = 'rgba(0,0,0,0.8)';
//             }
            
//             // Reset tags
//             const tags = this.querySelectorAll('.blog-tags .tag');
//             tags.forEach(tag => {
//                 tag.style.transform = 'translateY(0)';
//                 tag.style.background = '#f0f0f0';
//             });
//         });
        
//         // Add click animation
//         card.addEventListener('click', function(e) {
//             // Create ripple effect
//             const ripple = document.createElement('div');
//             const rect = this.getBoundingClientRect();
//             const size = Math.max(rect.width, rect.height);
            
//             ripple.style.width = ripple.style.height = size + 'px';
//             ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
//             ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
//             ripple.style.position = 'absolute';
//             ripple.style.borderRadius = '50%';
//             ripple.style.background = 'rgba(0,0,0,0.1)';
//             ripple.style.transform = 'scale(0)';
//             ripple.style.animation = 'ripple 0.6s linear';
//             ripple.style.pointerEvents = 'none';
            
//             this.style.position = 'relative';
//             this.appendChild(ripple);
            
//             setTimeout(() => {
//                 ripple.remove();
//             }, 600);
//         });
//     });
    
//     // Animate blog cards on scroll
//     const observerOptions = {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//     };
    
//     const blogObserver = new IntersectionObserver(function(entries) {
//         entries.forEach((entry, index) => {
//             if (entry.isIntersecting) {
//                 setTimeout(() => {
//                     entry.target.style.opacity = '1';
//                     entry.target.style.transform = 'translateY(0)';
//                 }, index * 100);
//             }
//         });
//     }, observerOptions);
    
//     // Observe blog cards for scroll animation
//     blogCards.forEach(card => {
//         card.style.opacity = '0';
//         card.style.transform = 'translateY(30px)';
//         card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//         blogObserver.observe(card);
//     });
    
//     // View all button hover effect
//     const viewAllBtn = document.querySelector('.view-all-btn');
//     if (viewAllBtn) {
//         viewAllBtn.addEventListener('mouseenter', function() {
//             this.style.transform = 'translateY(-2px) scale(1.05)';
//         });
        
//         viewAllBtn.addEventListener('mouseleave', function() {
//             this.style.transform = 'translateY(0) scale(1)';
//         });
//     }
// });

// // Add ripple animation keyframes
// const rippleStyle = document.createElement('style');
// rippleStyle.textContent = `
//     @keyframes ripple {
//         to {
//             transform: scale(4);
//             opacity: 0;
//         }
//     }
// `;
// document.head.appendChild(rippleStyle);

// Blog Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const blogGrid = document.querySelector('.blog-grid');
    const blogContainer = document.querySelector('.blog-container');
    
    if (!blogGrid) return;
    
    const blogItems = blogGrid.querySelectorAll('.blog-item, .portfolio-item');
    
    // Only add navigation if there are more than 3 items
    if (blogItems.length > 3) {
        createBlogNavigation();
    }
    
    function createBlogNavigation() {
        // Create navigation container
        const navContainer = document.createElement('div');
        navContainer.className = 'blog-nav';
        
        // Create previous button
        const prevBtn = document.createElement('button');
        prevBtn.className = 'blog-nav-btn';
        prevBtn.innerHTML = '‹';
        prevBtn.setAttribute('aria-label', 'Previous blogs');
        
        // Create next button
        const nextBtn = document.createElement('button');
        nextBtn.className = 'blog-nav-btn';
        nextBtn.innerHTML = '›';
        nextBtn.setAttribute('aria-label', 'Next blogs');
        
        // Add buttons to navigation
        navContainer.appendChild(prevBtn);
        navContainer.appendChild(nextBtn);
        
        // Add navigation to blog container
        blogContainer.appendChild(navContainer);
        
        // Scroll functionality
        const scrollAmount = 340; // Card width + gap
        
        prevBtn.addEventListener('click', function() {
            blogGrid.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', function() {
            blogGrid.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Update button states based on scroll position
        function updateButtonStates() {
            const scrollLeft = blogGrid.scrollLeft;
            const maxScroll = blogGrid.scrollWidth - blogGrid.clientWidth;
            
            prevBtn.disabled = scrollLeft <= 0;
            nextBtn.disabled = scrollLeft >= maxScroll - 1; // -1 for rounding issues
        }
        
        // Initial button state
        updateButtonStates();
        
        // Update button states on scroll
        blogGrid.addEventListener('scroll', updateButtonStates);
        
        // Handle touch/swipe on mobile
        let startX = 0;
        let scrollStart = 0;
        
        blogGrid.addEventListener('touchstart', function(e) {
            startX = e.touches[0].pageX;
            scrollStart = blogGrid.scrollLeft;
        });
        
        blogGrid.addEventListener('touchmove', function(e) {
            e.preventDefault();
            const x = e.touches[0].pageX;
            const walk = (startX - x) * 1; // Scroll speed multiplier
            blogGrid.scrollLeft = scrollStart + walk;
        });
    }
    
    // Keyboard navigation
    blogGrid.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            blogGrid.scrollBy({
                left: -340,
                behavior: 'smooth'
            });
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            blogGrid.scrollBy({
                left: 340,
                behavior: 'smooth'
            });
        }
    });
    
    // Make the grid focusable for keyboard navigation
    blogGrid.setAttribute('tabindex', '0');
});