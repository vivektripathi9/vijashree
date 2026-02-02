// Legacy Section Number Animation
document.addEventListener('DOMContentLoaded', function() {
    const legacySection = document.querySelector('.legacy-section');
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (!legacySection || statNumbers.length === 0) return;

    // Store original values
    const originalValues = Array.from(statNumbers).map(el => el.textContent.trim());
    
    // Parse values to numbers
    const targetValues = originalValues.map(value => {
        if (value.includes('M+')) {
            return parseFloat(value) * 1000000; // Convert M to actual number
        } else if (value.includes('k')) {
            return parseFloat(value) * 1000; // Convert k to actual number
        } else if (value.includes('+')) {
            return parseFloat(value);
        }
        return parseFloat(value);
    });

    // Get suffixes
    const suffixes = originalValues.map(value => {
        if (value.includes('M+')) return 'M+';
        if (value.includes('k')) return 'k';
        if (value.includes('+')) return '+';
        return '';
    });

    // Format number for display
    function formatNumber(num, suffix) {
        if (suffix === 'M+') {
            return (num / 1000000).toFixed(0) + 'M+';
        } else if (suffix === 'k') {
            return (num / 1000).toFixed(0) + 'k';
        } else if (suffix === '+') {
            return Math.floor(num) + '+';
        }
        return Math.floor(num).toString();
    }

    // Animate a single number
    function animateNumber(element, target, suffix, duration = 2000) {
        const start = 0;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = start + (target - start) * easeOutQuart;
            
            element.textContent = formatNumber(current, suffix);

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = originalValues[Array.from(statNumbers).indexOf(element)];
            }
        }

        requestAnimationFrame(update);
    }

    // Intersection Observer to trigger animation when section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach((statNumber, index) => {
                    // Reset to 0 first
                    statNumber.textContent = formatNumber(0, suffixes[index]);
                    
                    // Animate after a small delay for each card
                    setTimeout(() => {
                        animateNumber(statNumber, targetValues[index], suffixes[index], 2000);
                    }, index * 200);
                });
                
                // Unobserve after animation starts
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3 // Trigger when 30% of section is visible
    });

    observer.observe(legacySection);
});
