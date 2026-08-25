<!-- generated: eos-ai-scaffold -->
# Tasks

Working ledger for `embeddedos-org`. The planner writes entries; each owning role
updates its own row. Roles are in [AGENTS.md](./AGENTS.md), the workflow in
[ORCHESTRATION.md](./ORCHESTRATION.md), the gate in [VERIFY.md](./VERIFY.md).

Status is one of: `todo`, `in-progress`, `blocked`, `review`, `done`.

## Active

| ID | Task | Owner | Mode | Status | Depends on |
|----|------|-------|------|--------|------------|
| —  | No active tasks. | — | — | — | — |

## Completed

| ID | Task | Owner | Verified by | Evidence |
|----|------|-------|-------------|----------|
| T-001 | Stop the link test failing on links that are correct in production | testing | reviewer | `tests/links.spec.js` treated `/eBoot/`, `/eos/` and 11 more as internal paths and required HTTP 200 from `http-server .`. Those are sibling repositories: each publishes its own GitHub Pages site, so `https://embeddedos-org.github.io/eBoot/` is the correct production URL, and a local server serving only this repo can never resolve it. The 12 "broken links" were a false failure. Those paths are now skipped only when the origin is localhost and still checked when `BASE_URL` points at the deployed site; every other internal link is verified in both modes. |
| T-002 | Cut referenced image weight from 25 MB to 1.9 MB | performance | reviewer | Six images exceeded the suite's 1 MB-per-resource budget. The waste was resolution, not encoding: `icon-eboot.png` was 1920×1920 (2875 KB) displayed at 64×64, and `hero-main.png` was 2560×1440 (4832 KB) displayed at 600×338. `logo-icon-dark.png` (1920×1920, 2492 KB, displayed 36×36) was injected by `js/site-chrome.js` and so missed by an HTML-only scan. Each was resized to 2× its display size and quantised: hero 4832→422 KB, banners 3708/3418/2868→499/574/450 KB, the four product icons 2875/2827/2637/2417→4/5/5/7 KB, logo 2492→3 KB. Originals are unmodified in the repo's `*_original.png` files. Suite: 124 passed, 0 failed (was 2 failed). |

---

## Task template

```markdown
### T-000 — <short title>

Owner: <role>
Mode: <see MODES.md>
Status: todo
Depends on: <task ids, or none>

Goal
: <one sentence: what is true afterwards that is not true now>

Acceptance criteria
: - <observable, checkable statement>
  - <observable, checkable statement>

Files in scope
: <paths the owner is expected to touch>

Out of scope
: <what this task deliberately does not change>

Risks
: <what could break, and what would reveal it>

Verification
: | Check | Command | Result |
  |-------|---------|--------|
  | <name> | `<command>` | `NOT RUN` |
```

## Verification commands for this repository

These commands were derived from the manifests at the repository root. Confirm one works before relying on it; a listed script may still be a stub.

| Check | Command | Default state |
|-------|---------|---------------|
| Lint | `npm run lint:html` | `NOT RUN` |
| Unit tests | `npm run test` | `NOT RUN` |
| Accessibility | `npm run test:a11y` | `NOT RUN` |
| Performance | `npm run test:perf` | `NOT RUN` |
| Security | `npm run audit` | `NOT RUN` |

## Rules

- One task per unit of work that can be verified on its own.
- Acceptance criteria are written before work starts and are not edited to match
  what was built. If they were wrong, say so and rewrite them explicitly.
- A task reaches `done` only when the definition of done in
  [ORCHESTRATION.md](./ORCHESTRATION.md) is met and the verification commands
  were actually run.
- `blocked` requires a note naming what it is blocked on and who can unblock it.
