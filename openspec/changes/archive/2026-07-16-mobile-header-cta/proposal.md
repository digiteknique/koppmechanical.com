## Why

On mobile viewports (confirmed at 390px width), the header overflows horizontally: the logo wordmark (~203px, wider since the Bitter typeface swap) plus the still-visible "Get a Free Quote" button (~171px) exceed the available width, and nothing in `.header-inner` wraps or shrinks to compensate. This pushes the hamburger menu button off-screen, requiring a visitor to horizontally scroll to find site navigation at all — a broken experience on the device type most visitors to a home-service business site are likely using.

## What Changes

- On mobile (existing `max-width: 780px` breakpoint), replace the "Get a Free Quote" text button in the header with a compact icon-only tap-to-call button, instead of just hiding it.
- The icon-only button reuses the existing `.phone-link` element (already a `tel:` anchor with a phone icon) rather than introducing new markup — on mobile its text label is visually hidden and it's restyled as a small square accent-colored button so it still reads as tappable, not just a stray icon.
- The "Get a Free Quote" `.btn-primary` is hidden on mobile (its action — jumping to the contact form — remains reachable via the nav menu and further down the page).
- Accessibility: the icon button keeps an explicit `aria-label` ("Call 405-812-0508") since its visible text is hidden, and meets a minimum ~44&times;44px tap target.

**Explicitly out of scope**: any other responsive/layout issues beyond this specific header overflow; the desktop header is unaffected.

## Capabilities

### New Capabilities
- `mobile-header-navigation`: on small viewports, the header's logo, a one-tap call action, and the menu toggle all remain visible and reachable without horizontal scrolling.

### Modified Capabilities
(none — no existing specs in this repo)

## Impact

- **Affected files**: `public/css/styles.css` (mobile breakpoint rules for `.header-cta`, `.phone-link`), `public/index.html` (no structural change expected — reusing the existing `.phone-link` anchor, just re-styled per viewport).
- **No JS changes expected** — this is a CSS-only responsive fix.
- **No backend/build-step changes.**
