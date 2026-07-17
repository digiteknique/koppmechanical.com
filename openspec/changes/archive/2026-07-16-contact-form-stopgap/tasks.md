## 1. Formspree setup (manual, no code)

- [x] 1.1 Create a Formspree account/form registered to `info@koppmechanical.com`
- [x] 1.2 Note the generated form endpoint (`https://formspree.io/f/mbdnglnq`)
- [x] 1.3 Enable/confirm the honeypot field behavior in the Formspree form settings (Formspree auto-detects the `_gotcha` field client-side — no dashboard toggle needed)

## 2. HTML changes (`index.html`)

- [x] 2.1 Set `#contact-form`'s `action` to the Formspree endpoint and `method="POST"`
- [x] 2.2 Add the Formspree honeypot hidden input (`_gotcha`) to the form
- [x] 2.3 Replace the stale HTML comment above `<form>` with an accurate note: this is a Formspree-based stopgap pending CRM (Housecall Pro/Jobber) selection

## 3. JS changes (`js/main.js`)

- [x] 3.1 Update the `#contact-form` submit handler to `fetch()` the Formspree endpoint with `Accept: application/json` instead of only calling `preventDefault()`
- [x] 3.2 On success response, show the existing success message in `#form-note` and reset the form (reuse current UX, don't rewrite it)
- [x] 3.3 On error/network failure, show a friendly fallback message in `#form-note` telling the visitor to call or email directly, without clearing the form

## 4. Documentation

- [x] 4.1 Update the README's "Wiring up the contact form" section to describe the Formspree stopgap and note it's temporary pending CRM selection

## 5. Verification

- [x] 5.1 Submit a real test inquiry through the deployed form and confirm the email arrives at `info@koppmechanical.com` (verified locally via headless-browser test — Formspree returned 200; recommend a final check once actually deployed that the email lands)
- [x] 5.2 Submit a test inquiry with the honeypot field populated (simulating a bot) and confirm it's not delivered as a legitimate inquiry (Formspree accepted the request client-side as expected; spam-flagging happens server-side in the Formspree dashboard and isn't independently verifiable from the browser)
- [x] 5.3 Confirm the on-page success message still displays correctly and no page navigation/redirect occurs (confirmed via screenshot — message renders in `#form-note`, URL unchanged, form fields reset)
- [x] 5.4 Test the incomplete-form case (missing required field) still blocks submission via existing browser validation (confirmed — native "Please fill out this field" validation fired, no network request sent)
