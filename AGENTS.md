# Repository guidance

## Purpose

This repository is the `embeddedos-org` organization landing index and a static
copy of the EmbeddedOS developer portal. Keep changes focused on navigation,
community documentation, shared site chrome, and repository automation. Product
code belongs in the product repository identified in `CONTRIBUTING.md`.

## Source layout

- `README.md` is the GitHub landing page and canonical repository link tree.
- Root HTML files, `docs/`, `eApps/`, and `stacks/` make up the static site.
- `js/site-chrome.js` owns the shared navigation and footer rendered across the
  site.
- `style.css` owns shared presentation.
- `docs/wiki/` mirrors the six published GitHub Wiki pages for versioned review.
- `.github/` contains issue, pull request, dependency, and workflow automation.
- `tests/*.spec.js` are Playwright browser checks; `tests/*/test_*.py` are Python
  checks run by `run_all_tests.py`.

## Change rules

- Preserve the repository's role as a landing index; route product changes to
  the owning product repository.
- Update `js/site-chrome.js` when a navigation item must appear consistently
  across static pages instead of duplicating markup in individual HTML files.
- Keep root-relative site URLs compatible with the local `http-server` and the
  deployed GitHub Pages origin.
- Use direct GitHub URLs for Wiki, Discussions, Issues, Projects, and repository
  files. Do not create or link to a `/agents` web route; agent guidance lives in
  `AGENTS.md`.
- Treat `docs/wiki/` as a published snapshot. Update all six pages together from
  the Wiki source and verify the page set and content hashes.
- Human-authored pull requests must use a GitHub closing keyword for a real open
  issue in this repository, for example `Fixes #123`.
- Never include credentials, private vulnerability details, or production data.
  Follow `SECURITY.md` for vulnerability reports.

## Validation

Install JavaScript dependencies with `npm ci`, then run checks appropriate to
what changed:

```bash
python -m unittest tests.governance.test_community_governance
python run_all_tests.py
npm run test:chromium
npm run test:links
```

For documentation and workflow changes, also validate YAML parsing, Markdown
style, relative links, and the final Git diff. When testing links locally, keep
in mind that `playwright.config.js` documents known deployment-only paths; use
`BASE_URL=https://embeddedos-org.github.io npm run test:links` for the deployed
site when necessary.

Before requesting review, confirm the feature branch is pushed normally, the
pull request remains open and draft, its body contains a same-repository closing
reference, the remote head SHA matches the local commit, the worktree is clean,
and `master` has not moved as part of the change.
