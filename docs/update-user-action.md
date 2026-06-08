# Update User Action

## Overview

`Update User` now applies additional guardrails when an action attempts to change a user's role.

The goal is to prevent unintended self-promotion while still allowing controlled self-service role changes when an administrator explicitly allows them.

## What Changed

Role updates are no longer treated the same as ordinary profile updates.

When `Update User` tries to change `role`, the action now checks:

- whether the current request is a webhook
- whether the current user has the `promote_users` capability
- whether the requested role change is effectively a no-op
- whether the requested target role is listed in the global `Self-Promotable Roles` setting

If a role change is not allowed, the role update is skipped without breaking the rest of the `Update User` action.

## Self-Promotable Roles

The global allowlist is configured in:

`JetFormBuilder Settings -> Options -> Self-Promotable Roles`

This list defines which roles may be self-assigned by users who do not have the `promote_users` capability.

If the setting is empty, self-service role changes are not automatically allowed.

## Current Behavior Matrix

### 1. Normal profile update without role change

Example:

- update email
- update display name
- update password

Behavior:

- works normally

### 2. Role mapped through Fields Map

Example:

- a form field is mapped to `role`
- or `User Meta` is selected and the meta key is set to `role`

Behavior:

- users with `promote_users` can change the role
- webhook requests can change the role
- users without `promote_users` can only keep the same role or switch to roles from `Self-Promotable Roles`
- otherwise the role update is skipped

### 3. Static User Role configured in the action

Example:

- `User Role` is set to `editor`
- `User Role` is set to `subscriber_type_2`

Behavior:

- users with `promote_users` can apply the configured role
- webhook requests can apply the configured role
- users without `promote_users` can only apply roles from `Self-Promotable Roles`
- otherwise the role update is skipped

### 4. No-op role update

Example:

- the submitted role is already the user's current role

Behavior:

- allowed
- the form can still update unrelated user fields

### 5. Allowlisted self-service role transition

Example:

- `subscriber_type_1 -> subscriber_type_2`
- target role is listed in `Self-Promotable Roles`

Behavior:

- allowed even if the submitter does not have `promote_users`

### 6. Privileged role transition without allowlist

Example:

- `subscriber -> editor`
- `subscriber -> author`
- `subscriber -> custom_manager`

Behavior:

- skipped for users without `promote_users`

### 7. Placeholder or empty User Role selection

Example:

- `User Role` remains `--`

Behavior:

- no role warning is shown only because of the placeholder
- no role update is applied from that control

## Editor Warnings

The action editor shows a warning only when the action is role-sensitive.

Warnings appear when:

- `Fields Map` effectively targets `role`
- selected `User Role` values are outside `Self-Promotable Roles`

Warnings do not appear when:

- `User Meta` uses another key such as `roles`, `custom_role_flag`, or anything other than `role`
- `User Role` is only the placeholder `--`

## Covered Scenarios

The current implementation covers:

- self-promotion through mapped role fields
- self-promotion through static `User Role`
- safe no-op role updates
- explicit admin allowlisting of self-service target roles
- warning admins when a role-sensitive action may be skipped for non-promoting users

## Manual Test Cases

### A. Basic profile update

Setup:

- subscriber user
- `Update User` changes email or display name only

Expected:

- user data updates successfully

### B. Mapped role escalation blocked

Setup:

- subscriber user
- form maps a field to `role`
- submitted role is `editor`
- `editor` is not in `Self-Promotable Roles`

Expected:

- role does not change

### C. Mapped role no-op

Setup:

- subscriber user
- form maps a field to `role`
- submitted role equals the user's current role

Expected:

- form still succeeds
- unrelated fields can update

### D. Static User Role blocked

Setup:

- subscriber user
- `User Role` is set to `editor`
- `editor` is not in `Self-Promotable Roles`

Expected:

- role does not change

### E. Allowlisted self-service transition

Setup:

- subscriber user
- target role is included in `Self-Promotable Roles`

Expected:

- role changes successfully

### F. Empty allowlist disables self-service role changes

Setup:

- subscriber user
- `Self-Promotable Roles` is empty
- form tries to change role through `Fields Map` or `User Role`

Expected:

- role does not change unless it is already the user's current role

### G. User with promote_users

Setup:

- admin or another user with `promote_users`
- `Update User` assigns a different role

Expected:

- role changes successfully

### H. User Meta not targeting role

Setup:

- `Fields Map` uses `User Meta`
- meta key is not `role`

Expected:

- no role-specific warning appears

### H. User Meta targeting role

Setup:

- `Fields Map` uses `User Meta`
- meta key is `role`

Expected:

- role-specific warning appears

### I. Placeholder-only User Role

Setup:

- `User Role` is left as `--`

Expected:

- no role warning is shown just because of the placeholder

### J. Warning for non-allowlisted static role

Setup:

- `User Role` is set to a role outside `Self-Promotable Roles`

Expected:

- warning is shown in the action editor
- the role may be skipped for submitters without `promote_users`

## Practical Verification

After submitting a form, verify the resulting role in WordPress admin or with WP-CLI:

```bash
wp user get <user-id> --field=roles
```

## Notes

- Event names such as `GATEWAY.SUCCESS` are not currently treated as a special security bypass.
- The allowlist is the explicit product-level mechanism for permitting self-service role transitions.
- If an administrator adds a privileged role such as `editor` to `Self-Promotable Roles`, that is an intentional opt-in to allow that role transition.
