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
     HEADER — Logo oficial PNG sobre fondo
  ══════════════════════════════════════════ */
  const HEADER_HTML = `
<header class="header" id="header" role="banner">
  <div class="container nav-container">

    <a href="index.html" class="logo" aria-label="Mama Alice — Inicio">
      <img src="assets/images/logo-transparent.png"
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
      <a href="index.html"         data-page="index.html">Inicio</a>
      <a href="nosotros.html"      data-page="nosotros.html">Nosotros</a>
      <a href="comunidades.html"   data-page="comunidades.html">Proyectos</a>
      <a href="hospitality.html"   data-page="hospitality.html">Hospitality</a>
      <a href="transparencia.html" data-page="transparencia.html">Transparencia</a>
      <button onclick="window.toggleDonationDrawer()" class="btn btn--primary btn--sm">Donar Ahora</button>
    </nav>

  </div>
</header>`;

  /* ══════════════════════════════════════════
     FOOTER — Editar aquí, se actualiza en todo
  ══════════════════════════════════════════ */
  const FOOTER_HTML = `
<footer class="footer" id="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">

      <!-- Brand -->
      <div class="footer-brand">
        <a href="index.html" class="logo" aria-label="Mama Alice — Inicio">
          <img src="assets/images/logo-transparent.png"
               alt="Mama Alice ONG"
               style="height:56px;width:auto;filter:brightness(0) invert(1);opacity:0.9;"
               loading="lazy" />
        </a>
        <p>Transformando el futuro de la juventud ayacuchana mediante educación, soporte emocional y formación técnica de excelencia.</p>
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
        <h4>Navegación</h4>
        <a href="index.html">Inicio</a>
        <a href="nosotros.html">Sobre Nosotros</a>
        <a href="comunidades.html">Proyectos</a>
        <a href="hospitality.html">Hospitality Center</a>
        <a href="transparencia.html">Transparencia</a>
      </div>

      <!-- Involúcrate -->
      <div class="footer-col">
        <h4>Involúcrate</h4>
        <a href="donar.html">Donar</a>
        <a href="#">Voluntariado</a>
        <a href="#">Empresas Aliadas</a>
        <a href="#">Trabaja con Nosotros</a>
      </div>

      <!-- Contacto — fuente única de verdad -->
      <div class="footer-col">
        <h4>Contacto</h4>
        <a href="https://maps.google.com/?q=Ayacucho,+Peru"
           target="_blank" rel="noopener noreferrer">
          Jr. Lima 123, Ayacucho, Perú
        </a>
        <a href="mailto:info@mamaalice.org">info@mamaalice.org</a>
        <a href="tel:+5166123456">+51 66 123 456</a>
      </div>

    </div>

    <div class="footer-bottom">
      <p>© <span id="footer-year"></span> ONG Mama Alice. Todos los derechos reservados.</p>
      <div>
        <a href="#">Política de Privacidad</a> ·
        <a href="#">Aviso Legal</a> ·
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

    // ── Lenis Smooth Scroll ──
    if (!document.getElementById('lenis-script')) {
      const script = document.createElement('script');
      script.id = 'lenis-script';
      script.src = 'https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js';
      script.onload = () => {
        const lenis = new Lenis({ 
          duration: 1.4, 
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true 
        });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
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

  if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
      setTimeout(initCarousel, 100);
  }

})();
