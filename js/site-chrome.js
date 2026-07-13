/* ============================================================
   EmbeddedOS — site-chrome.js v3.0
   Single source of truth for navbar + footer
   No hardcoded nav in HTML — this script owns it all
   ============================================================ */
(function () {
  'use strict';

  /* ── Nav items ─────────────────────────────────────────── */
  var NAV_ITEMS = [
    { key: 'home',          label: 'Home',          href: '/' },
    { key: 'getting-started', label: 'Get Started', href: '/getting-started.html' },
    { key: 'docs',          label: 'Docs',           href: '/docs/' },
    { key: 'stacks',        label: 'Stacks',         href: '/stacks/' },
    { key: 'eApps',         label: 'eApps',          href: '/eApps/' },
    { key: 'books',         label: 'Books',          href: '/books.html' },
    { key: 'hardware-lab',  label: 'Hardware Lab',   href: '/hardware-lab.html' },
    { key: 'kids',          label: 'Kids',           href: '/kids.html' },
    { key: 'flow',          label: 'Flow',           href: '/flow.html' },
    { key: 'get-involved',  label: 'Get Involved',   href: '/get-involved.html' }
  ];

  /* ── Detect active page ─────────────────────────────────── */
  function detectActive() {
    var path = window.location.pathname.replace(/\/+$/, '') || '/';
    if (path === '' || path === '/') return 'home';
    if (/getting-started/.test(path)) return 'getting-started';
    if (/\/docs/.test(path))          return 'docs';
    if (/\/stacks/.test(path))        return 'stacks';
    if (/\/eApps/.test(path))         return 'eApps';
    if (/books/.test(path))           return 'books';
    if (/hardware-lab/.test(path))    return 'hardware-lab';
    if (/kids/.test(path))            return 'kids';
    if (/flow/.test(path))            return 'flow';
    if (/get-involved/.test(path))    return 'get-involved';
    return null;
  }

  /* ── Build nav HTML ─────────────────────────────────────── */
  function buildNav(activeKey) {
    var linksHtml = NAV_ITEMS.map(function (item) {
      var active = item.key === activeKey ? ' active' : '';
      return '<li><a href="' + item.href + '" class="' + active.trim() + '">' + item.label + '</a></li>';
    }).join('');

    return [
      '<a href="/" class="logo" aria-label="EmbeddedOS Home">',
      '  <span class="logo-icon" aria-hidden="true">EOS</span>',
      '  <span class="logo-text">EmbeddedOS</span>',
      '  <span class="logo-version">v1.0.0</span>',
      '</a>',
      '<button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="main-nav-links">',
      '  <span class="hamburger-bar"></span>',
      '  <span class="hamburger-bar"></span>',
      '  <span class="hamburger-bar"></span>',
      '</button>',
      '<ul class="nav-links" id="main-nav-links" role="list">',
      linksHtml,
      '  <li class="nav-search-item">',
      '    <button class="nav-search-btn" id="search-open-btn" aria-label="Search (press /)" title="Search">',
      '      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">',
      '        <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" stroke-width="1.5"/>',
      '        <path d="M10 10l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
      '      </svg>',
      '    </button>',
      '  </li>',
      '  <li><a href="https://github.com/embeddedos-org" class="nav-github" target="_blank" rel="noopener">',
      '    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">',
      '      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>',
      '    </svg>',
      '    GitHub',
      '  </a></li>',
      '</ul>'
    ].join('');
  }

  /* ── Build footer HTML ──────────────────────────────────── */
  var FOOTER_HTML = [
    '<div class="container">',
    '  <div class="footer-grid">',
    '    <div class="footer-brand">',
    '      <a href="/" class="logo" style="display:inline-flex;align-items:center;gap:10px;text-decoration:none">',
    '        <span class="logo-icon" aria-hidden="true">EOS</span>',
    '        <span class="logo-text">EmbeddedOS</span>',
    '      </a>',
    '      <p>An open-source, patent-pending embedded operating system built for safety, performance, and the future of connected devices.</p>',
    '    </div>',
    '    <div class="footer-col">',
    '      <div class="footer-col-title">Platform</div>',
    '      <ul>',
    '        <li><a href="/getting-started.html">Get Started</a></li>',
    '        <li><a href="/docs/">Documentation</a></li>',
    '        <li><a href="/stacks/">Stacks</a></li>',
    '        <li><a href="/eApps/">eApps</a></li>',
    '      </ul>',
    '    </div>',
    '    <div class="footer-col">',
    '      <div class="footer-col-title">Products</div>',
    '      <ul>',
    '        <li><a href="/hardware-lab.html">Hardware Lab</a></li>',
    '        <li><a href="/books.html">Books</a></li>',
    '        <li><a href="/kids.html">Kids</a></li>',
    '        <li><a href="/flow.html">Flow</a></li>',
    '      </ul>',
    '    </div>',
    '    <div class="footer-col">',
    '      <div class="footer-col-title">Community</div>',
    '      <ul>',
    '        <li><a href="/get-involved.html">Get Involved</a></li>',
    '        <li><a href="https://github.com/embeddedos-org" target="_blank" rel="noopener">GitHub</a></li>',
    '        <li><a href="https://github.com/embeddedos-org/discussions" target="_blank" rel="noopener">Discussions</a></li>',
    '      </ul>',
    '    </div>',
    '    <div class="footer-col">',
    '      <div class="footer-col-title">Legal</div>',
    '      <ul>',
    '        <li><a href="#">Privacy Policy</a></li>',
    '        <li><a href="#">Terms of Use</a></li>',
    '        <li><a href="#">Patent Notice</a></li>',
    '        <li><a href="#">License (Apache 2.0)</a></li>',
    '      </ul>',
    '    </div>',
    '    <div class="footer-col">',
    '      <div class="footer-col-title">Resources</div>',
    '      <ul>',
    '        <li><a href="/docs/">API Reference</a></li>',
    '        <li><a href="/stacks/eai-edge.html">eAI Edge</a></li>',
    '        <li><a href="/hardware-lab.html">Dev Boards</a></li>',
    '        <li><a href="/books.html">Learning</a></li>',
    '      </ul>',
    '    </div>',
    '  </div>',
    '  <div class="footer-bottom">',
    '    <p class="footer-copy">&copy; 2024&ndash;2025 EmbeddedOS Organization. Patent Pending. All rights reserved.</p>',
    '    <div class="footer-links">',
    '      <a href="#">Privacy</a>',
    '      <a href="#">Terms</a>',
    '      <a href="https://github.com/embeddedos-org" target="_blank" rel="noopener">GitHub</a>',
    '    </div>',
    '  </div>',
    '</div>'
  ].join('');

  /* ── Inject nav + footer ────────────────────────────────── */
  function inject() {
    var nav = document.querySelector('nav.navbar');
    if (nav) {
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Main navigation');
      nav.innerHTML = buildNav(detectActive());
    }

    var footer = document.querySelector('footer.footer');
    if (footer) {
      footer.setAttribute('role', 'contentinfo');
      footer.innerHTML = FOOTER_HTML;
    }

    wireToggle();
    wireScrolled();
    wireSearch();
    wireScrollTop();
    wireEbot();
  }

  /* ── Hamburger toggle ───────────────────────────────────── */
  function wireToggle() {
    var toggle = document.querySelector('.nav-toggle');
    var links  = document.querySelector('.nav-links');
    if (!toggle || !links) return;

    function openMenu() {
      links.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-open');
    }
    function closeMenu() {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    }

    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });

    /* Close on nav link click */
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });

    /* Close on outside click — only when menu is open */
    document.addEventListener('click', function (e) {
      if (toggle.getAttribute('aria-expanded') !== 'true') return;
      var nav = document.querySelector('nav.navbar');
      if (nav && !nav.contains(e.target)) closeMenu();
    }, true);

    /* Close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeMenu();
        toggle.focus();
      }
    });

    /* Close on resize to desktop */
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1100) closeMenu();
    });
  }

  /* ── Scrolled shadow ────────────────────────────────────── */
  function wireScrolled() {
    var nav = document.querySelector('nav.navbar');
    if (!nav) return;
    function update() {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ── Search overlay ─────────────────────────────────────── */
  function wireSearch() {
    var btn     = document.getElementById('search-open-btn');
    var overlay = document.getElementById('search-overlay');
    var closeBtn = document.getElementById('search-close-btn');
    var input   = document.getElementById('search-input');
    if (!btn || !overlay) return;

    function openSearch() { overlay.removeAttribute('hidden'); if (input) input.focus(); }
    function closeSearch() { overlay.setAttribute('hidden', ''); }

    btn.addEventListener('click', openSearch);
    if (closeBtn) closeBtn.addEventListener('click', closeSearch);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeSearch(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault(); openSearch();
      }
      if (e.key === 'Escape') closeSearch();
    });
  }

  /* ── Scroll-to-top button ───────────────────────────────── */
  function wireScrollTop() {
    var btn = document.createElement('button');
    btn.className = 'scroll-top-btn';
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.innerHTML = '&#8679;';
    document.body.appendChild(btn);

    window.addEventListener('scroll', function () {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── eBot chat ──────────────────────────────────────────── */
  function wireEbot() {
    var fab   = document.getElementById('ebot-fab');
    var panel = document.getElementById('ebot-panel');
    var close = document.querySelector('.ebot-close');
    if (!fab || !panel) return;

    /* Ensure touch target */
    fab.style.minWidth  = '52px';
    fab.style.minHeight = '52px';

    fab.addEventListener('click', function () {
      panel.hasAttribute('hidden') ? panel.removeAttribute('hidden') : panel.setAttribute('hidden', '');
    });
    if (close) close.addEventListener('click', function () { panel.setAttribute('hidden', ''); });

    /* Suggestion chips */
    document.querySelectorAll('.ebot-suggest-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var input = document.querySelector('.ebot-input');
        if (input) { input.value = btn.textContent; input.focus(); }
      });
    });
  }

  /* ── Run on DOM ready ───────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
