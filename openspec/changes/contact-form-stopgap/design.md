## Context

Kopp Mechanical's site is a static, no-build site (`index.html` + `css/styles.css` + `js/main.js`) deployed to Cloudflare Pages. The `#contact-form` element currently just calls `preventDefault()` and shows a toast — no submission is sent anywhere. The business is still setting up and plans to adopt a CRM/dispatch platform (Housecall Pro or Jobber, undecided) that will eventually own lead intake. That decision and integration is out of scope here; this change only needs to stop leads from silently disappearing in the meantime.

## Goals / Non-Goals

**Goals:**
- Real form submissions reach a person at the business (email) with no custom backend to build or host.
- Preserve the existing on-page confirmation UX (the toast in `js/main.js`) rather than a redirect to a third-party "thank you" page.
- Basic spam mitigation with near-zero setup effort.
- Leave a clear trail (code comment + README) that this is a stopgap, so a future change doesn't mistake it for the permanent integration.

**Non-Goals:**
- Choosing or integrating with Housecall Pro/Jobber.
- Building any custom backend (Cloudflare Pages Function, own API, database).
- Handling high submission volume — the business isn't marketing yet, so free-tier limits are not a concern.
- Preserving this wiring long-term — it's expected to be torn out in a future change.

## Decisions

**Decision: Use Formspree (hosted form backend) over a self-built Cloudflare Pages Function.**
Formspree requires no code beyond pointing the form at their endpoint and handling their JSON response; a Pages Function would mean writing, deploying, and maintaining a small serverless handler plus wiring an email-sending API (e.g. Resend) — real code to own for a feature that's explicitly temporary. Since this will be replaced once the CRM is chosen, minimizing owned code is the priority. Formspree's free tier (50 submissions/month) comfortably covers a pre-marketing site.

**Decision: Submit via `fetch()` (AJAX) to Formspree's JSON endpoint, not a native form POST/redirect.**
Formspree supports both a plain HTML POST (which redirects to a Formspree-hosted "thank you" page unless a redirect URL is configured) and an `fetch`-based AJAX submission (returning JSON, no navigation). Using `fetch` keeps the existing `js/main.js` submit handler structure — validate, submit, show the existing toast on success — instead of introducing a redirect or an iframe trick. This is a small change to the existing handler rather than a rewrite.

**Decision: Use Formspree's honeypot field for spam mitigation, not reCAPTCHA.**
Formspree supports a hidden honeypot input (`_gotcha`) with zero JS and no third-party script load. reCAPTCHA would add Google's script and a visible/invisible challenge widget for a site that isn't even being marketed yet — disproportionate for current traffic. Honeypot is a one-line addition; reCAPTCHA can be revisited later if spam becomes an actual problem.

**Decision: Keep the business's real inbox as the destination, not a shared/dev address.**
Formspree emails submissions to whatever address the form is registered under. Use the real business email already wired in elsewhere on the site (`info@koppmechanical.com`) so submissions land where the business actually looks, not in a throwaway inbox that gets forgotten.

## Risks / Trade-offs

- **[Risk]** Formspree is a third-party dependency with its own uptime/availability → **Mitigation**: acceptable for a stopgap with near-zero current traffic; not a concern worth engineering around given the short expected lifetime of this solution.
- **[Risk]** Free tier's 50 submissions/month could be exceeded if the business quietly gets found before this is replaced → **Mitigation**: unlikely pre-marketing, and Formspree simply stops accepting new submissions past the cap rather than failing silently — visible/noticeable if it happens, and cheap to bump to a paid tier if needed.
- **[Risk]** Whoever swaps in the CRM later might not realize this is meant to be removed → **Mitigation**: explicit HTML comment above the `<form>` and an updated README section calling out that this is a stopgap pending CRM selection.

## Migration Plan

1. Create a Formspree account/form registered to `info@koppmechanical.com`, note the generated endpoint.
2. Update `#contact-form` in `index.html`: set `action` to the Formspree endpoint, `method="POST"`, add the honeypot hidden field.
3. Update the submit handler in `js/main.js` to `fetch()` the endpoint with the form data and `Accept: application/json`, showing the existing success toast on a `2xx` response and a friendly error message otherwise.
4. Replace the HTML comment above `<form>` and the README's "Wiring up the contact form" section with accurate stopgap notes.
5. Manually submit a test entry on the deployed site and confirm the email arrives.

**Rollback**: revert the `action`/`method`/JS changes — the form returns to its current no-op `preventDefault()` behavior, which is the pre-change state, not a regression.

## Open Questions

- None blocking — Formspree account creation is an operational step for whoever holds the business email, not a design decision.
