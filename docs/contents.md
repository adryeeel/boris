# Template contents

This foundation gives agents and contributors a working structure while leaving product decisions to the new project. [Setup](setup.md) owns the setup checklist.

## Included

- A minimal Next.js app in `apps/web`, a feature-based structure, neutral styles, theme and motion providers, Lucide icons, and package-owned shadcn configuration in `packages/ui`. The home page displays configured title and description; it is a placeholder to replace.

- pnpm workspaces, Turbo tasks, TypeScript, Oxlint, Oxfmt and Vitest configuration to provide shared checks without inventing a new toolchain. Package manifests and configuration own exact versions and scripts.

- `AGENTS.md`, focused guides, portable role briefs and skills to route work and define ownership. They do not register agents or require delegation.

- GitHub CI, issue/PR templates, Dependabot, commit hooks, a Dockerfile and local Compose configuration for a reviewable development and delivery foundation. CI checks ready PRs, `master` pushes and manual runs; opt-in CD publishes to GHCR and deploys to a configured SSH/Compose server.

- `apps/web/src/const/site.ts` for build-time site preferences, and an MIT license with inherited attribution.

## Left for the new project

There is no setup generator or CLI. Agents and contributors configure the workspace through the [setup checklist](setup.md), keeping decisions visible and reviewable.

## Project decisions to consider

Use this checklist when starting a project. Decide what applies with the user, record unresolved choices, and add only what the project needs. The template supplies placeholders, not product requirements or brand claims.

- [ ] **Identity and discovery:** Decide on brand assets, favicon and Apple icon, social sharing images, indexing, sitemap and robots rules. Only basic site metadata is supplied. The production image includes `apps/web/public`.

- [ ] **UI and presentation:** Choose accessible primitives, icons, typography, product theme and animation as needed. `packages/ui` supplies a neutral shadcn setup, styles, providers and theme-control icons; add primitives when required.

- [ ] **Content and services:** Decide on content authoring, data storage, authentication, analytics, error reporting and other integrations as needed; none is configured by default.

- [ ] **Delivery and repository:** Decide on hosting, domain and TLS, credentials, remote cache, rollback, Git remote, branch protection and project management. CD is disabled until configured; `.github/` files do not create repository settings. Configure external services only when requested and authorized.

- [ ] **Verification:** Add tests for new behavior and verify real user journeys and deployment when they exist. The placeholder has no browser interaction tests.
