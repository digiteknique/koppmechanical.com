## Why

The contact form on the Kopp Mechanical site (`#contact-form` in `index.html`) currently just calls `preventDefault()` and shows a toast message via `js/main.js` — no submission actually goes anywhere. The business is still standing up and plans to route leads through a CRM/dispatch platform (Housecall Pro or Jobber) once one is chosen, but that decision, trial, and integration work is a separate, later effort. Since the site may already get visitors (soft launch, word of mouth) even before active marketing starts, the form shouldn't sit in a state where a genuine inquiry silently disappears. A minimal stopgap gets real submissions landing in an inbox now, without building anything that would need to be re-architected once the CRM is picked.

## What Changes

- Wire `#contact-form` to a hosted, zero-backend form service (Formspree free tier, or equivalent) so submissions are emailed to the business instead of vanishing.
- Keep the existing on-page success feedback (the toast/message in `js/main.js`) by submitting via the service's AJAX/fetch flow rather than a full-page redirect, so the visitor experience is unchanged.
- Enable the form service's built-in spam mitigation (honeypot field and/or reCAPTCHA) since it's a low-effort checkbox-level setting.
- Replace the stale HTML comment above the `<form>` tag (which currently says the form has no backend) with an accurate note describing the stopgap and that it's intended to be replaced once a CRM is selected.
- Update the README's "Wiring up the contact form" section to describe what's actually implemented instead of the generic placeholder instructions.

**Explicitly out of scope**: choosing between Housecall Pro and Jobber, trialing either platform, and the eventual cutover to route leads into the chosen CRM (via embedded widget or API/webhook). Those are separate, later changes once the CRM decision is made.

## Capabilities

### New Capabilities
- `contact-form-submission`: the contact form on the marketing site delivers visitor submissions to the business (via a hosted form service) and gives the visitor on-page confirmation, without requiring any custom backend.

### Modified Capabilities
(none — no existing specs in this repo yet)

## Impact

- **Affected files**: `index.html` (form `action`/`method`/hidden fields, HTML comment), `js/main.js` (submit handler, switched from `preventDefault`-only to an AJAX POST to the form service), `README.md` (contact form section).
- **New external dependency**: a third-party hosted form service (e.g., Formspree) — free tier, no account infrastructure beyond an email address to receive notifications.
- **No build step, no backend, no database introduced** — stays consistent with the site's current static-hosting architecture (Cloudflare Pages).
- **Temporary by design**: this capability is expected to be superseded by a future change once the CRM (Housecall Pro or Jobber) is chosen and lead routing moves there instead.
