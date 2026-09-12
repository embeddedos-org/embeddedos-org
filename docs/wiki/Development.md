# Development

## Contribution source of truth

[CONTRIBUTING](https://github.com/embeddedos-org/embeddedos-org/blob/master/CONTRIBUTING.md)

Before proposing a change, also review the [README](https://github.com/embeddedos-org/embeddedos-org/blob/master/README.md). Keep changes scoped, add tests appropriate to the affected behavior, and follow the repository's current automation and review requirements.

## Build and dependency inputs found

`package-lock.json`, `package.json`.

## Tests found in the default-branch tree

`tests/acceptance/__init__.py`, `tests/acceptance/test_acceptance.py`, `tests/accessibility.spec.js`, `tests/functional/__init__.py`, `tests/functional/test_functional_e2e.py`, `tests/integration/__init__.py`, `tests/integration/test_integration.py`, `tests/links.spec.js`, `tests/performance.spec.js`, `tests/performance/__init__.py`, `tests/performance/test_performance_benchmarks.py`, `tests/regression/__init__.py`, and 16 more.

## Documented test commands

These commands are reproduced from the inspected root README or contributing guide:

```bash
cmake -B build -DEOS_PRODUCT=robot -DEOS_BUILD_TESTS=ON
```

```bash
cmake --build build && ctest --test-dir build
```

```bash
cmake -B build -DEBLDR_BOARD=stm32f4 && cmake --build build
```

## Verification baseline

This inventory comes from `master` at [`3ac56c840574`](https://github.com/embeddedos-org/embeddedos-org/commit/3ac56c8405745f6287c875659298b822e2392c70) and found 28 test-related paths among 149 files. Re-check the source tree when that commit is no longer current.
