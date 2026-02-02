// Footer Scripts
document.addEventListener('DOMContentLoaded', function() {
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
                message: document.getElementById('footerMessage').value
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
