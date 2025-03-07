document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.nav-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksSticky = document.querySelector('.nav-links-sticky');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenuButton.classList.toggle('active');
        navLinks.classList.toggle('active');
        navLinksSticky.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-container') && navLinks.classList.contains('active')) {
            mobileMenuButton.classList.remove('active');
            navLinks.classList.remove('active');
            navLinksSticky.classList.remove('active');
        }
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuButton.classList.remove('active');
            navLinks.classList.remove('active');
            navLinksSticky.classList.remove('active');
        });
    });

    navLinksSticky.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuButton.classList.remove('active');
            navLinks.classList.remove('active');
            navLinksSticky.classList.remove('active');
        });
    });
});