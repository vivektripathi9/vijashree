// Navbar scroll effect
const navbar = document.getElementById('navbar');
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });

// Mobile menu toggle
mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Mobile dropdown functionality
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    const submenuItems = document.querySelectorAll('.has-submenu');
    
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        
        // Handle mobile dropdown toggle
        dropdownLink.addEventListener('click', (e) => {
            if (window.innerWidth <= 968) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Handle mobile submenu toggle
    submenuItems.forEach(submenuItem => {
        const submenuSpan = submenuItem.querySelector('span');
        
        submenuSpan.addEventListener('click', (e) => {
            if (window.innerWidth <= 968) {
                e.preventDefault();
                submenuItem.classList.toggle('active');
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
            submenuItems.forEach(submenuItem => {
                submenuItem.classList.remove('active');
            });
        }
    });
});
