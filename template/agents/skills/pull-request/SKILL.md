---
name: pull-request
description: Push, open or update a pull request, prepare it for review, and complete unblocked ready and merge actions within the user-authorized scope. Covers draft conventions, independent review, host linking and check monitoring.
---

# Pull request

Read [Pull requests](../../../docs/contributing/pull-requests.md) and the [template](../../../.github/pull_request_template.md); use [commit](../commit/SKILL.md) for local history. Inputs are branch/base, intended change, issue and authorized actions.

## Prepare and submit

Inspect the full diff, including intended untracked files. Reference the demand and slice, and follow its [completion rules](../../../docs/contributing/demand-planning.md); an intermediate PR must not close the demand. Obtain relevant validation and independent review; resolve material findings or disclose gaps. Write the final problem, resulting behavior, tradeoffs and useful evidence in the template, using a structured body or `--body-file`.

Push the feature branch and open a draft into the correct base. Apply the guide's title, label, assignee and issue-link conventions. Perform host-required PR linking immediately after create/takeover/push actions. Report failures without claiming publication or linking succeeded.

## Update and finish

Use ordinary commits for fixes. Recheck changed findings against the new head; keep title/body aligned with final scope. Rewrite only in the documented draft exceptions and within authorization.

The user has given standing authorization for unblocked ready and merge actions within a requested delivery task. Do not ask for another approval after local validation and independent review permit readiness, or after all expected checks pass on the current head and no material findings or conflicts remain. Respect explicit stopping points such as a draft PR, review-only or local-only work, and any user hold. Resolve routine blockers within scope and continue when cleared; report blockers that require user input or unavailable access. This authorization does not extend to unrelated work, workflow dispatch, manual deployment or rollback.

Drafts skip CI; mark ready after local validation and independent review so the expected checks run. Before merging, verify those checks and review on the current head, then validate the squash subject and use a blank merge body.

Follow host monitoring/lifecycle rules when waiting is required; children return status rather than watching. Return PR URL, head, validation/review state and exact pending action. Do not publish unrelated findings or deploy as a side effect.
