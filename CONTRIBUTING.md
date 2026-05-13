# 🤝 Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](https://github.com/embeddedos-org/embeddedos-org/pulls)
[![Conventional Commits](https://img.shields.io/badge/Commits-Conventional-orange?style=for-the-badge)](https://www.conventionalcommits.org/)
[![Code of Conduct](https://img.shields.io/badge/Contributor_Covenant-2.1-purple?style=for-the-badge)](CODE_OF_CONDUCT.md)
[![Canonical Guide](https://img.shields.io/badge/Full_Guide-.github%2FCONTRIBUTING-58a6ff?style=for-the-badge)](https://github.com/embeddedos-org/.github/blob/main/CONTRIBUTING.md)

Thanks for considering a contribution to the EmbeddedOS ecosystem! 🎉

## Where to contribute

This repo (`embeddedos-org/embeddedos-org`) is the **org-landing index**. It contains
no product code — only navigation, links, and templates. Most code contributions belong
in one of the **13 product repos** listed in [`README.md`](README.md).

| You want to … | Open the PR/issue here |
|---------------|------------------------|
| Fix a bug in the OS kernel | [`embeddedos-org/eos`](https://github.com/embeddedos-org/eos) |
| Improve a book / docs page | [`embeddedos-org/embeddedos-org.github.io`](https://github.com/embeddedos-org/embeddedos-org.github.io) |
| Add an app to the marketplace | [`embeddedos-org/eApps`](https://github.com/embeddedos-org/eApps) |
| Update org-wide policies | [`embeddedos-org/.github`](https://github.com/embeddedos-org/.github) |
| Update **this** landing page | this repo (PR welcome!) |

## Canonical contribution guide

The full 700-line guide — coding standards, commit-message format, branching strategy,
review process, CLA, security, signing — lives in **one place** for the whole org:

> **➡️ <https://github.com/embeddedos-org/.github/blob/main/CONTRIBUTING.md>**

Please read it before opening any PR.

## Quick rules for **this** repo

- Run `npx markdownlint *.md` before pushing.
- Keep links live — `npx lychee --offline *.md` should pass.
- Use [Conventional Commits](https://www.conventionalcommits.org/) (`docs:`, `chore:`,
  `ci:`, …).
- Be kind: every contributor is bound by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Reporting security issues

Please **do not** open a public issue. Follow [`SECURITY.md`](SECURITY.md) instead.
