## Context

`.header-inner` (`public/css/styles.css`) lays out the logo, primary nav, a phone link + "Get a Free Quote" button, and a hamburger toggle in a single `display: flex; justify-content: space-between` row with no wrap. At the existing `max-width: 780px` breakpoint, `.main-nav` and `.header-cta .phone-link` are hidden, but the `.btn-primary` ("Get a Free Quote") is not — measured at a 390px viewport, the logo (~203px) plus that button (~171px) alone exceed the viewport width, overflowing the hamburger off-screen and forcing horizontal scroll to reach it.

## Goals / Non-Goals

**Goals:**
- Header content fits within the viewport with no horizontal scroll, down to common small-phone widths (~360–390px).
- The hamburger menu toggle is always visible and reachable without scrolling.
- Mobile visitors keep a one-tap call action in the header, rather than losing all header CTAs until the menu is opened.

**Non-Goals:**
- Redesigning the desktop header or the mobile dropdown menu's own contents.
- Fixing any other responsive issues elsewhere on the page.
- Adding new JS behavior — this stays CSS-only.

## Decisions

**Decision: Reuse the existing `.phone-link` anchor, restyled per breakpoint, instead of adding new markup.**
`.phone-link` already exists as a `tel:` anchor containing a phone icon and the number as text. Rather than hide it on mobile (current behavior) and introduce a separate icon-only element, mobile styles hide only its text `<span>` and restyle the anchor itself into a small square button. This avoids duplicate phone-number markup and keeps one source of truth for the `href`.

**Decision: Hide `.header-cta .btn-primary` ("Get a Free Quote") on mobile, matching how `.phone-link` is already conditionally hidden today.**
Alternatives considered: shrinking the button's font/padding to fit, or wrapping the header onto two lines. Shrinking a "Get a Free Quote" button enough to fit alongside the logo and hamburger would make it illegible or cramped; wrapping conflicts with the header's fixed `--header-height` on a `position: sticky` element (the height would need to become dynamic, a bigger change). Hiding it is consistent with the phone-link precedent already in the codebase, and the same action (reaching the contact form) stays available via the nav menu and by scrolling.

**Decision: Icon button styling — accent-colored square button, not a bare icon.**
Sized to a minimum 44&times;44px tap target (`padding` sufficient to reach that from the existing 18&times;18px phone SVG), background `var(--color-accent-500)`, icon in white — visually reads as "the tappable call action" rather than a decorative icon, consistent with `.btn-primary`'s existing color language even though it's not literally a `.btn` element.

**Decision: `aria-label="Call 405-812-0508"` on the anchor when its text is visually hidden.**
The visible `<span>405-812-0508</span>` is hidden via mobile CSS, not removed from the DOM, so an `aria-label` on the parent `<a>` (not `sr-only` text) is the simplest correct fix — VoiceOver/TalkBack announce the label instead of nothing. Focus state needs no new work: the existing global `:focus-visible` outline rule already applies to any focusable element, including this one.

## Risks / Trade-offs

- **[Risk]** Losing the visible "Get a Free Quote" text button on mobile could reduce form-based lead capture from mobile visitors → **Mitigation**: a phone call is arguably a *higher*-intent conversion than a form submit for a home-service business, and the nav menu still surfaces "Contact"/the form one tap away.
- **[Risk]** Icon-only buttons can be ambiguous without a label → **Mitigation**: `aria-label` covers assistive tech; sighted users get a recognizable phone icon in an obviously-tappable colored square, a common enough mobile pattern to read clearly on sight.

## Migration Plan

1. Add mobile-breakpoint CSS: hide `.header-cta .btn-primary` at `max-width: 780px` (alongside the existing `.phone-link` rule being changed, not removed).
2. Restyle `.phone-link` at that breakpoint: hide its `span`, apply square button dimensions/background/centering to the anchor itself.
3. Add `aria-label="Call 405-812-0508"` to the `.phone-link` anchor in `public/index.html` (harmless at desktop widths too, where the visible text makes the label redundant but not wrong).
4. Verify via browser-driven check at 390px (and a couple of other common widths) that there's no horizontal scroll and the hamburger is reachable and functional.

**Rollback**: pure CSS/attribute change; reverting the commit fully restores prior behavior.

## Open Questions

None outstanding.
