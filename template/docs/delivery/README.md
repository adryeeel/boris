# Delivery

[CI](ci.md) describes repository checks; [Operations](operations.md) covers local standalone containers; [Pipeline changes](changes.md) covers verification.

Configuration is authoritative: `.github/workflows/ci.yml`, `apps/web/Dockerfile`, `compose.yml` and `turbo.json`. There is no registry publication, SSH deploy target, reverse-proxy network, deployment secret or automatic production rollout.

Local checks and read-only inspection do not authorize deployment or secret changes. Carry forward authorization already given for a concrete action and target.
