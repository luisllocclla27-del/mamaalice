/* ═══════════════════════════════════════════
   MAMA ALICE — Interactive Engine v2.0
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. SMART HEADER (transparent → solid on scroll) ──
  const header = document.querySelector('.header');
  if (header) {
    const scrollThreshold = 60;
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run once on load
  }


  // ── 2. MOBILE MENU ──
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:998;opacity:0;pointer-events:none;transition:opacity 0.3s ease;';
  document.body.appendChild(overlay);

  if (menuBtn && navLinks) {
    const toggleMenu = () => {
      const isOpen = navLinks.classList.toggle('show');
      menuBtn.innerHTML = isOpen ? '✕' : '☰';
      overlay.style.opacity = isOpen ? '1' : '0';
      overlay.style.pointerEvents = isOpen ? 'auto' : 'none';
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };
    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    
    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('show')) toggleMenu();
      });
    });
  }


  // ── 3. SCROLL REVEAL ANIMATIONS ──
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }


  // ── 4. ANIMATED COUNTERS ──
  const counterElements = document.querySelectorAll('[data-count]');
  
  if (counterElements.length > 0) {
    const animateCounter = (element) => {
      const target = parseFloat(element.dataset.count);
      const suffix = element.dataset.suffix || '';
      const prefix = element.dataset.prefix || '';
      const decimals = element.dataset.decimals ? parseInt(element.dataset.decimals) : 0;
      const duration = 2000;
      const startTime = performance.now();

      const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const currentValue = target * easedProgress;

        if (decimals > 0) {
          element.textContent = prefix + currentValue.toFixed(decimals) + suffix;
        } else {
          element.textContent = prefix + Math.floor(currentValue) + suffix;
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          element.textContent = prefix + (decimals > 0 ? target.toFixed(decimals) : target) + suffix;
        }
      };

      requestAnimationFrame(update);
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counterElements.forEach(el => counterObserver.observe(el));
  }


  // ── 5. PROGRESS BARS ──
  const progressBars = document.querySelectorAll('.progress-fill');
  
  if (progressBars.length > 0) {
    const progressObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetWidth = entry.target.dataset.width;
          entry.target.style.width = targetWidth;
          progressObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    progressBars.forEach(bar => progressObserver.observe(bar));
  }


  // ── 6. SMOOTH SCROLL FOR ANCHOR LINKS ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });


  // ── 7. DONATION AMOUNT SELECTOR ──
  const priceAnchors = document.querySelectorAll('.price-anchor');
  const customInput = document.querySelector('.custom-amount-input');
  
  if (priceAnchors.length > 0) {
    priceAnchors.forEach(anchor => {
      anchor.addEventListener('click', () => {
        priceAnchors.forEach(el => el.classList.remove('selected'));
        anchor.classList.add('selected');
        if (customInput) customInput.value = '';
      });
    });
  }

  if (customInput) {
    customInput.addEventListener('focus', () => {
      priceAnchors.forEach(el => el.classList.remove('selected'));
    });
  }


  // ── 8. PARALLAX SUBTLE EFFECT ──
  const parallaxElements = document.querySelectorAll('.parallax');
  if (parallaxElements.length > 0 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.dataset.speed) || 0.3;
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    }, { passive: true });
  }

});
