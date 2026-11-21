# Template contents

This foundation gives agents and contributors a working structure while leaving product decisions to the new project. [Setup](setup.md) owns the setup checklist.

## Included

- A minimal Next.js app in `apps/web`, a feature-based structure and shared styles in `packages/ui`, so work has a clear starting point. The home page displays configured title and description; it is a placeholder to replace.
- pnpm workspaces, Turbo tasks, TypeScript, Oxlint, Oxfmt and Vitest configuration to provide shared checks without inventing a new toolchain. Package manifests and configuration own exact versions and scripts.
- `AGENTS.md`, focused guides, portable role briefs and skills to route work and define ownership. They do not register agents or require delegation.
- GitHub CI, issue/PR templates, Dependabot, commit hooks, a Dockerfile and local Compose configuration for a reviewable development and delivery foundation. CI checks ready PRs, `master` pushes and manual runs; no deployment is configured.
- `apps/web/src/const/site.ts` for build-time site preferences, and an MIT license with inherited attribution.

## Left for the new project

- Product requirements, brand, copy, domain, language and audience: these need real project decisions rather than inherited claims. The supplied values are placeholders.
- Product components, icons, providers, animation, analytics, articles and content pipelines: add them when needed rather than inheriting another product's behavior and dependencies.
- Production hosting, domain/TLS, secrets, remote cache, deployment and rollback: these depend on the target environment and explicit authorization. The local container does not publish or deploy.
- A Git remote, branch protection, project board and external integrations: configure these for the new repository when requested. The files in `.github/` do not create those settings.
- A setup generator or CLI: agents and contributors configure the workspace through the [setup checklist](setup.md), keeping the decisions visible and reviewable.

The initial placeholder has no browser interaction tests. Add tests for new behavior and verify real deployment and user journeys when those exist.
