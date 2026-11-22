# Template contents

This foundation gives agents and contributors a working structure while leaving product decisions to the new project. [Setup](setup.md) owns the setup checklist.

## Included

- A minimal Next.js app in `apps/web`, a feature-based structure, shared styles and theme and motion providers in `packages/ui`. The home page displays configured title and description; it is a placeholder to replace.

- pnpm workspaces, Turbo tasks, TypeScript, Oxlint, Oxfmt and Vitest configuration to provide shared checks without inventing a new toolchain. Package manifests and configuration own exact versions and scripts.

- `AGENTS.md`, focused guides, portable role briefs and skills to route work and define ownership. They do not register agents or require delegation.

- GitHub CI, issue/PR templates, Dependabot, commit hooks, a Dockerfile and local Compose configuration for a reviewable development and delivery foundation. CI checks ready PRs, `master` pushes and manual runs; opt-in CD publishes to GHCR and deploys to a configured SSH/Compose server.

- `apps/web/src/const/site.ts` for build-time site preferences, and an MIT license with inherited attribution.

## Left for the new project

There is no setup generator or CLI. Agents and contributors configure the workspace through the [setup checklist](setup.md), keeping decisions visible and reviewable.

## Project decisions to consider

Use this checklist when starting a project. Decide what applies with the user, record unresolved choices, and add only what the project needs. The template supplies placeholders, not product requirements or brand claims.

- [ ] **Identity and discovery:** Decide on brand assets, favicon and Apple icon, social sharing images, indexing, sitemap and robots rules. Only basic site metadata is supplied. If adding a `public/` directory, update the production image as described in [operations](../template/docs/delivery/operations.md).

- [ ] **UI and presentation:** Decide whether to add a component library, accessible primitives, icons, typography, theme styles or animation. `packages/ui` supplies styles and providers, not a component library or product theme.

- [ ] **Content and services:** Decide on content authoring, data storage, authentication, analytics, error reporting and other integrations as needed; none is configured by default.

- [ ] **Delivery and repository:** Decide on hosting, domain and TLS, credentials, remote cache, rollback, Git remote, branch protection and project management. CD is disabled until configured; `.github/` files do not create repository settings. Configure external services only when requested and authorized.

- [ ] **Verification:** Add tests for new behavior and verify real user journeys and deployment when they exist. The supplied browser test covers theme selection; the placeholder app has no interaction tests.
