<!-- generated: eos-ai-scaffold -->
# Modes

A mode is the current objective. Announce the mode you are in, and leave it only
when its exit gate is met. Modes may repeat; the sequence is not fixed.

| Mode           | Objective               | Leave when                     |
| -------------- | ----------------------- | ------------------------------ |
| Discovery      | Name problem + code.    | Restated; unknowns named.      |
| Planning       | Draft the strategy.     | TASKS.md: criteria + commands. |
| Research       | Settle open questions.  | Answered or unanswerable.      |
| Architecture   | Check design vs system. | Choices written down.          |
| Implementation | Write the code.         | Criteria met, no placeholders. |
| Verification   | Check against evidence. | Every check has a verdict.     |
| Optimization   | Raise quality.          | Behaviour unchanged, measured. |
| Documentation  | Reconcile record+code.  | Docs match; examples run.      |
| Release        | Prepare deployment.     | Notes, steps, rollback ready.  |
| Maintenance    | Fix defects, cut debt.  | Regression test added.         |

## Forbidden in each mode

| Mode           | Do not                                          |
| -------------- | ----------------------------------------------- |
| Discovery      | Write code. Solve before the problem is stated. |
| Planning       | Write code. Set an uncheckable criterion.       |
| Research       | Present a guess as a finding — mark `Inferred`. |
| Architecture   | Redesign parts the task does not touch.         |
| Implementation | Widen scope. Note unrelated defects instead.    |
| Verification   | Change code to pass a check.                    |
| Optimization   | Change behaviour. Optimise without a baseline.  |
| Documentation  | Document intent as though it shipped.           |
| Release        | Ship over `FAIL`/`NOT RUN`. Skip rollback.      |
| Maintenance    | Fix without the regression test.                |

## Loops

The sequence is not linear. Verification failing sends you back to
Implementation; Implementation discovering a bad assumption sends you back to
Architecture or Discovery. That is the system working, not a setback.

Going backwards is cheap. Going forwards on a broken assumption is not.

## Breaking a gate

Leaving a mode with its gate unmet is allowed exactly once per task, and only
when you state:

- Which gate is unmet.
- Why proceeding is safer or cheaper than finishing it.
- What is now unverified as a result.

Record it in [TASKS.md](./TASKS.md). Twice on the same gate means the plan is
wrong — stop and say so rather than continuing to push past it.

## Reporting the mode

Every status report names the current mode. A report that cannot name its mode
usually means the work has no objective, which is worth stopping to fix.
