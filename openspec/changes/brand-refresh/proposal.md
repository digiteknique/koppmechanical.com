## Why

The site currently reads as an unfinished template: literal `[CITY, ST]`/`[STREET ADDRESS]`/`[XXXXXX]` placeholders survive in the title tag, meta description, JSON-LD, and body copy; the header's `tel:`/`mailto:` links still point at the placeholder phone number and email even though the visible text was updated to the real ones; and the hero claims a fabricated "4.9/5 from 300+ local reviews" for a company that hasn't taken a customer yet. On top of that, the visual identity (a generic flame-in-a-circle icon, default teal/orange palette) doesn't reflect that this is Shayne and Jayson Kopp's own father-son company — it looks like any other HVAC template. Since the brother's HVAC contractor license isn't issued yet (still studying for the exam), the site also can't honestly claim "Licensed" and needs to say something true instead. This change fixes all of that together: a real, personal brand identity; contact information that's actually correct and consistent everywhere; and SEO metadata with no placeholder text left in it.

## What Changes

- **BREAKING** (visual): Replace the generic flame-in-circle icon and teal/orange palette with the "Blue Flame" identity — a wordmark-led lockup (Bitter slab serif for "Kopp Mechanical"), a new icon (a full flame silhouette with a snowflake nested inside, rendered in one blue family — steel-blue flame, icy-blue snowflake — instead of the standard red/blue split), and a navy/blue/brass palette. Applied consistently across header, favicon, hero, buttons, section styling, and footer — not just swapped in one spot.
- Replace the fabricated "4.9/5 from 300+ local reviews" stat with honest, personal framing: the business is founded by Shayne & Jayson Kopp, a father-son team, est. 2026.
- Remove "Licensed & Insured" and the `License #[XXXXXX]` line until both are actually true (Shayne is preparing for the licensing exam; insurance is also still in process) — replace with "Family-Owned & Operated" instead.
- Fix `tel:`/`mailto:` links site-wide to point at the real phone (`405-812-0508`) and email (`info@koppmechanical.com`) — currently the visible text was updated but the underlying `href`s were not, so clicking "call" would dial the wrong number.
- Remove the street-address placeholder entirely (no public address — home-based/mobile business, service area shown instead); fill service-area cities with the real OKC metro list; remove testimonials until real customer quotes exist rather than filling placeholder neighborhoods.
- Fix SEO metadata: `<title>`, meta description, Open Graph tags, and JSON-LD `PostalAddress`/`areaServed` currently contain literal `[CITY, ST]` placeholder text; `og:image` points at a file that doesn't exist (`assets/og-image.png`).

## Capabilities

### New Capabilities
- `brand-identity`: the site's visual identity (icon, wordmark, color palette, typography) and the trust-signal copy (founder story, service claims) it uses to represent Kopp Mechanical honestly and personally.
- `contact-info-consistency`: every phone/email reference on the site (visible text and underlying `href`) resolves to the same real, correct contact information.
- `seo-metadata`: all search/social metadata (title, meta description, Open Graph, JSON-LD, canonical, sitemap) contains real, accurate content with no placeholder text and no broken asset references.

### Modified Capabilities
(none — no existing specs in this repo besides the separate, unrelated `contact-form-submission` capability from the `contact-form-stopgap` change)

## Impact

- **Affected files**: `index.html` (icon/logo markup, all `tel:`/`mailto:` hrefs, hero/about/testimonials copy, JSON-LD block, meta tags, footer), `css/styles.css` (color tokens, font tokens, any component styles keyed to the old palette), `favicon.svg` (new icon), possibly a new `assets/og-image.png`.
- **Real-world facts confirmed before implementation**: service area is the OKC metro (Edmond, Norman, Moore, Yukon, Mustang, Midwest City); insurance is not yet active (same as licensing); the site will show no public street address (home-based/mobile business), listing service area instead.
- **No backend/build-step changes** — stays a static site, consistent with the rest of the project.
- **Supersedes nothing already shipped** — the `contact-form-stopgap` change (Formspree wiring) is unaffected; this change only touches visual identity, copy accuracy, and metadata.
