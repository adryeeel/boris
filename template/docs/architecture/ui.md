# UI package

`packages/ui` contains a shared Tailwind stylesheet, exported as `@project-template/ui/styles.css`. Its source scan includes the application. It also exports theme and motion providers from `@project-template/ui/providers/theme` and `@project-template/ui/providers/motion`; the web layout installs both.

The theme provider uses system preference by default and applies a class to `html`; `useTheme` exposes theme state. The motion provider enables lazy DOM animations and respects the user's reduced-motion preference. Import `m` and the shared motion hooks from the motion provider export. The providers do not supply a product theme or animation.

Import Lucide icons through `@project-template/ui/icons/symbols`. The named exports support light, dark and system theme controls:

```tsx
import { SunIcon, MoonIcon, MonitorIcon } from '@project-template/ui/icons/symbols';
```

Label icon-only controls with an accessible name, such as `aria-label='Light theme'` on the button. Add named re-exports to the icons module when more symbols are needed.

Add shared components only when needed. Keep their implementations under `src/components/`, and expose deliberate paths through the [package exports](../../packages/ui/package.json). The UI package maps `@project-template/ui/*` to its `src/` directory; keep imports aligned with exported paths so consuming applications can resolve them. Prefer native HTML; introduce a UI dependency only for a real requirement. Shared third-party UI belongs here so upgrades and wrappers have one owner.

The package ships source without a build step and is listed in the app's `transpilePackages`. Declare runtime dependencies in this package, and consumer contracts in peer dependencies where appropriate. It is configured for tests using the [shared browser configuration](../testing/README.md).

Application-specific composition stays in `apps/web/src/features` or `components`. See [Design](../design/README.md) for accessibility and visual decisions.
