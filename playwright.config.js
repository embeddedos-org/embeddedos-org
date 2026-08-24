// SPDX-License-Identifier: MIT
// Copyright (c) 2026 EoS Project

/**
 * Playwright configuration.
 *
 * There was no config file at all, so Playwright ran with no named projects and
 * five of the six test scripts in package.json failed before executing a single
 * test:
 *
 *   Error: Project(s) "chromium" not found. Available projects: ""
 *
 * test:chromium, test:links, test:seo, test:perf and test:a11y all pass
 * --project=chromium. Defining that project makes them runnable.
 *
 * The suites read `process.env.BASE_URL || 'http://localhost:8080'`, and the
 * `serve` script publishes this directory on 8080, so webServer starts it
 * automatically and reuses an already-running instance during local work.
 *
 * One caveat for links.spec.js: the pages link to sibling project paths such as
 * /eos/ and /eBoot/, which exist on the GitHub Pages deployment but not under a
 * server rooted at this repository alone, so that suite reports them as 404
 * locally. Point BASE_URL at a deployment to check links for real:
 *
 *   BASE_URL=https://embeddedos-org.github.io npm run test:links
 */

const { defineConfig, devices } = require('@playwright/test');

const PORT = Number(process.env.PORT || 8080);
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

module.exports = defineConfig({
  testDir: './tests',
  // Only the *.spec.js suites at the top of tests/ are Playwright tests; the
  // subdirectories hold Python suites driven by tests/run_all_tests.py.
  testMatch: '*.spec.js',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? [['github'], ['line']] : 'line',

  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: `npx http-server . -p ${PORT} -s`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
