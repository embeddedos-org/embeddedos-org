# 🤝 Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](https://github.com/embeddedos-org/embeddedos-org/pulls)
[![Conventional Commits](https://img.shields.io/badge/Commits-Conventional-orange?style=for-the-badge)](https://www.conventionalcommits.org/)
[![Code of Conduct](https://img.shields.io/badge/Contributor_Covenant-2.1-purple?style=for-the-badge)](CODE_OF_CONDUCT.md)

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
| Add or change a stack profile | [`embeddedos-org/eFab`](https://github.com/embeddedos-org/eFab) |
| Update **this** landing page | this repo (PR welcome!) |

## Per-repo contribution guides

Each downstream product repository ships its own `CONTRIBUTING.md` covering
coding standards, commit-message format, branching strategy, review process,
CLA, security, and signing. Open the contribution guide of the repo you are
actually changing — there is no separate org-wide canonical guide.

For org-wide expectations:

- **Code of Conduct** — [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) (Contributor Covenant 2.1).
- **Security** — [`SECURITY.md`](SECURITY.md).
- **Commit messages** — [Conventional Commits](https://www.conventionalcommits.org/).

## Quick rules for **this** repo

- Run `npx markdownlint *.md` before pushing.
- Keep links live — `npx lychee --offline *.md` should pass.
- Use [Conventional Commits](https://www.conventionalcommits.org/) (`docs:`, `chore:`,
  `ci:`, …).
- Be kind: every contributor is bound by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Reporting security issues

Please **do not** open a public issue. Follow [`SECURITY.md`](SECURITY.md) instead.
