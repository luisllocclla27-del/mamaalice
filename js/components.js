/* ═══════════════════════════════════════════
   MAMA ALICE — Component Loader
   Injects shared header & footer into every page,
   eliminating the need to edit 6 separate HTML files.
   ═══════════════════════════════════════════ */

(function () {
  /* ── Determine base path (handles pages in subdirectories) ── */
  const isRoot = !window.location.pathname.includes('/pages/');

  /* ── NAV ACTIVE STATE helper ── */
  function setActive(nav) {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    nav.querySelectorAll('a[data-page]').forEach(link => {
      if (link.dataset.page === path) link.classList.add('active');
    });
  }

  /* ══════════════════════════════════════════
     HEADER TEMPLATE
  ══════════════════════════════════════════ */
  const HEADER_HTML = `
<header class="header" id="header" role="banner">
  <div class="container nav-container">
    <a href="index.html" class="logo" aria-label="Mama Alice — Inicio">
      Mama<span>Alice.</span>
    </a>

    <button class="mobile-menu-btn" aria-label="Abrir menú de navegación" aria-expanded="false" aria-controls="main-nav">
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
      <a href="donar.html"         data-page="donar.html" class="btn btn--primary btn--sm">Donar Ahora</a>
    </nav>
  </div>
</header>`;

  /* ══════════════════════════════════════════
     FOOTER TEMPLATE  — edit once, updates everywhere
  ══════════════════════════════════════════ */
  const FOOTER_HTML = `
<footer class="footer" id="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">

      <!-- Brand -->
      <div class="footer-brand">
        <a href="index.html" class="logo" aria-label="Mama Alice — Inicio">
          Mama<span>Alice.</span>
        </a>
        <p>Transformando el futuro de la juventud ayacuchana mediante
           educación, soporte emocional y formación técnica de excelencia.</p>
        <div class="social-links">
          <a href="https://facebook.com/mamaaliceong"  class="social-link" aria-label="Facebook de Mama Alice"  target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://instagram.com/mamaaliceong" class="social-link" aria-label="Instagram de Mama Alice" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://linkedin.com/company/mamaalice" class="social-link" aria-label="LinkedIn de Mama Alice" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://youtube.com/@mamaalice" class="social-link" aria-label="YouTube de Mama Alice" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
          </a>
        </div>
      </div>

      <!-- Nav col -->
      <div class="footer-col">
        <h4>Navegación</h4>
        <a href="index.html">Inicio</a>
        <a href="nosotros.html">Sobre Nosotros</a>
        <a href="comunidades.html">Proyectos</a>
        <a href="hospitality.html">Hospitality Center</a>
        <a href="transparencia.html">Transparencia</a>
      </div>

      <!-- Involucrate col -->
      <div class="footer-col">
        <h4>Involúcrate</h4>
        <a href="donar.html">Donar</a>
        <a href="#">Voluntariado</a>
        <a href="#">Empresas Aliadas</a>
        <a href="#">Trabaja con Nosotros</a>
      </div>

      <!-- Contact col — SINGLE SOURCE OF TRUTH for contact info -->
      <div class="footer-col">
        <h4>Contacto</h4>
        <a href="https://maps.google.com/?q=Ayacucho,+Peru" target="_blank" rel="noopener">
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

    // ── Dynamic copyright year ──
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ── Active nav link ──
    const nav = document.getElementById('main-nav');
    if (nav) setActive(nav);
  }

  // Run immediately if DOM is ready, otherwise wait
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
