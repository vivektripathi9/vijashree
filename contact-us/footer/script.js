// Footer Scripts
document.addEventListener('DOMContentLoaded', function() {
    // Scroll to Top Functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        // Show/hide scroll to top button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.opacity = '1';
                scrollToTopBtn.style.visibility = 'visible';
            } else {
                scrollToTopBtn.style.opacity = '0';
                scrollToTopBtn.style.visibility = 'hidden';
            }
        });

        // Smooth scroll to top
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Form Submission Handler
    const footerForm = document.getElementById('footerContactForm');
    
    if (footerForm) {
        footerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('footerName').value,
                email: document.getElementById('footerEmail').value,
                countryCode: document.getElementById('footerCountryCode').value,
                phone: document.getElementById('footerPhone').value,
                message: document.getElementById('footerMessage').value,
                authorization: document.getElementById('footerAuthorization').checked
            };

            // Here you would typically send the data to a server
            console.log('Form submitted:', formData);
            
            // Show success message (you can customize this)
            alert('Thank you for contacting us! We will get back to you soon.');
            
            // Reset form
            footerForm.reset();
        });
    }
});
