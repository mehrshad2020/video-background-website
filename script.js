document.addEventListener('DOMContentLoaded', function() {
    // You can add additional animations or functionality here
    console.log('Website loaded successfully');
    
    // Navigation functionality
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    
    // Toggle mobile menu
    if (burger) {
        burger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Change burger icon to X when menu is open
            if (navLinks.classList.contains('active')) {
                burger.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                burger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-links') && !event.target.closest('.burger') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Add background to navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}); 