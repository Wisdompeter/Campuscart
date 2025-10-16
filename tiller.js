function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        // Function to animate counting up
        function animateCounter(element, target, duration = 2000) {
            let start = 0;
            const increment = target / (duration / 16); // 60fps
            
            function updateCounter() {
                start += increment;
                if (start < target) {
                    // Format numbers with commas
                    if (element.id === 'salesCount') {
                        element.textContent = '₦' + Math.floor(start).toLocaleString();
                    } else if (element.id === 'satisfactionCount') {
                        element.textContent = Math.floor(start) + '%';
                    } else {
                        element.textContent = Math.floor(start).toLocaleString();
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    // Ensure we end at the exact target
                    if (element.id === 'salesCount') {
                        element.textContent = '₦' + target.toLocaleString();
                    } else if (element.id === 'satisfactionCount') {
                        element.textContent = target + '%';
                    } else {
                        element.textContent = target.toLocaleString();
                    }
                    element.classList.add('animated');
                }
            }
            
            updateCounter();
        }
        
        // Function to handle scroll events
        function handleScroll() {
            const statsContainer = document.querySelector('.stats-container');
            const sellerCount = document.getElementById('sellerCount');
            const salesCount = document.getElementById('salesCount');
            const satisfactionCount = document.getElementById('satisfactionCount');
            const saleTimeCount = document.getElementById('saleTimeCount');
            
            if (isInViewport(statsContainer) && !statsContainer.classList.contains('counted')) {
                statsContainer.classList.add('counted');
                
                // Start animations
                animateCounter(sellerCount, 2500);
                animateCounter(salesCount, 15000000);
                animateCounter(satisfactionCount, 98);
                animateCounter(saleTimeCount, 36);
            }
        }
        
        // Set up scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Also check on page load in case the section is already in view
        window.addEventListener('load', handleScroll);