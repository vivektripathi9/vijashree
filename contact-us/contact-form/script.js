// Contact Form Script
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                countryCode: document.getElementById('countryCode').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                authorization: document.getElementById('authorization').checked
            };

            // Here you would typically send the data to a server
            console.log('Contact form submitted:', formData);
            
            // Show success message
            alert('Thank you for contacting us! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
});
