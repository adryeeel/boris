# Agent workflows

The [Delivery Loop](../contributing/README.md#delivery-loop) describes the stages of a change from scope to verified delivery. This guide describes how to select roles and coordinate work within those stages when delegation is authorized; the loop also applies when one agent does the work.

`AGENTS.md` routes tasks to documentation. `agents/roles/` contains portable role briefs; `agents/skills/` contains procedures. Neither provisions tools, selects providers nor automatically registers agents. Use the active runtime's capabilities and permission rules.

## Select work, not a roster

Ordinary tasks stay with one agent. Delegate only when authorized and useful responsibilities can be separated. Inherit the active model unless the user selects a supported alternative. Concurrency follows available independent work and runtime limits.

| Assignment                     | Role briefs                                                   |
| ------------------------------ | ------------------------------------------------------------- |
| Scope, contracts and migration | `lead`, `researcher`, `architect`, `critic`                   |
| Implementation                 | `content-engineer`, `integration-engineer`, `design-engineer` |
| Verification                   | `test-engineer`, `qa`, `reviewer`, `accessibility-reviewer`   |
| Design                         | `ux-designer`, `ui-designer`, `design-critic`                 |
| Bounded operational support    | `git-ops`, `perf-runner`, `ci-watcher`                        |

The [role directory](../../agents/roles) is the inventory; read only selected briefs and their applicable skills. `ci-watcher` returns a status snapshot; persistent monitoring belongs to the lead/host.

## Assignments and ownership

A delegation brief includes the outcome/non-goals, role and relevant guides, repository/base revision, evidence, writable paths/resources, dependencies/contracts, acceptance checks and expected deliverable. Label proposed behavior separately from verified observations. Include existing authorization for any external actions, without granting broader authority than the task.

One writer owns each shared file at a time. Coordinate manifests, lockfiles and shared configuration. Parallel writers need disjoint scopes or host-managed checkout isolation. Children do not start another team unless assigned that responsibility. Read-only assignments do not mutate source, index or external services; disposable output must be within assigned resources.

Do not assume inherited conversation or visibility into another checkout. Handoffs identify revision or explicit uncommitted file snapshot, changed paths, decisions, actual checks/results, remaining risks and next dependency. Evidence for an earlier snapshot does not certify later edits.

The lead maintains the demand plan at assignment, handoff, blocker, scope change and integration. Children return evidence and proposed updates; they do not concurrently edit the shared issue. See [Demand planning](../contributing/demand-planning.md).

## Integration and completion

Resolve unknown contracts before dependent implementation. Use bounded experiments with success criteria for factual disagreements. The lead resolves objections with evidence, a change or an explicit tradeoff; no consensus loop is required.

Implement in reviewable slices. Testers own assigned tests, QA checks integrated workflows and reviewers independently inspect the assigned final result. Run checks on the combined change, not only isolated parts. Fix routine findings directly and rerun only checks affected by new changes or open concerns.

Use host mechanisms for secrets, checkout isolation, PR linking and event-driven monitoring when required. Children return current status; they do not retain persistent watches. Report unavailable capabilities precisely and continue useful independent checks.

Role briefs define distinct responsibilities; [instruction maintenance](instructions.md) defines how to evaluate changes to them.

## Completion assessment

Before the final handoff of every task, including successful work, the main agent or lead assesses the completed execution at the authorized stopping point. This also applies when the requested result is a plan, diagnosis or draft PR; it does not require proceeding to merge or deployment. Children return evidence for the lead's assessment rather than starting separate retrospectives.

Compare the original request and accepted scope with the session history, user corrections, failed or misleading checks, review findings and final delivery evidence. Look for incomplete acceptance, avoidable intervention or rework, confusion between the guidance source and delivery base, and stale completion records. Distinguish changed requirements or preferences from execution errors; success does not establish that the process had no gaps.

Give each verified gap a concrete disposition with its evidence and cause: correct outstanding acceptance work, follow an existing rule, address a tooling limitation, or prepare a warranted guidance correction through [instruction maintenance](instructions.md#retain-improvements-from-delivery). Complete authorized corrections and recheck affected evidence before handoff. Keep out-of-scope improvements as proposals and identify unresolved blockers without claiming completion.

Record the assessment and dispositions in the task report or authorized issue/PR; a short statement is enough when no verified gap remains. Reconcile the final delivery record with what actually happened and summarize material follow-up in the handoff. The assessment is required; a new instruction, agent or separate report is not.

## Improvement within delivery

The main agent or lead owns disposition of delivery lessons. Use existing roles when delegation is authorized: a researcher can investigate an uncertain cause, an assigned author uses the docs skill for the correction, and a critic or reviewer independently evaluates the proposal or implemented change. These responsibilities do not require an additional team or permanent agent.

Use [instruction maintenance](instructions.md#retain-improvements-from-delivery) for retention and evaluation. Keep the original task's acceptance and current revision evidence visible while improving its procedure; the improvement follows the same ownership and handoff rules as other work.
