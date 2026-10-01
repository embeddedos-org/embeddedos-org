// @ts-check
const { test, expect } = require('@playwright/test');

const BASE = process.env.BASE_URL || 'http://localhost:8080';

/*
 * Product pages live in sibling repositories, not in this one. GitHub Pages
 * publishes repo `eBoot` of org `embeddedos-org` at
 * https://embeddedos-org.github.io/eBoot/, so `/eBoot/` is a correct link
 * from this site in production -- but it cannot resolve against a local
 * `http-server .`, which only ever serves this repo.
 *
 * These paths are therefore skipped when testing a local origin and checked
 * normally when BASE_URL points at the deployed site. Every other internal
 * link is still verified in both modes, so a genuinely broken link inside
 * this repo continues to fail the test.
 */
const SIBLING_REPO_PATHS = new Set([
  '/eos/', '/eBoot/', '/ebuild/', '/eIPC/', '/eAI/', '/eNI/',
  '/EoSim/', '/EoStudio/', '/eDB/', '/eBrowser/', '/eOffice/',
  '/eApps/', '/eCAD-Hardware-Products/',
]);

const IS_LOCAL = /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(:|\/|$)/.test(BASE);

/** True when a link points at a sibling repo's Pages site we cannot serve locally. */
function isUnservableSiblingLink(href) {
  if (!IS_LOCAL) return false;
  try {
    return SIBLING_REPO_PATHS.has(new URL(href, BASE).pathname);
  } catch {
    return false;
  }
}

const PAGES = [
  { name: 'Home', path: '/index.html' },
  { name: 'Get Started', path: '/getting-started.html' },
  { name: 'Docs Hub', path: '/docs/index.html' },
  { name: 'Flow', path: '/flow.html' },
  { name: 'Kids', path: '/kids.html' },
  { name: 'Hardware Lab', path: '/hardware-lab.html' },
  { name: 'Books', path: '/books.html' },
  { name: '404', path: '/404.html' },
];

// ─── Crawl every page and check ALL internal links ───
test.describe('Internal Link Validation', () => {
  for (const page of PAGES) {
    test(`${page.name}: all internal links return 200`, async ({ browser }) => {
      const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
      const p = await ctx.newPage();
      await p.goto(`${BASE}${page.path}`, { waitUntil: 'domcontentloaded' });

      const links = await p.$$eval('a[href]', (anchors) =>
        anchors
          .map((a) => a.getAttribute('href'))
          .filter((h) => h && !h.startsWith('http') && !h.startsWith('#') && !h.startsWith('mailto:') && !h.startsWith('tel:') && !h.startsWith('javascript:') && !h.includes('#'))
      );

      const unique = [...new Set(links)].filter((h) => !isUnservableSiblingLink(h));
      const broken = [];

      for (const link of unique) {
        try {
          const url = new URL(link, `${BASE}${page.path}`).href;
          const response = await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });
          if (!response || response.status() >= 400) {
            broken.push({ link, status: response ? response.status() : 'no response' });
          }
        } catch (e) {
          broken.push({ link, status: e.message });
        }
      }

      if (broken.length > 0) {
        console.log(`Broken links on ${page.name}:`, broken);
      }
      expect(broken, `Broken internal links on ${page.name}: ${JSON.stringify(broken)}`).toEqual([]);
      await ctx.close();
    });
  }
});

// ─── Shared community navigation ───
test('Shared chrome exposes governance destinations without an /agents route', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  await page.goto(`${BASE}/getting-started.html`, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => document.querySelector('.navbar')?.children.length > 0);
  expect(pageErrors).toEqual([]);

  const destinations = [
    'https://github.com/embeddedos-org/embeddedos-org/wiki',
    'https://github.com/embeddedos-org/embeddedos-org/discussions',
    'https://github.com/embeddedos-org/embeddedos-org/issues',
    'https://github.com/orgs/embeddedos-org/projects',
    'https://github.com/embeddedos-org/embeddedos-org/blob/master/AGENTS.md',
  ];

  for (const href of destinations) {
    expect(await page.locator(`a[href="${href}"]`).count(), href).toBeGreaterThan(0);
  }
  await expect(page.locator('a[href="/agents"], a[href^="/agents/"]')).toHaveCount(0);
});

// ─── Check for placeholder href="#" links ───
test.describe('No Placeholder Links', () => {
  for (const page of PAGES) {
    test(`${page.name}: no href="#" placeholder links`, async ({ browser }) => {
      const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
      const p = await ctx.newPage();
      await p.goto(`${BASE}${page.path}`, { waitUntil: 'domcontentloaded' });

      const placeholders = await p.$$eval('a[href="#"]', (anchors) =>
        anchors.map((a) => a.textContent.trim()).filter(Boolean)
      );

      expect(placeholders, `Found href="#" links: ${placeholders.join(', ')}`).toEqual([]);
      await ctx.close();
    });
  }
});

// ─── All buttons have an action (onclick, href, or type=submit) ───
test.describe('Button Functionality', () => {
  for (const page of PAGES) {
    test(`${page.name}: all buttons have actions`, async ({ browser }) => {
      const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
      const p = await ctx.newPage();
      await p.goto(`${BASE}${page.path}`, { waitUntil: 'domcontentloaded' });

      const orphanButtons = await p.$$eval('button', (buttons) =>
        buttons
          .filter((btn) => {
            const hasOnclick = btn.hasAttribute('onclick');
            const hasType = btn.type === 'submit';
            const hasAriaLabel = btn.hasAttribute('aria-label');
            const isInForm = !!btn.closest('form');
            return !hasOnclick && !hasType && !isInForm && !hasAriaLabel;
          })
          .map((btn) => btn.textContent.trim())
      );

      expect(orphanButtons.length, `Orphan buttons: ${orphanButtons.join(', ')}`).toBeLessThanOrEqual(2);
      await ctx.close();
    });
  }
});

// ─── Anchor link targets exist ───
test.describe('Anchor Link Targets', () => {
  test('Home page anchor links have matching IDs', async ({ browser }) => {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const p = await ctx.newPage();
    await p.goto(`${BASE}/index.html`, { waitUntil: 'domcontentloaded' });

    const anchorLinks = await p.$$eval('a[href^="#"]', (anchors) =>
      anchors.map((a) => a.getAttribute('href')).filter((h) => h && h.length > 1)
    );

    for (const anchor of anchorLinks) {
      const id = anchor.substring(1);
      const target = await p.$('[id="' + id + '"]');
      expect(target, `Missing anchor target: ${anchor}`).not.toBeNull();
    }
    await ctx.close();
  });
});
