## 1. HTML

- [x] 1.1 Add `aria-label="Call 405-812-0508"` to the `.phone-link` anchor in `public/index.html`

## 2. CSS (`public/css/styles.css`, within the existing `max-width: 780px` breakpoint)

- [x] 2.1 Hide `.header-cta .btn-primary` ("Get a Free Quote") on mobile
- [x] 2.2 Stop hiding `.phone-link` outright; instead hide its inner `span` (the visible phone number text) on mobile
- [x] 2.3 Restyle `.phone-link` on mobile into a compact square button: fixed width/height (minimum 44&times;44px tap target), `background: var(--color-accent-500)`, centered icon in white, rounded corners consistent with `--radius-sm`

## 3. Verification

- [x] 3.1 Browser-driven check at 390px viewport: confirm no horizontal scroll (`document.body.scrollWidth` equals viewport width) and the hamburger toggle is fully visible
- [x] 3.2 Confirm tapping the icon button triggers the correct `tel:` link (same real number as elsewhere on the site)
- [x] 3.3 Confirm the hamburger menu still opens/closes correctly and all nav links are reachable
- [x] 3.4 Spot-check at a couple of other widths (e.g. 375px, 414px, and just above/below the 780px breakpoint) to confirm the fix holds and desktop is unaffected — found a pre-existing, out-of-scope overflow at 781px+ (narrow desktop/tablet range) unrelated to this change; noted for a future fix
