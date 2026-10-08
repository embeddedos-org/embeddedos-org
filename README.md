<!-- markdownlint-disable-file MD033 MD041 -->
<!-- This profile README deliberately uses centered-div/badge HTML and opens
     with the banner, not an H1 (MD033/MD041 disabled above). -->
<div align="center">

<img
  src="https://raw.githubusercontent.com/embeddedos-org/eos/master/docs/book/cover.png"
  width="180" alt="EmbeddedOS">

# 🚀 embeddedos-org

<!-- begin: org-uniform badges (audit-2026-05) -->
[![CI](https://github.com/embeddedos-org/embeddedos-org/actions/workflows/ci.yml/badge.svg)](https://github.com/embeddedos-org/embeddedos-org/actions/workflows/ci.yml)
[![CodeQL](https://github.com/embeddedos-org/embeddedos-org/actions/workflows/codeql.yml/badge.svg)](https://github.com/embeddedos-org/embeddedos-org/actions/workflows/codeql.yml)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/embeddedos-org/embeddedos-org/badge)](https://securityscorecards.dev/viewer/?uri=github.com/embeddedos-org/embeddedos-org)
[![Release](https://img.shields.io/github/v/tag/embeddedos-org/embeddedos-org?label=release&sort=semver)](https://github.com/embeddedos-org/embeddedos-org/releases)
[![License](https://img.shields.io/github/license/embeddedos-org/embeddedos-org)](LICENSE)
<!-- end: org-uniform badges (audit-2026-05) -->

## The Org Landing Repo — Your Index into the EmbeddedOS Ecosystem

*A single entry point that resolves
[`github.com/embeddedos-org/embeddedos-org`](https://github.com/embeddedos-org/embeddedos-org)
into a fully linked tour of every product, book, and live site under the
EmbeddedOS umbrella.*

<br>

[![Website](https://img.shields.io/badge/🌐_Website-embeddedos--org.github.io-58a6ff?style=for-the-badge)](https://embeddedos-org.github.io)
[![Org Profile](https://img.shields.io/badge/🏢_Org_Profile-View-bc8cff?style=for-the-badge)](https://github.com/embeddedos-org)
[![Books](https://img.shields.io/badge/📚_Books-14_titles-3fb950?style=for-the-badge)](https://embeddedos-org.github.io/books.html)
[![App Store](https://img.shields.io/badge/🏪_App_Store-Browse-f0883e?style=for-the-badge)](https://embeddedos-org.github.io/eApps/)
[![Docs](https://img.shields.io/badge/📖_Docs-13_modules-79c0ff?style=for-the-badge)](https://embeddedos-org.github.io/docs/)
[![Stacks](https://img.shields.io/badge/🏭_Stacks-eFab-e3b341?style=for-the-badge)](https://embeddedos-org.github.io/stacks/)
[![Get Started](https://img.shields.io/badge/🛠_Get_Started-Quickstart-f778ba?style=for-the-badge)](https://embeddedos-org.github.io/getting-started.html)

<br>

[![License](https://img.shields.io/badge/license-MIT-yellow?style=flat-square&logo=opensourceinitiative)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)
[![Code of Conduct](https://img.shields.io/badge/Contributor_Covenant-2.1-purple?style=flat-square)](CODE_OF_CONDUCT.md)
[![Conventional Commits](https://img.shields.io/badge/Commits-Conventional-orange?style=flat-square)](https://www.conventionalcommits.org/)

**83 Board Ports** · **13 Products** · **41 Categories** · **500K+ Lines** ·
**65+ Diagrams** · **180+ Citations**

</div>

## 🗞️ This week (2026-10-08)

- **Zephyr Developer Summit, Day 2 (Prague):** functional safety and CRA
  readiness took center stage — the assessor's view of evidence formats
  (hazard logs need the "why this is safe" column) and the 24h/72h/14d
  reporting duties for embedded products.
- **The merge wave:** roughly 45 audit findings landed across the org in
  two waves — fix PRs merged on eBoot, ebuild, eAI, eNI, EoSim, eDB,
  eApps, eBrowser, eos-health, www, and .github.
- **Four new boards:** DEBIX M8391-01 (Genio 720 NPU), Arduino VENTUNO Q
  (dual-brain), NXP FRDM-IMXRT1186 (TSN/EtherCAT), Upbeat Bluemag Pi
  (RISC-V flight controller) — all with EoSim platform definitions.
- **ESP-IDF v6.1:** ESP32-P4 Wi-Fi is back — but ECDSA Secure Boot V2 is
  disabled on H2/C5/P4 for a security vulnerability. Watch item.
- **MCP security:** Langflow CVE-2026-105697 (CVSS 9.9) and the
  mcp-server-fetch SSRF turn protocol warnings into patch notes; the
  org's hostile-protocol posture is now documented across eSec, eIPC,
  eosllm, and eVera.
- **Watch: Apple Oct-13 home-hub event** (5 days) and CEATEC Oct 13–16
  (Bluemag Pi demo).

![About Banner](https://img.shields.io/badge/━━%20About%20This%20Repo%20━━-58a6ff?style=flat-square)

## 📖 About this repo

`embeddedos-org/embeddedos-org` is the **organisation's namesake landing
repo**. GitHub
serves it whenever someone visits
[`github.com/embeddedos-org/embeddedos-org`](https://github.com/embeddedos-org/embeddedos-org).
The actual org-profile page at [`github.com/embeddedos-org`](https://github.com/embeddedos-org)
is rendered from the separate [`.github`](https://github.com/embeddedos-org/.github)
repo's
`profile/README.md` — GitHub always prefers that repo's profile page over this
one when both
exist. This repo instead serves as a secondary, more detailed index and link tree.

Its only purpose is to **route visitors quickly** to the right downstream artefact:

- 🌐 the **live website** (developer portal)
- 📚 the **14 reference books** (free PDF downloads)
- 🏪 the **app store** (60+ apps across 5 form factors)
- 📖 the **documentation hub** (13 product modules)
- 🏭 the **stacks hub** (curated, version-pinned bundles via `eFab`)
- 🧑‍💻 the **product source repos** (26 repos — 13 canonical products plus
  supporting, meta, and domain repos, full index below)

![Products Banner](https://img.shields.io/badge/━━%20Product%20Catalogue%20━━-bc8cff?style=flat-square)

## 📦 Product Catalogue (13 repos)

### 🔵 Core Platform

| | Repo | Description |
| --- | --- | --- |
| ⚙️ | [**eos**](https://github.com/embeddedos-org/eos) | EoS Embedded Operating system |
| 🔐 | [**eBoot**](https://github.com/embeddedos-org/eBoot) | Project: Bootloader for Any Hardware |
| 📡 | [**eIPC**](https://github.com/embeddedos-org/eIPC) | NIA ==>> Secure IPC ==>> AIL |
| 🛠 | [**ebuild**](https://github.com/embeddedos-org/ebuild) | Next-gen embedded OS build tool |

### 🟣 AI & Neural

| | Repo | Description |
| --- | --- | --- |
| 🧠 | [**eAI**](https://github.com/embeddedos-org/eAI) | AI Layer (AIL → eBot) can be integrated into EoS |
| 🧬 | [**eNI**](https://github.com/embeddedos-org/eNI) | Neural Interface Adapter |

### 🟢 Apps & Services

| | Repo | Description |
| --- | --- | --- |
| 📱 | [**eApps**](https://github.com/embeddedos-org/eApps) | EoS Unified Marketplace & App Store |
| 🗄 | [**eDB**](https://github.com/embeddedos-org/eDB) | Lightweight embedded database manager — SQL editor, AI query assistance, multi-model |
| 🌐 | [**eBrowser**](https://github.com/embeddedos-org/eBrowser) | Privacy-first web browser with custom rendering engine |
| 📄 | [**eOffice**](https://github.com/embeddedos-org/eOffice) | Full office suite — eDocs, eSheets, eSlides, ePlanner, eNotes, eMail, eDrive, eConnect, eDB, eForms, eSway |

### 🟠 Tools & Hardware

| | Repo | Description |
| --- | --- | --- |
| 🔬 | [**EoSim**](https://github.com/embeddedos-org/EoSim) | Hardware and platform simulator — 63+ boards, QEMU, GUI renderers, MCP server for AI agents |
| 🎨 | [**EoStudio**](https://github.com/embeddedos-org/EoStudio) | Visual design IDE — UI, 3D, CAD, games, hardware, code generation |
| 🔩 | [**eCAD-Hardware-Products**](https://github.com/embeddedos-org/eCAD-Hardware-Products) | Hardware designs + EE docs + Board datasheets of multiple products |
| 💾 | [**eFirmware**](https://github.com/embeddedos-org/eFirmware) | Board firmware images and flashing tooling |

### 🟡 Security, Networking & Dataflow

| | Repo | Description |
| --- | --- | --- |
| 🔒 | [**eSec**](https://github.com/embeddedos-org/eSec) | Security framework for EmbeddedOS — crypto abstraction, key management, attestation |
| 🌐 | [**eNet**](https://github.com/embeddedos-org/eNet) | Networking subsystem — TCP/IP, UDP, DHCP, DNS, MQTT |
| 🌊 | [**eFlow**](https://github.com/embeddedos-org/eFlow) | Visual programming and dataflow authoring for EmbeddedOS |

### 🩺 Domain Solutions

| | Repo | Description |
| --- | --- | --- |
| ❤️‍🩹 | [**eos-health**](https://github.com/embeddedos-org/eos-health) | Unified mono-repo for health devices |
| ✈️ | [**eos-aero**](https://github.com/embeddedos-org/eos-aero) | Aerospace profile — functional-safety oriented builds |

### 🤖 AI Agents & Language Models

| | Repo | Description |
| --- | --- | --- |
| 🧠 | [**eosllm**](https://github.com/embeddedos-org/eosllm) | EoS LLM — on-device language model runtime |

![Full Index Banner](https://img.shields.io/badge/━━%20Full%20Repo%20Index%20━━-e3b341?style=flat-square)

## 🗂 Full Repo Index (26)

Beyond the 13 canonical products, the org hosts supporting, meta, and
in-progress repos. Current as of 2026-10-04:

| Repo | Visibility | Role |
| --- | --- | --- |
| [eos](https://github.com/embeddedos-org/eos) | public | The EoS operating system |
| [eBoot](https://github.com/embeddedos-org/eBoot) | public | Bootloader for any hardware |
| [ebuild](https://github.com/embeddedos-org/ebuild) | public | Build tool |
| [eAI](https://github.com/embeddedos-org/eAI) | public | AI layer |
| [eosllm](https://github.com/embeddedos-org/eosllm) | public | On-device LLM runtime |
| [eNI](https://github.com/embeddedos-org/eNI) | public | Neural Interface Adapter |
| [eIPC](https://github.com/embeddedos-org/eIPC) | public | Secure IPC |
| [EoSim](https://github.com/embeddedos-org/EoSim) | public | Hardware/platform simulator + MCP server |
| [EoStudio](https://github.com/embeddedos-org/EoStudio) | public | Visual design IDE |
| [eSec](https://github.com/embeddedos-org/eSec) | public | Security framework |
| [eNet](https://github.com/embeddedos-org/eNet) | public | Networking subsystem |
| [eFlow](https://github.com/embeddedos-org/eFlow) | public | Visual dataflow authoring |
| [eDB](https://github.com/embeddedos-org/eDB) | public | Embedded database manager |
| [eApps](https://github.com/embeddedos-org/eApps) | public | App marketplace & store |
| [eBrowser](https://github.com/embeddedos-org/eBrowser) | public | Privacy-first browser |
| [eOffice](https://github.com/embeddedos-org/eOffice) | public | Office suite |
| [eCAD-Hardware-Products](https://github.com/embeddedos-org/eCAD-Hardware-Products) | public | Hardware designs & board datasheets |
| [eFirmware](https://github.com/embeddedos-org/eFirmware) | public | Board firmware |
| [eos-health](https://github.com/embeddedos-org/eos-health) | public | Health devices mono-repo |
| [eos-aero](https://github.com/embeddedos-org/eos-aero) | public | Aerospace profile |
| [embeddedos-stack](https://github.com/embeddedos-org/embeddedos-stack) | private | Unified build/test/release manifest |
| [eVera](https://github.com/embeddedos-org/eVera) | private | Autonomous agent for human life |
| [www.embeddedos.org](https://github.com/embeddedos-org/www.embeddedos.org) | public | Developer portal (live site) |
| [embeddedos-org.github.io](https://github.com/embeddedos-org/embeddedos-org.github.io) | public | Legacy static site (parked) |
| [.github](https://github.com/embeddedos-org/.github) | public | Org-wide CI, standards, reusable workflows |
| [embeddedos-org](https://github.com/embeddedos-org/embeddedos-org) | public | This repo — org landing index |

![Security Banner](https://img.shields.io/badge/━━%20Security%20━━-f85149?style=flat-square)

## 🛡 Security & EU CRA readiness

Security reports go through [`SECURITY.md`](SECURITY.md) — coordinated
vulnerability disclosure, **not** public issues. Org-wide policy lives in
[eSec](https://github.com/embeddedos-org/eSec) (`SECURITY.md`,
`.well-known/security.txt`, `docs/cvd-intake.md`).

For the EU Cyber Resilience Act, the org ships reusable CI building blocks in
[`.github`](https://github.com/embeddedos-org/.github):

- `reusable-sbom.yml` — CycloneDX + SPDX SBOM generation on every build
- `reusable-kev-scan.yml` — fail the build when a dependency matches a
  CISA Known Exploited Vulnerability

Repos adopt them one by one; SBOMs are retained as build artifacts.

![Meta Banner](https://img.shields.io/badge/━━%20Meta--Repos%20━━-79c0ff?style=flat-square)

## 🧰 Meta-Repos (not part of the canonical 13)

These repositories compose, route to, or describe the canonical roster. They are
**explicitly excluded** from the 13-product / 14-book canon — adding one does not
bump the canon counts.

| | Repo | Role |
| --- | --- | --- |
| 🚀 | [**embeddedos-org**](https://github.com/embeddedos-org/embeddedos-org) | This repo — org landing index. |
| 🌐 | [**embeddedos-org.github.io**](https://github.com/embeddedos-org/embeddedos-org.github.io) | Developer portal (the live site at <https://embeddedos-org.github.io>). |
| 🏭 | [**eFab**](https://github.com/embeddedos-org/eFab) | Stack fabricator — manifest-only meta-repo that pins versions, fetches sources, and runs end-to-end smoke tests for opinionated bundles of canonical products. v0.1.0 ships the `eai-edge` profile (ENI + EIPC + eAI). |

![Quickstart Banner](https://img.shields.io/badge/━━%20Quick%20Start%20━━-f0883e?style=flat-square)

## ⚡ Quick Start

```bash
# 🔧 Build the OS
git clone https://github.com/embeddedos-org/eos.git && cd eos
cmake -B build -DEOS_PRODUCT=robot -DEOS_BUILD_TESTS=ON
cmake --build build && ctest --test-dir build

# 🔐 Build the bootloader
git clone https://github.com/embeddedos-org/eBoot.git && cd eBoot
cmake -B build -DEBLDR_BOARD=stm32f4 && cmake --build build

# 🔬 Run the simulator
pip install eosim && eosim run stm32f4 --timeout 30

# 🏪 Browse the App Store
open https://embeddedos-org.github.io/eApps/
```

![Link Tree Banner](https://img.shields.io/badge/━━%20Link%20Tree%20━━-79c0ff?style=flat-square)

## 🌳 Link Tree

| Property | URL |
| --- | --- |
| 🌐 Website | <https://embeddedos-org.github.io> |
| 📚 Book Library | <https://embeddedos-org.github.io/books.html> |
| 🏪 App Store | <https://embeddedos-org.github.io/eApps/> |
| 📖 Documentation | <https://embeddedos-org.github.io/docs/> |
| 🏭 Stacks | <https://embeddedos-org.github.io/stacks/> |
| 🛠 Get Started | <https://embeddedos-org.github.io/getting-started.html> |
| 🔬 Hardware Lab | <https://embeddedos-org.github.io/hardware-lab.html> |
| 🧒 Kids Mode | <https://embeddedos-org.github.io/kids.html> |
| 💬 Discussions | <https://github.com/embeddedos-org/embeddedos-org/discussions> |
| 📚 Wiki | <https://github.com/embeddedos-org/embeddedos-org/wiki> |
| 🐛 Issues | <https://github.com/embeddedos-org/embeddedos-org/issues> |
| 📋 Projects | <https://github.com/orgs/embeddedos-org/projects> |
| 🤖 Contributor guidance | [`AGENTS.md`](https://github.com/embeddedos-org/embeddedos-org/blob/master/AGENTS.md) |
| 🏢 Org Profile | <https://github.com/embeddedos-org> |
| 🏭 eFab (manifest meta-repo) | <https://github.com/embeddedos-org/eFab> |

![Contribute Banner](https://img.shields.io/badge/━━%20Contributing%20━━-f778ba?style=flat-square)

## 🤝 Contributing

This repo is a **landing index**, so most code contributions belong in the downstream
product repos listed above. For changes here:

1. Read [`CONTRIBUTING.md`](CONTRIBUTING.md) for the short stub specific to
   this repo, and the per-product `CONTRIBUTING.md` inside each downstream
   product repository for the
   detailed coding standards / commit conventions / review process applicable there.
2. Open an issue or PR using the templates in [`.github/`](.github/).
3. Follow our [Code of Conduct](CODE_OF_CONDUCT.md) (Contributor Covenant 2.1).
4. Report security concerns via [`SECURITY.md`](SECURITY.md), **not** public issues.

![Footer Banner](https://img.shields.io/badge/━━%20Made%20with%20❤️%20━━-f85149?style=flat-square)

<div align="center">

**MIT License** · Made with ❤️ by
[Srikanth Patchava](https://github.com/embeddedos-org) & Contributors

[🌐 Website](https://embeddedos-org.github.io) ·
[📚 Books](https://embeddedos-org.github.io/books.html) ·
[🏪 Apps](https://embeddedos-org.github.io/eApps/) ·
[🏭 Stacks](https://embeddedos-org.github.io/stacks/) ·
[⭐ Star EoS](https://github.com/embeddedos-org/eos)

</div>

<!-- begin: release-model (audit-2026-05) -->
## Release model

`master` is the line of development; every PR lands here. `release` is a
rolling pointer to the latest released `vX.Y.Z` tag, updated automatically
by [`.github/workflows/sync-release-branch.yml`](.github/workflows/sync-release-branch.yml).
Tags are immutable.

See [embeddedos-org/.github/STANDARDS.md](https://github.com/embeddedos-org/.github/blob/master/STANDARDS.md)
for the org-wide tag scheme, release model, and the compliance frameworks
every product targets.
<!-- end: release-model (audit-2026-05) -->
