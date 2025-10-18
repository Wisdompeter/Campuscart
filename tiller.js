    // Mobile Menu
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');

    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });

    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      const nav = document.getElementById('mainNav');
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });

    // Stats Counter Animation
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function animateCounter(element, target, duration = 2000) {
      let start = 0;
      const increment = target / (duration / 16);
      
      function updateCounter() {
        start += increment;
        if (start < target) {
          if (element.id === 'salesCount') {
            element.textContent = '₦' + Math.floor(start).toLocaleString();
          } else if (element.id === 'satisfactionCount') {
            element.textContent = Math.floor(start) + '%';
          } else {
            element.textContent = Math.floor(start).toLocaleString();
          }
          requestAnimationFrame(updateCounter);
        } else {
          if (element.id === 'salesCount') {
            element.textContent = '₦' + target.toLocaleString();
          } else if (element.id === 'satisfactionCount') {
            element.textContent = target + '%';
          } else {
            element.textContent = target.toLocaleString();
          }
        }
      }
      
      updateCounter();
    }

    function handleScroll() {
      const statsContainer = document.querySelector('.stats-container');
      const sellerCount = document.getElementById('sellerCount');
      const salesCount = document.getElementById('salesCount');
      const satisfactionCount = document.getElementById('satisfactionCount');
      const saleTimeCount = document.getElementById('saleTimeCount');
      
      if (statsContainer && isInViewport(statsContainer) && !statsContainer.classList.contains('counted')) {
        statsContainer.classList.add('counted');
        animateCounter(sellerCount, 2500);
        animateCounter(salesCount, 15000000);
        animateCounter(satisfactionCount, 98);
        animateCounter(saleTimeCount, 36);
      }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);