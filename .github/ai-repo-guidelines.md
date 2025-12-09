# JetFormBuilder AI Repo Guidelines

This repository contains the Crocoblock **JetFormBuilder** WordPress plugin.

## Domain & architecture

- JetFormBuilder is a **visual form builder for WordPress**, tightly integrated with:
  - Gutenberg editor (form blocks)
  - Dynamic data from JetEngine (CCT, meta fields, relations)
  - Actions system (insert post, register user, send email/webhook, etc.)
  - Optional e-commerce / payments (WooCommerce checkout, payment gateways)

When reviewing or generating changes, the AI should:

- Prefer using existing **JetFormBuilder core APIs and abstractions** instead of ad-hoc logic.
- Keep backward compatibility for:
  - Public form block attributes and structure.
  - Public PHP classes/methods used by add-ons and snippets.
  - Action/notification configuration formats.
  - REST API endpoints and form submission endpoints.
- Be especially careful with:
  - How form data is mapped to posts/users/CCT records.
  - Validation and sanitization pipeline.
  - Actions order and transactional behaviour (e.g. payment + insert post).
  - Multi-step forms and conditional logic.

## Form processing & security

- All form submission endpoints **must be secure**:
  - Always verify nonces to prevent CSRF.
  - Always check capabilities for admin-only or sensitive actions (e.g. editing existing posts, user management).
- Treat all incoming form data as **untrusted**:
  - Validate input types and ranges explicitly.
  - Sanitize before saving to DB or using in queries/emails.
- Carefully handle:
  - File uploads (allowed MIME types, file size limits, safe paths).
  - Redirect URLs (do not allow open redirects without whitelisting).
  - Webhooks and remote requests (timeouts, SSL verification, error handling).

## Coding standards

- Follow **WordPress Coding Standards (WPCS)**.
- Always:
  - Escape output (`esc_html`, `esc_attr`, `wp_kses_post`, etc.) where content is rendered in templates, admin pages or Gutenberg controls.
  - Sanitize input coming from `$_POST`, `$_GET`, JSON payloads before using or storing.
  - Use nonces (`wp_nonce_field`, `wp_verify_nonce`) and capability checks (`current_user_can`) for any write or configuration-changing operations.
  - Use `$wpdb->prepare()` for all manual SQL and respect JetFormBuilder table names / schemas.
- Maintain compatibility with the minimum supported versions of:
  - PHP (see `readme.txt`/`composer.json`)
  - WordPress core
  - Gutenberg / block editor APIs used by JetFormBuilder.

## Performance & scalability

- Keep form rendering and submission **fast**:
  - Avoid heavy DB queries in `render()` methods or block registration callbacks.
  - Cache reusable configuration (form definitions, options) where possible.
  - Prefer `WP_Query`/`get_posts` with `'fields' => 'ids'` when only IDs are needed.
- When integrating with JetEngine or external services:
  - Avoid N+1 queries (e.g. querying CCT or meta per field repeatedly).
  - Use batching and existing Jet APIs when possible.
- Be mindful of:
  - Large forms with many fields and conditions.
  - Sites with high submission volume (thousands of entries, heavy automations).

## Integrations & compatibility

- Do not break existing integrations:
  - JetEngine dynamic data sources.
  - WooCommerce / payment gateways.
  - Common third-party actions (webhooks, CRMs, email services).
- When changing form schema, field types, or action settings:
  - Ensure migrations are safe and idempotent.
  - Preserve existing configuration where possible and provide graceful fallbacks.
- Respect multisite behaviour and multilingual setups (e.g. WPML/Polylang where relevant).

## Changelog conventions

- Changelog entries are short, user-focused descriptions of what changed in JetFormBuilder.
- Use a single bullet line with prefix:
  - `- FIX: ...` for bug fixes
  - `- ADD: ...` for new features
  - `- IMPROVE: ...` for enhancements / refactors
  - `- CHANGE: ...` for breaking or notable behaviour changes
- Mention:
  - The affected area (e.g. "multi-step forms", "user registration action", "CCT form mapping", "Gutenberg block UI").
  - Any important conditions (e.g. specific integrations, gateways, or edge cases).
