/* ============================================================
   EmbeddedOS — site-chrome.js v4.0
   Single source of truth for nav + footer
   Dropdown mega-menu · Scroll lock · Escape · Outside-click
   ============================================================ */
(function () {
  'use strict';

  /* ── Nav definition ─────────────────────────────────────── */
  const NAV_ITEMS = [
    {
      label: 'Platform',
      trigger: true,
      dropdown: [
        { icon: '🖥️', label: 'EmbeddedOS', desc: 'The core operating system', href: '/docs/' },
        { icon: '⚡', label: 'eBoot', desc: 'Secure bootloader', href: '/docs/' },
        { icon: '🔌', label: 'EIPC', desc: 'Inter-process communication', href: '/docs/' },
        { icon: '🤖', label: 'eAI Edge', desc: 'On-device AI runtime', href: '/stacks/' },
        { icon: '🔒', label: 'eSec', desc: 'Security & crypto layer', href: '/docs/' },
        { icon: '📡', label: 'eNet', desc: 'Networking stack', href: '/stacks/' },
      ],
      mega: true,
    },
    {
      label: 'Docs',
      trigger: true,
      dropdown: [
        { icon: '🚀', label: 'Getting Started', desc: 'Up and running in minutes', href: '/getting-started.html' },
        { icon: '📖', label: 'API Reference', desc: 'Full API documentation', href: '/docs/' },
        { icon: '🏗️', label: 'Architecture', desc: 'System design & internals', href: '/docs/' },
        { icon: '🔧', label: 'Hardware Lab', desc: 'Supported boards & SoCs', href: '/hardware-lab.html' },
      ],
    },
    {
      label: 'Products',
      trigger: true,
      dropdown: [
        { icon: '📱', label: 'App Store', desc: 'Embedded app marketplace', href: '/eApps/' },
        { icon: '📚', label: 'Books', desc: 'Learning resources', href: '/books.html' },
        { icon: '🧒', label: 'Kids Edition', desc: 'Learn embedded systems', href: '/kids.html' },
        { icon: '🌊', label: 'eFlow', desc: 'Visual programming', href: '/flow.html' },
      ],
    },
    {
      label: 'Community',
      trigger: true,
      dropdown: [
        { icon: '🤝', label: 'Get Involved', desc: 'Contribute to the project', href: '/get-involved.html' },
        { icon: '💬', label: 'Discussions', desc: 'GitHub Discussions', href: 'https://github.com/embeddedos-org/embeddedos-org/discussions' },
        { icon: '🐛', label: 'Issues', desc: 'Bug reports & features', href: 'https://github.com/embeddedos-org/embeddedos-org/issues' },
        { icon: '📣', label: 'Blog', desc: 'News & announcements', href: '/docs/' },
      ],
    },
    { label: 'Stacks', href: '/stacks/', trigger: false },
    {
      label: '⭐ GitHub',
      href: 'https://github.com/embeddedos-org',
      trigger: false,
      cls: 'nav-github',
      external: true,
    },
  ];

  /* ── Footer definition ──────────────────────────────────── */
  const FOOTER_COLS = [
    {
      title: 'Platform',
      links: [
        { label: 'EmbeddedOS Core', href: '/docs/' },
        { label: 'eBoot Bootloader', href: '/docs/' },
        { label: 'EIPC', href: '/docs/' },
        { label: 'eAI Edge', href: '/stacks/' },
        { label: 'eSec', href: '/docs/' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'App Store', href: '/eApps/' },
        { label: 'Books', href: '/books.html' },
        { label: 'Kids Edition', href: '/kids.html' },
        { label: 'eFlow', href: '/flow.html' },
        { label: 'Hardware Lab', href: '/hardware-lab.html' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Get Involved', href: '/get-involved.html' },
        { label: 'GitHub', href: 'https://github.com/embeddedos-org' },
        { label: 'Discussions', href: 'https://github.com/embeddedos-org/embeddedos-org/discussions' },
        { label: 'Issues', href: 'https://github.com/embeddedos-org/embeddedos-org/issues' },
        { label: 'Stacks', href: '/stacks/' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'License (Apache 2.0)', href: '/docs/' },
        { label: 'Privacy Policy', href: '/docs/' },
        { label: 'Code of Conduct', href: '/docs/' },
        { label: 'Security Policy', href: '/docs/' },
      ],
    },
  ];

  /* ── Helpers ─────────────────────────────────────────────── */
  const currentPath = window.location.pathname;

  function isActive(href) {
    if (!href || href.startsWith('http')) return false;
    if (href === '/' || href === '/index.html') return currentPath === '/' || currentPath === '/index.html';
    return currentPath.startsWith(href.replace(/\/$/, ''));
  }

  function chevronSVG() {
    return `<svg class="nav-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 6 8 10 12 6"/></svg>`;
  }

  /* ── Build Nav ───────────────────────────────────────────── */
  function buildNav() {
    const nav = document.querySelector('nav.navbar, .navbar');
    if (!nav) return;

    const logoHref = '/';
    const logoHTML = `
      <a href="${logoHref}" class="nav-logo" aria-label="EmbeddedOS Home">
        <div class="nav-logo-mark" aria-hidden="true">EOS</div>
        <div class="nav-logo-text">
          EmbeddedOS
          <span>Open Source · Nonprofit</span>
        </div>
        <span class="nav-version">v1.0.0</span>
      </a>`;

    let menuHTML = `<ul class="nav-menu" id="nav-menu" role="list">`;
    NAV_ITEMS.forEach((item) => {
      const active = item.href ? isActive(item.href) : false;
      if (item.trigger && item.dropdown) {
        const ddClass = item.mega ? 'nav-dropdown mega' : 'nav-dropdown';
        let ddItems = item.dropdown.map((d) => `
          <li>
            <a href="${d.href}"${d.external ? ' target="_blank" rel="noopener"' : ''}>
              <span class="dd-icon" aria-hidden="true">${d.icon}</span>
              <span class="dd-text">
                <strong>${d.label}</strong>
                <span>${d.desc}</span>
              </span>
            </a>
          </li>`).join('');
        menuHTML += `
          <li class="nav-item${active ? ' active' : ''}">
            <button class="nav-trigger" aria-expanded="false" aria-haspopup="true">
              ${item.label}${chevronSVG()}
            </button>
            <ul class="${ddClass}" role="menu">${ddItems}</ul>
          </li>`;
      } else {
        const cls = item.cls ? ` class="${item.cls}${active ? ' active' : ''}"` : (active ? ' class="active"' : '');
        menuHTML += `
          <li class="nav-item${active ? ' active' : ''}">
            <a href="${item.href}"${cls}${item.external ? ' target="_blank" rel="noopener"' : ''}>${item.label}</a>
          </li>`;
      }
    });
    menuHTML += `</ul>`;

    const rightHTML = `
      <div class="nav-right">
        <button class="nav-search-btn" id="nav-search-btn" aria-label="Search (press /)" title="Search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </button>
        <a href="/getting-started.html" class="btn-nav-primary">Get Started</a>
      </div>`;

    const toggleHTML = `
      <button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="nav-menu" aria-label="Open navigation menu">
        <span class="hamburger-bar" aria-hidden="true"></span>
        <span class="hamburger-bar" aria-hidden="true"></span>
        <span class="hamburger-bar" aria-hidden="true"></span>
      </button>`;

    nav.innerHTML = `
      <div class="nav-inner">
        ${logoHTML}
        ${menuHTML}
        ${rightHTML}
        ${toggleHTML}
      </div>`;

    initNavBehavior();
  }

  /* ── Nav Behaviour ───────────────────────────────────────── */
  function initNavBehavior() {
    const nav = document.querySelector('nav.navbar, .navbar');
    const menu = document.getElementById('nav-menu');
    const toggle = document.getElementById('nav-toggle');
    if (!nav || !menu || !toggle) return;

    /* Scrolled class */
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* Mobile hamburger */
    function openMenu() {
      menu.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close navigation menu');
      document.body.classList.add('nav-open');
    }
    function closeMenu() {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
      document.body.classList.remove('nav-open');
      toggle.focus();
    }
    toggle.addEventListener('click', () => {
      toggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
    });

    /* Close on nav link click */
    menu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') closeMenu();
    });

    /* Close on outside click */
    document.addEventListener('click', (e) => {
      if (toggle.getAttribute('aria-expanded') === 'true' && !nav.contains(e.target)) closeMenu();
    });

    /* Close on Escape */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMenu();
        closeAllDropdowns();
      }
    });

    /* Close on resize to desktop */
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1100) closeMenu();
    });

    /* Dropdown triggers */
    const triggers = menu.querySelectorAll('.nav-trigger');
    function closeAllDropdowns(except) {
      triggers.forEach((t) => {
        if (t !== except) {
          t.setAttribute('aria-expanded', 'false');
          t.closest('.nav-item').classList.remove('open');
        }
      });
    }
    triggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        closeAllDropdowns(trigger);
        if (isOpen) {
          trigger.setAttribute('aria-expanded', 'false');
          trigger.closest('.nav-item').classList.remove('open');
        } else {
          trigger.setAttribute('aria-expanded', 'true');
          trigger.closest('.nav-item').classList.add('open');
        }
      });
    });

    /* Close dropdowns on outside click */
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) closeAllDropdowns();
    });

    /* Keyboard nav for dropdowns */
    triggers.forEach((trigger) => {
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          trigger.click();
        }
      });
    });
  }

  /* ── Build Footer ────────────────────────────────────────── */
  function buildFooter() {
    const footer = document.querySelector('footer.footer, footer');
    if (!footer) return;

    const colsHTML = FOOTER_COLS.map((col) => `
      <div class="footer-col">
        <h4>${col.title}</h4>
        <ul>${col.links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>
      </div>`).join('');

    footer.innerHTML = `
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="footer-brand-logo">
            <div class="footer-brand-mark" aria-hidden="true">EOS</div>
            <span class="footer-brand-name">EmbeddedOS</span>
          </div>
          <p>An open-source, nonprofit embedded operating system built for the next generation of connected devices. Free forever. Community driven.</p>
          <div class="footer-social" aria-label="Social links">
            <a href="https://github.com/embeddedos-org" target="_blank" rel="noopener" aria-label="GitHub">GH</a>
            <a href="https://github.com/embeddedos-org/embeddedos-org/discussions" target="_blank" rel="noopener" aria-label="Discussions">💬</a>
            <a href="/docs/" aria-label="Documentation">📖</a>
          </div>
        </div>
        ${colsHTML}
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} EmbeddedOS Foundation · Apache 2.0 License · <a href="https://github.com/embeddedos-org">GitHub</a></p>
        <div class="footer-bottom-links">
          <a href="/docs/">Privacy</a>
          <a href="/docs/">Terms</a>
          <a href="/docs/">Security</a>
        </div>
      </div>`;
  }

  /* ── eBot FAB ────────────────────────────────────────────── */
  function buildEBot() {
    if (document.getElementById('ebot-fab')) return;
    const fab = document.createElement('button');
    fab.id = 'ebot-fab';
    fab.setAttribute('aria-label', 'Open eBot assistant');
    fab.setAttribute('aria-expanded', 'false');
    fab.setAttribute('aria-controls', 'ebot-panel');
    fab.innerHTML = '🤖';
    fab.style.cssText = 'position:fixed;bottom:1.5rem;right:1.5rem;width:52px;height:52px;min-width:52px;min-height:52px;border-radius:9999px;border:none;cursor:pointer;z-index:500;display:flex;align-items:center;justify-content:center;font-size:1.25rem;';

    const panel = document.createElement('div');
    panel.id = 'ebot-panel';
    panel.hidden = true;
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'eBot Assistant');
    panel.innerHTML = `
      <div class="ebot-header">
        <h4>🤖 eBot Assistant</h4>
        <button class="ebot-close" id="ebot-close" aria-label="Close eBot">✕</button>
      </div>
      <div class="ebot-messages" id="ebot-messages">
        <div class="ebot-msg bot">Hi! I'm eBot — your EmbeddedOS guide. Ask me anything about the platform, docs, or getting started.</div>
      </div>
      <div class="ebot-suggest">
        <button class="ebot-suggest-btn">Getting started</button>
        <button class="ebot-suggest-btn">Hardware support</button>
        <button class="ebot-suggest-btn">Contribute</button>
      </div>
      <div class="ebot-input-row">
        <input class="ebot-input" id="ebot-input" type="text" placeholder="Ask eBot..." aria-label="Message eBot"/>
        <button class="ebot-send" id="ebot-send" aria-label="Send message">➤</button>
      </div>`;

    document.body.appendChild(fab);
    document.body.appendChild(panel);

    fab.addEventListener('click', () => {
      const open = !panel.hidden;
      panel.hidden = open;
      fab.setAttribute('aria-expanded', String(!open));
    });
    document.getElementById('ebot-close').addEventListener('click', () => {
      panel.hidden = true;
      fab.setAttribute('aria-expanded', 'false');
      fab.focus();
    });
    document.querySelectorAll('.ebot-suggest-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const msgs = document.getElementById('ebot-messages');
        const msg = document.createElement('div');
        msg.className = 'ebot-msg bot';
        msg.textContent = `You asked about "${btn.textContent}". Check out our docs at /docs/ for detailed guides!`;
        msgs.appendChild(msg);
        msgs.scrollTop = msgs.scrollHeight;
      });
    });
  }

  /* ── Scroll-to-top ───────────────────────────────────────── */
  function buildScrollTop() {
    const btn = document.createElement('button');
    btn.className = 'scroll-top-btn';
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.innerHTML = '↑';
    document.body.appendChild(btn);
    window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ── Search overlay ──────────────────────────────────────── */
  function buildSearch() {
    const overlay = document.createElement('div');
    overlay.className = 'search-overlay';
    overlay.id = 'search-overlay';
    overlay.hidden = true;
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-label', 'Search');
    overlay.innerHTML = `
      <div class="search-modal">
        <div class="search-header">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input class="search-input" id="search-input" type="search" placeholder="Search EmbeddedOS docs…" aria-label="Search"/>
          <kbd class="search-kbd">ESC</kbd>
        </div>
        <ul class="search-results" id="search-results" role="listbox">
          <li><a href="/getting-started.html">🚀 Getting Started</a></li>
          <li><a href="/docs/">📖 Documentation</a></li>
          <li><a href="/stacks/">🧱 Stacks</a></li>
          <li><a href="/hardware-lab.html">🔧 Hardware Lab</a></li>
          <li><a href="/eApps/">📱 App Store</a></li>
        </ul>
      </div>`;
    document.body.appendChild(overlay);

    function openSearch() {
      overlay.hidden = false;
      document.getElementById('search-input').focus();
    }
    function closeSearch() {
      overlay.hidden = true;
    }

    const searchBtn = document.getElementById('nav-search-btn');
    if (searchBtn) searchBtn.addEventListener('click', openSearch);

    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeSearch(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault(); openSearch();
      }
      if (e.key === 'Escape') closeSearch();
    });
  }

  /* ── Init ────────────────────────────────────────────────── */
  function init() {
    buildNav();
    buildFooter();
    buildEBot();
    buildScrollTop();
    buildSearch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
