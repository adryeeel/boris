# Testing

Choose checks by what can break.

| Boundary                          | Evidence                                                       |
| --------------------------------- | -------------------------------------------------------------- |
| Pure application logic            | Vitest with the shared base config                             |
| React interaction and layout      | Vitest browser config, Playwright Chromium and real components |
| Framework resolution and metadata | Production build and targeted runtime checks                   |
| Container packaging               | Docker smoke check                                             |
| Documentation                     | Formatting, local links and source accuracy                    |

`pnpm turbo run test:check` runs package tests. `apps/web/vitest.config.ts` is ready for browser suites and currently permits no test files. Browser dependencies are installed in the app; `packages/ui` does not carry unused test dependencies. Add a UI test config and dependencies when its first component needs them.

```bash
pnpm turbo run test:check
pnpm --filter web exec playwright install chromium
pnpm --filter web test:watch
```

Run targeted tests during iteration, then checks appropriate to the combined change. Inspect selected Turbo tasks; a cached pass is not a new execution. Tests should protect behavior and errors, without duplicating implementation or testing a trivial wrapper.

Read [Structure](structure.md), [Assertions](assertions.md) and [Browser pitfalls](browser.md) when authoring suites.
