// About Us Expandable Section Functionality
document.addEventListener('DOMContentLoaded', function() {
    const exploreBtn = document.getElementById('exploreBtn');
    const expandedContent = document.getElementById('expandedContent');
    const btnText = document.getElementById('btnText');
    const arrow = document.getElementById('arrow');

    if (exploreBtn && expandedContent) {
        exploreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const isExpanded = expandedContent.style.display === 'block';
            
            if (isExpanded) {
                // Collapse
                expandedContent.style.display = 'none';
                btnText.textContent = 'Explore More';
                arrow.classList.remove('expanded');
                exploreBtn.setAttribute('aria-expanded', 'false');
            } else {
                // Expand
                expandedContent.style.display = 'block';
                btnText.textContent = 'Show Less';
                arrow.classList.add('expanded');
                exploreBtn.setAttribute('aria-expanded', 'true');
                
                // Smooth scroll to expanded content
                setTimeout(() => {
                    expandedContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    }

    // Handle card link clicks for smooth scrolling
    const cardLinks = document.querySelectorAll('.card-link');
    cardLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Close expanded content first
                if (expandedContent) {
                    expandedContent.style.display = 'none';
                    if (btnText) btnText.textContent = 'Explore More';
                    if (arrow) arrow.classList.remove('expanded');
                    if (exploreBtn) exploreBtn.setAttribute('aria-expanded', 'false');
                }
                
                // Scroll to target section
                setTimeout(() => {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            }
        });
    });
});
