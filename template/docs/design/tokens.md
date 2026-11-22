# Visual values

The initial stylesheet in `packages/ui/src/styles/global.css` imports Tailwind, uses system fonts and supplies neutral light and dark starting tokens. Its `dark:` variant follows the class set by the [theme provider](../architecture/ui.md); replace the tokens when the product has an identity.

When a product identity is accepted, keep shared color, typography and spacing values in that stylesheet using Tailwind's theme mechanisms. Keep one-off layout values local to their component. Add theme styles when required, with checked contrast and consistent browser/server rendering.

Use existing Tailwind utilities before inventing arbitrary values. Let package formatting own class order. Record the reason for material visual constraints in [Brand](brand.md) or a decision when making changes.
