// script.js - Simple pure JavaScript functionality 

// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        // Toggle the 'active' class on the navigation list when the mobile toggle is clicked
        // The active class in CSS changes display: none strictly to display: flex
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- 2. Smooth Scrolling for Navigation Links ---
    // Select all anchor tags whose 'href' attribute starts with '#'
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent the default instant jump
            e.preventDefault();

            // Get the target section ID (e.g., "#about", "#services")
            const targetId = this.getAttribute('href');
            
            // Ignore links that just point to '#'
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Determine the height of the sticky header
                const headerOffset = document.querySelector('.header').offsetHeight;
                
                // Find the exact vertical position of the target element
                const elementPosition = targetElement.getBoundingClientRect().top;
                
                // Subtract header height so content isn't chopped off at the top
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // Scroll specific to the computed position smoothly
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // If on mobile, close the menu automatically after clicking a link
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // --- 3. Simple Contact Form Interaction ---
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop form from triggering a page reload
            
            // Inform the user
            alert('Thank you for reaching out to the Institute of Digital Risk! Your message has been successfully received.');
            
            // Clear all text inputs
            contactForm.reset(); 
        });
    }

    // --- 4. Scroll Animations ---
    // Select all elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Configure the observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15 // trigger when 15% of the element is visible
    };

    // Create the IntersectionObserver
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the animation
                entry.target.classList.add('is-visible');
                // Unobserve the element so it only animates once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Start observing each animated element
    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });

});
