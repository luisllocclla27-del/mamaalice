/* ═══════════════════════════════════════════
   MAMA ALICE — Component Loader v4.0
   Inyecta header y footer en cada página.
   Identidad visual: Naranja #F5A420 + Teal #2E9B8A
   ═══════════════════════════════════════════ */

(function () {

  /* ── Active nav state ── */
  function setActive(nav) {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    nav.querySelectorAll('a[data-page]').forEach(link => {
      link.classList.toggle('active', link.dataset.page === path);
    });
  }

  /* ══════════════════════════════════════════
     HEADER & FOOTER Data
  ══════════════════════════════════════════ */
  const isEn = window.location.pathname.includes('/en/');
  const assetPrefix = isEn ? '../assets/' : 'assets/';

  // --- Preloader Injection ---
  const preloaderHTML = `
  <div id="global-preloader" style="position:fixed; top:0; left:0; width:100%; height:100%; background-color:#ffffff; z-index:9999; display:flex; justify-content:center; align-items:center; transition:opacity 0.8s ease, visibility 0.8s ease;">
    <img src="${assetPrefix}images/logo-oficial.png" alt="Mama Alice Loading..." style="max-width:200px; animation: pulse 2s infinite ease-in-out;">
    <style>
      @keyframes pulse {
        0% { transform: scale(0.95); opacity: 0.7; }
        50% { transform: scale(1.05); opacity: 1; }
        100% { transform: scale(0.95); opacity: 0.7; }
      }
      body.loading { overflow: hidden; }
    </style>
  </div>
  `;

  if (document.body) {
      document.body.insertAdjacentHTML('afterbegin', preloaderHTML);
      document.body.classList.add('loading');
  } else {
      document.addEventListener('DOMContentLoaded', () => {
          document.body.insertAdjacentHTML('afterbegin', preloaderHTML);
          document.body.classList.add('loading');
      });
  }


  const labels = {
    inicio: isEn ? 'Home' : 'Inicio',
    nosotros: isEn ? 'About Us' : 'Nosotros',
    proyectos: isEn ? 'Projects' : 'Proyectos',
    hospitality: 'Hospitality',
    transparencia: isEn ? 'Transparency' : 'Transparencia',
    donar: isEn ? 'Donate Now' : 'Donar Ahora',
    footer_desc: isEn ? 'Transforming the future of Ayacucho\'s youth through education, emotional support, and technical training of excellence.' : 'Transformando el futuro de la juventud ayacuchana mediante educación, soporte emocional y formación técnica de excelencia.',
    nav_title: isEn ? 'Navigation' : 'Navegación',
    get_involved: isEn ? 'Get Involved' : 'Involúcrate',
    donate: isEn ? 'Donate' : 'Donar',
    volunteer: isEn ? 'Volunteering' : 'Voluntariado',
    partners: isEn ? 'Corporate Partners' : 'Empresas Aliadas',
    work: isEn ? 'Work with Us' : 'Trabaja con Nosotros',
    contact: isEn ? 'Contact' : 'Contacto',
    rights: isEn ? 'All rights reserved.' : 'Todos los derechos reservados.',
    privacy: isEn ? 'Privacy Policy' : 'Política de Privacidad',
    legal: isEn ? 'Legal Notice' : 'Aviso Legal',
    nlTitle: isEn ? 'Subscribe to our newsletter' : 'Suscríbete a nuestro boletín',
    nlSub: isEn ? 'Join our community and receive stories of impact directly in your inbox.' : 'Únete a nuestra comunidad y recibe historias de impacto directo en tu bandeja.',
    nlPlaceholder: isEn ? 'Your email address...' : 'Tu correo electrónico...',
    nlBtn: isEn ? 'Subscribe' : 'Suscribirse',
    successAlert: isEn ? 'Thank you for subscribing!' : '¡Gracias por suscribirte!'
  };

  const HEADER_HTML = `
<header class="header" id="header" role="banner">
  <div class="container nav-container">

    <a href="index.html" class="logo" aria-label="Mama Alice — Inicio">
      <img src="${assetPrefix}images/logo-transparent.png"
           alt="Mama Alice ONG"
           class="logo-oficial-img"
           width="120" height="85"
           loading="eager" />
    </a>

    <button class="mobile-menu-btn"
            aria-label="Abrir menú de navegación"
            aria-expanded="false"
            aria-controls="main-nav">
      <span class="hamburger-bar"></span>
      <span class="hamburger-bar"></span>
      <span class="hamburger-bar"></span>
    </button>

    <nav class="nav-links" id="main-nav" role="navigation" aria-label="Menú principal">
      <a href="index.html"         data-page="index.html">${labels.inicio}</a>
      <a href="nosotros.html"      data-page="nosotros.html">${labels.nosotros}</a>
      <a href="comunidades.html"   data-page="comunidades.html">${labels.proyectos}</a>
      <a href="hospitality.html"   data-page="hospitality.html">${labels.hospitality}</a>
      <a href="transparencia.html" data-page="transparencia.html">${labels.transparencia}</a>
      
      <!-- Language Switcher -->
      <div class="lang-switcher">
        <a href="#" onclick="toggleLanguage(event, 'es')" class="lang-btn" id="lang-es">ES</a>
        <span class="lang-sep">|</span>
        <a href="#" onclick="toggleLanguage(event, 'en')" class="lang-btn" id="lang-en">EN</a>
      </div>

      <button onclick="window.toggleDonationDrawer()" class="btn btn--primary btn--sm">${labels.donar}</button>
    </nav>

  </div>
</header>`;

  const FOOTER_HTML = `
<footer class="footer" id="footer" role="contentinfo">
  <div class="container" style="padding-top:60px;">
    <div class="footer-grid">

      <!-- Brand -->
      <div class="footer-brand">
        <a href="index.html" class="logo" aria-label="Mama Alice — Inicio">
          <img src="${assetPrefix}images/logo-transparent.png"
               alt="Mama Alice ONG"
               style="height:56px;width:auto;filter:brightness(0) invert(1);opacity:0.9;"
               loading="lazy" />
        </a>
        <p>${labels.footer_desc}</p>
        <div class="social-links">
          <a href="https://facebook.com/mamaaliceong"
             class="social-link" aria-label="Facebook de Mama Alice"
             target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="https://instagram.com/mamaaliceong"
             class="social-link" aria-label="Instagram de Mama Alice"
             target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="https://linkedin.com/company/mamaalice"
             class="social-link" aria-label="LinkedIn de Mama Alice"
             target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="https://youtube.com/@mamaalice"
             class="social-link" aria-label="YouTube de Mama Alice"
             target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Navegación -->
      <div class="footer-col">
        <h4>${labels.nav_title}</h4>
        <a href="index.html">${labels.inicio}</a>
        <a href="nosotros.html">${labels.nosotros}</a>
        <a href="comunidades.html">${labels.proyectos}</a>
        <a href="hospitality.html">${labels.hospitality}</a>
        <a href="transparencia.html">${labels.transparencia}</a>
      </div>

      <!-- Involúcrate -->
      <div class="footer-col">
        <h4>${labels.get_involved}</h4>
        <a href="donar.html">${labels.donate}</a>
        <a href="#">${labels.volunteer}</a>
        <a href="#">${labels.partners}</a>
        <a href="#">${labels.work}</a>
      </div>

      <!-- Contacto — fuente única de verdad -->
      <div class="footer-col">
        <h4>${labels.contact}</h4>
        <a href="https://maps.google.com/?q=Ayacucho,+Peru"
           target="_blank" rel="noopener noreferrer">
          Jr. Lima 123, Ayacucho, Perú
        </a>
        <a href="mailto:info@mamaalice.org">info@mamaalice.org</a>
        <a href="tel:+5166123456">+51 66 123 456</a>
      </div>

    </div>

    <div class="footer-bottom">
      <p>© <span id="footer-year"></span> ONG Mama Alice. ${labels.rights}</p>
      <div>
        <a href="#">${labels.privacy}</a> ·
        <a href="#">${labels.legal}</a> ·
        <a href="sitemap.xml">Sitemap</a>
      </div>
    </div>
  </div>
</footer>`;

  /* ══════════════════════════════════════════
     DONATION DRAWER HTML
  ══════════════════════════════════════════ */
  const DONATION_DRAWER_HTML = `
<div id="donation-overlay" class="donation-overlay" onclick="window.toggleDonationDrawer()"></div>
<div id="donation-drawer" class="donation-drawer">
  <div class="drawer-header">
    <h2>Tu aporte cambia vidas</h2>
    <button class="drawer-close" onclick="window.toggleDonationDrawer()" aria-label="Cerrar">&times;</button>
  </div>
  <div class="drawer-body" data-lenis-prevent="true">
    <p style="font-size:0.95rem; color:#6c757d; margin-bottom:24px;">Apoya la educación en Ayacucho de forma segura.</p>
    
    <form onsubmit="event.preventDefault();alert('¡Gracias por tu generosidad! Esta es una versión demostrativa.'); window.toggleDonationDrawer();">
        <div style="display:flex; background:#f1f3f5; border-radius:12px; padding:6px; margin-bottom:32px;">
            <div class="freq-option active checkout-toggle" onclick="window.drawerSelectFreq(this)">Donación Única</div>
            <div class="freq-option checkout-toggle" onclick="window.drawerSelectFreq(this)">Mensual</div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-bottom:32px;">
            <div class="price-anchor checkout-price" onclick="window.drawerSelectDonation(this)">
                <div class="amount">€15</div>
                <div class="impact">Materiales</div>
            </div>
            <div class="price-anchor selected checkout-price" onclick="window.drawerSelectDonation(this)">
                <div class="amount">€50</div>
                <div class="impact">Formación</div>
            </div>
            <div class="price-anchor checkout-price" onclick="window.drawerSelectDonation(this)">
                <div class="amount">€100</div>
                <div class="impact">Beca Total</div>
            </div>
        </div>

        <div style="margin-bottom:32px; padding-bottom:24px; border-bottom:1px solid #e9ecef;">
            <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:12px;">
                <label for="drawer-donation-slider" style="font-size:0.9rem; font-weight:600; color:#495057; margin:0;">Personaliza monto</label>
                <div style="font-family:var(--font-heading); font-size:1.6rem; color:var(--primary); font-weight:700;">€<span id="drawer-slider-val">50</span></div>
            </div>
            <input type="range" id="drawer-donation-slider" min="5" max="250" step="5" value="50" style="width:100%; height:6px; background:#e9ecef; border-radius:10px; accent-color:var(--primary); cursor:pointer; margin-bottom:12px;" />
            <div style="font-size:0.85rem; color:#6c757d; font-style:italic; text-align:center;">
                <span id="drawer-slider-impact">1 mes de formación técnica.</span>
            </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div>
                <label class="checkout-label">Nombre</label>
                <input type="text" class="checkout-input" placeholder="Ej. Ana" required />
            </div>
            <div>
                <label class="checkout-label">Apellido</label>
                <input type="text" class="checkout-input" placeholder="Ej. García" required />
            </div>
        </div>

        <label class="checkout-label">Correo Electrónico</label>
        <input type="email" class="checkout-input" placeholder="ana@correo.com" required />

        <label class="checkout-label">Datos de Tarjeta</label>
        <div style="display:flex; flex-direction:column; gap:0;">
            <input type="text" class="checkout-input" placeholder="0000 0000 0000 0000" style="border-bottom-left-radius:0; border-bottom-right-radius:0;" required />
            <div style="display:flex;">
                <input type="text" class="checkout-input" placeholder="MM/AA" style="flex:1; border-top-left-radius:0; border-top-right-radius:0; border-top:none; border-right:none;" required />
                <input type="text" class="checkout-input" placeholder="CVC" style="flex:1; border-top-left-radius:0; border-top-right-radius:0; border-top:none;" required />
            </div>
        </div>

        <button type="submit" style="width:100%; background:var(--primary); color:white; border:none; padding:18px; font-size:1.1rem; font-weight:600; border-radius:8px; cursor:pointer; margin-top:32px; transition:all 0.2s;">
            Completar Donación
        </button>

        <div style="margin-top:16px; text-align:center; font-size:0.8rem; color:#6c757d; display:flex; align-items:center; justify-content:center; gap:6px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            Pago seguro y encriptado.
        </div>
    </form>
  </div>
</div>`;

  /* ══════════════════════════════════════════
     INJECT into DOM
  ══════════════════════════════════════════ */
  function inject() {
    // ── Header ──
    const existingHeader = document.querySelector('header.header');
    if (existingHeader) {
      existingHeader.outerHTML = HEADER_HTML;
    } else {
      document.body.insertAdjacentHTML('afterbegin', HEADER_HTML);
    }

    // ── Footer ──
    const existingFooter = document.querySelector('footer.footer');
    if (existingFooter) {
      existingFooter.outerHTML = FOOTER_HTML;
    } else {
      document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
    }
    
    // ── Donation Drawer ──
    if (!document.getElementById('donation-drawer')) {
        document.body.insertAdjacentHTML('beforeend', DONATION_DRAWER_HTML);
        setupDrawerSlider();
    }

    // ── Dynamic copyright year ──
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ── Active nav link ──
    const nav = document.getElementById('main-nav');
    if (nav) setActive(nav);

    // ── Language Switcher State ──
    const isEn = window.location.pathname.includes('/en/');
    const langEs = document.getElementById('lang-es');
    const langEn = document.getElementById('lang-en');
    
    if (langEs && langEn) {
        if (isEn) {
            langEn.style.fontWeight = 'bold';
            langEn.style.color = 'var(--primary)';
            langEs.style.color = 'var(--text-muted)';
        } else {
            langEs.style.fontWeight = 'bold';
            langEs.style.color = 'var(--primary)';
            langEn.style.color = 'var(--text-muted)';
        }
    }

    // ── Lenis Smooth Scroll ──
    if (!document.getElementById('lenis-script')) {
      const script = document.createElement('script');
      script.id = 'lenis-script';
      script.src = 'https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js';
      script.onload = () => {
        window.lenis = new Lenis({ 
          duration: 1.4, 
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true 
        });
        function raf(time) { window.lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);
      };
      document.head.appendChild(script);
    }
  }

  function setupDrawerSlider() {
      const slider = document.getElementById('drawer-donation-slider');
      const valDisplay = document.getElementById('drawer-slider-val');
      const impactDisplay = document.getElementById('drawer-slider-impact');
      
      if(slider) {
          slider.addEventListener('input', (e) => {
              const val = parseInt(e.target.value);
              valDisplay.textContent = val;
              
              document.querySelectorAll('.donation-drawer .price-anchor').forEach(el => {
                  el.classList.remove('selected');
              });
              
              if(val < 25) {
                  impactDisplay.textContent = "Materiales escolares y apoyo básico.";
              } else if(val < 50) {
                  impactDisplay.textContent = "Terapias psicológicas para un joven.";
              } else if(val < 100) {
                  impactDisplay.textContent = "1 mes de formación técnica.";
              } else if(val < 150) {
                  impactDisplay.textContent = "Beca completa (educación, comida, pasajes).";
              } else {
                  impactDisplay.textContent = "Impacto profundo en múltiples jóvenes.";
              }
          });
      }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

  // Global functions for the Drawer
  window.toggleDonationDrawer = function() {
      const drawer = document.getElementById('donation-drawer');
      const overlay = document.getElementById('donation-overlay');
      if (drawer && overlay) {
          drawer.classList.toggle('is-open');
          overlay.classList.toggle('is-open');
          
          if (drawer.classList.contains('is-open')) {
              document.body.style.overflow = 'hidden';
              if (window.lenis) window.lenis.stop();
          } else {
              document.body.style.overflow = '';
              if (window.lenis) window.lenis.start();
          }
      }
  };

  window.drawerSelectDonation = function(element) {
      document.querySelectorAll('.donation-drawer .price-anchor').forEach(el => el.classList.remove('selected'));
      element.classList.add('selected');
      
      const slider = document.getElementById('drawer-donation-slider');
      const valDisplay = document.getElementById('drawer-slider-val');
      if(slider) {
          const textAmt = element.querySelector('.amount').textContent.replace('€', '');
          slider.value = textAmt;
          valDisplay.textContent = textAmt;
          slider.dispatchEvent(new Event('input'));
      }
  };

  window.drawerSelectFreq = function(element) {
      element.closest('.donation-drawer').querySelectorAll('.freq-option').forEach(el => el.classList.remove('active'));
      element.classList.add('active');
  };

  /* ══════════════════════════════════════════
     TESTIMONIAL CAROUSEL
  ══════════════════════════════════════════ */
  let currentSlide = 0;
  let carouselInterval;
  const slideDuration = 8000; // 8 seconds per slide

  function initCarousel() {
      const slides = document.querySelectorAll('.testimonial-slide');
      if (slides.length === 0) return;
      
      const progressBar = document.getElementById('carouselProgress');
      
      window.nextTestimonial = function() {
          currentSlide = (currentSlide + 1) % slides.length;
          updateCarousel(slides, progressBar);
          resetCarouselTimer(slides, progressBar);
      };
      
      window.prevTestimonial = function() {
          currentSlide = (currentSlide - 1 + slides.length) % slides.length;
          updateCarousel(slides, progressBar);
          resetCarouselTimer(slides, progressBar);
      };

      function updateCarousel(slides, progressBar) {
          slides.forEach((slide, index) => {
              if (index === currentSlide) {
                  slide.classList.add('active');
              } else {
                  slide.classList.remove('active');
              }
          });
          
          if(progressBar) {
              progressBar.style.transition = 'none';
              progressBar.style.width = '0%';
              setTimeout(() => {
                  progressBar.style.transition = `width ${slideDuration}ms linear`;
                  progressBar.style.width = '100%';
              }, 50);
          }
      }

      function resetCarouselTimer(slides, progressBar) {
          clearInterval(carouselInterval);
          carouselInterval = setInterval(() => {
              currentSlide = (currentSlide + 1) % slides.length;
              updateCarousel(slides, progressBar);
          }, slideDuration);
      }

      // Touch events for swipe
      let touchStartX = 0;
      let touchEndX = 0;
      const carouselContainer = document.getElementById('testimonialCarousel');
      if(carouselContainer) {
          carouselContainer.addEventListener('touchstart', e => {
              touchStartX = e.changedTouches[0].screenX;
          }, {passive: true});
          carouselContainer.addEventListener('touchend', e => {
              touchEndX = e.changedTouches[0].screenX;
              handleSwipe();
          }, {passive: true});
      }

      function handleSwipe() {
          const threshold = 50;
          if (touchEndX < touchStartX - threshold) window.nextTestimonial();
          if (touchEndX > touchStartX + threshold) window.prevTestimonial();
      }

      // Initialize first slide
      updateCarousel(slides, progressBar);
      resetCarouselTimer(slides, progressBar);
  }

  /* ══════════════════════════════════════════
     STICKY HORIZONTAL TIMELINE
  ══════════════════════════════════════════ */
  function initStickyTimeline() {
      const wrapper = document.querySelector('.sticky-timeline-wrapper');
      const track = document.getElementById('horizontalTrack');
      if (!wrapper || !track) return;

      window.addEventListener('scroll', () => {
          const rect = wrapper.getBoundingClientRect();
          // rect.top is 0 when wrapper hits the top of the viewport
          // rect.height is 300vh, window.innerHeight is 100vh
          // We scroll for 200vh
          const maxScrollDistance = rect.height - window.innerHeight;
          let progress = -rect.top / maxScrollDistance;
          
          if (progress < 0) progress = 0;
          if (progress > 1) progress = 1;

          // The amount we need to translate horizontally:
          // Total width of track minus the viewport width (plus some padding)
          const maxTranslate = track.scrollWidth - window.innerWidth + 150;
          
          track.style.transform = `translate3d(-${progress * maxTranslate}px, 0, 0)`;
      });
  }

  /* ══════════════════════════════════════════
     BENTO BOX PARALLAX
  ══════════════════════════════════════════ */
  function initBentoParallax() {
      const bentoItems = document.querySelectorAll('.bento-parallax');
      if (bentoItems.length === 0) return;
      
      window.addEventListener('scroll', () => {
          bentoItems.forEach(item => {
              const bg = item.querySelector('.bento-bg');
              if (!bg) return;
              const rect = item.getBoundingClientRect();
              
              // Only parallax if it's in the viewport
              if (rect.top < window.innerHeight && rect.bottom > 0) {
                  const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                  // Translate Y based on scroll progress (subtle movement)
                  const y = progress * 20 - 10; 
                  bg.style.transform = `translate3d(0, ${y}%, 0)`;
              }
          });
      });
  }

  /* ══════════════════════════════════════════
     MAGNETIC BUTTONS
  ══════════════════════════════════════════ */
  function initMagneticButtons() {
      // Only run on non-touch devices
      if (window.matchMedia("(pointer: coarse)").matches) return;
      
      const magnets = document.querySelectorAll('.btn--primary, .btn--outline, .btn--white');
      
      magnets.forEach(magnet => {
          // Set transition for smooth return
          magnet.style.transition = 'transform 0.3s cubic-bezier(0.33, 1, 0.68, 1), background-color 0.3s, color 0.3s';
          
          magnet.addEventListener('mousemove', (e) => {
              const rect = magnet.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              
              // Remove transition during move for instant tracking
              magnet.style.transition = 'none';
              magnet.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
          });
          
          magnet.addEventListener('mouseleave', () => {
              magnet.style.transition = 'transform 0.5s cubic-bezier(0.33, 1, 0.68, 1), background-color 0.3s, color 0.3s';
              magnet.style.transform = 'translate(0px, 0px)';
          });
      });
  }

  if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initCarousel);
      document.addEventListener('DOMContentLoaded', initStickyTimeline);
      document.addEventListener('DOMContentLoaded', initBentoParallax);
      document.addEventListener('DOMContentLoaded', initMagneticButtons);
  } else {
      setTimeout(initCarousel, 100);
      setTimeout(initStickyTimeline, 100);
      setTimeout(initBentoParallax, 100);
      setTimeout(initMagneticButtons, 100);
  }

})();

