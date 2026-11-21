# UI package

`packages/ui` contains a shared Tailwind stylesheet, exported as `@project-template/ui/styles.css`. Its source scan includes the application.

Add shared components only when needed. Keep their implementations under `src/components/`, and expose deliberate paths through the [package exports](../../packages/ui/package.json). Prefer native HTML; introduce a UI dependency only for a real requirement. Shared third-party UI belongs here so upgrades and wrappers have one owner.

The package ships source without a build step and is listed in the app's `transpilePackages`. Declare runtime dependencies in this package, and consumer contracts in peer dependencies where appropriate. Add test scripts and a shared Vitest config when behavior needs tests.

Application-specific composition stays in `apps/web/src/features` or `components`. See [Design](../design/README.md) for accessibility and visual decisions.