// --- SCROLL TO TOP BUTTON ---
function initScrollToTop() {
    if(document.getElementById('scrollTopBtn')) return;
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scrollTopBtn';
    scrollTopBtn.setAttribute('aria-label', 'Volver arriba');
    scrollTopBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
    
    // Set base inline styles for absolute certainty
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 40px;
        right: 40px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background-color: var(--primary, #2e9b8a);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
        transition: opacity 0.3s ease-out, transform 0.3s ease-out, visibility 0.3s, background-color 0.3s;
        box-shadow: 0 10px 25px rgba(46, 155, 138, 0.4);
    `;
    
    document.body.appendChild(scrollTopBtn);

    // Hover effects via JS since we are using inline styles
    scrollTopBtn.addEventListener('mouseenter', () => {
        scrollTopBtn.style.backgroundColor = 'var(--primary-dark, #237a6c)';
        scrollTopBtn.style.transform = 'translateY(-5px)';
    });
    scrollTopBtn.addEventListener('mouseleave', () => {
        scrollTopBtn.style.backgroundColor = 'var(--primary, #2e9b8a)';
        scrollTopBtn.style.transform = 'translateY(0)';
    });

    scrollTopBtn.addEventListener('click', () => {
        if (window.lenis) {
            window.lenis.scrollTo(0);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    const checkScroll = () => {
        if (window.scrollY > 50) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
            scrollTopBtn.style.transform = 'translateY(0)';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
            scrollTopBtn.style.transform = 'translateY(20px)';
        }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    
    // Also poll for the first 2 seconds just in case of initial load quirks
    let pollCount = 0;
    const pollInterval = setInterval(() => {
        checkScroll();
        if(window.lenis) {
            // Hook into lenis scroll explicitly if it becomes available
            window.lenis.on('scroll', checkScroll);
            clearInterval(pollInterval);
        }
        if(pollCount++ > 20) clearInterval(pollInterval);
    }, 100);

    checkScroll();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollToTop);
} else {
    initScrollToTop();
}


// Global function to toggle language
window.toggleLanguage = function(e, targetLang) {
    e.preventDefault();
    const currentPath = window.location.pathname;
    let newPath = currentPath;
    if (currentPath === '/' || currentPath.endsWith('index.html') && !currentPath.includes('/en/')) {
        newPath = targetLang === 'en' ? '/en/index.html' : currentPath;
    } else if (currentPath.includes('/en/')) {
        if (targetLang === 'es') {
            newPath = currentPath.replace('/en/', '/');
        }
    } else {
        if (targetLang === 'en') {
            const filename = currentPath.split('/').pop() || 'index.html';
            newPath = currentPath.substring(0, currentPath.lastIndexOf('/') + 1) + 'en/' + filename;
        }
    }
    window.location.href = newPath;
};


// --- Final Polish Animations (Fase 3) ---
function initFinalPolishAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    
    // Animate Counters
    const counters = document.querySelectorAll('.gsap-counter');
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        gsap.to(counter, {
            innerHTML: target,
            duration: 2,
            snap: { innerHTML: 1 },
            ease: "power2.out",
            scrollTrigger: {
                trigger: counter.closest('section'),
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });

    // Animate Timeline
    const timelineItems = document.querySelectorAll('.gsap-timeline-item');
    const timelineProgress = document.querySelector('.timeline-progress');
    
    if (timelineItems.length > 0 && timelineProgress) {
        gsap.to(timelineProgress, {
            height: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: ".timeline-container",
                start: "top center",
                end: "bottom center",
                scrub: 0.5
            }
        });

        timelineItems.forEach((item) => {
            gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }

    // Animate Parallax Backgrounds
    const parallaxImages = document.querySelectorAll('.parallax');
    parallaxImages.forEach(img => {
        gsap.to(img, {
            yPercent: 30, // move image down by 30% of its height
            ease: "none",
            scrollTrigger: {
                trigger: img.closest('section'),
                start: "top bottom", 
                end: "bottom top",
                scrub: true
            }
        });
    });
}

function handlePreloader() {
    const preloader = document.getElementById('global-preloader');
    if(preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            document.body.classList.remove('loading');
            setTimeout(() => preloader.remove(), 800);
        }, 300); // Small delay to ensure it feels deliberate
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFinalPolishAnimations);
} else {
    initFinalPolishAnimations();
}

window.addEventListener('load', handlePreloader);
