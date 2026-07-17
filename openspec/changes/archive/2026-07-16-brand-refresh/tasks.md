## 1. Design tokens (`css/styles.css`)

- [x] 1.1 Replace color tokens per the design.md table (ink-900/700, accent-600/500, new ice-400, new brass-500, cream-50 hex update); rename from `--color-teal-*`/`--color-orange-*` to `--color-ink-*`/`--color-accent-*` and update all usages
- [x] 1.2 Swap `--font-heading` from `'Poppins'` to `'Bitter'`; add the font (self-hosted or system fallback consistent with the site's no-build-step approach); keep `--font-body: 'Inter'` unchanged
- [x] 1.3 Audit component styles (buttons, cards, section-alt backgrounds, nav, footer) for hardcoded colors that bypass the token variables and fix them to use the renamed tokens

## 2. Icon / wordmark

- [x] 2.1 Create the new flame+snowflake SVG asset (path data already produced and visually verified during exploration) as the new `favicon.svg`
- [x] 2.2 Replace the inline `<svg class="logo-mark">` in the header with the new icon, paired with the wordmark ("Kopp" + "Mechanical", two-weight treatment) per the approved concept
- [x] 2.3 Replace the hero badge SVG (currently a duplicate of the old generic icon) with the new icon
- [x] 2.4 Replace the footer logo SVG with the new icon for consistency

## 3. Honest trust/provenance copy

- [x] 3.1 Remove the fabricated "4.9/5 from 300+ local reviews" line from the hero trust list
- [x] 3.2 Add founder framing to the hero and/or about section: Shayne & Jayson Kopp, father-son team, est. 2026
- [x] 3.3 Change "Licensed & Insured" copy (header eyebrow, hero eyebrow) to "Family-Owned & Operated" — confirmed: insurance is also still in process, so no licensing/insurance claim appears at all
- [x] 3.4 Remove the `License #[XXXXXX]` line from the footer entirely (no real number exists yet)
- [x] 3.5 Remove the testimonials section (`#testimonials`) and its nav link, since no real customer quotes exist yet
- [x] 3.6 Replace the "Why Us" stats grid (`15+ Years in Business`, `6,000+ Jobs Completed`, `<60min Avg. Response Time`, `4.9/5 Average Rating` — all fabricated) with true facts: "2026 / Founded", "2 / Generations, One Trade", "100% / Flat-Rate Pricing", "24/7 / Emergency Line"
- [x] 3.7 Replace the "Why Us" feature-list bullet claiming techs are "licensed, drug-tested, and background-checked" (unverifiable/false for a two-person new company) with a true differentiator: direct service from the owners, no subcontractors
- [x] 3.8 Rewrite the About section copy: remove "hundreds of families," "team of certified professionals," and the implied pre-existing reputation; replace with an honest founding story centered on Shayne & Jayson, est. 2026, personal/direct service

## 4. Contact link consistency

- [x] 4.1 Fix all `tel:+15555550123` hrefs (header, hero, CTA banner, contact section, footer) to `tel:+14058120508`
- [x] 4.2 Fix all `mailto:hello@koppmechanical.com` hrefs to `mailto:info@koppmechanical.com`

## 5. Real content

- [x] 5.1 Remove the street-address line from the contact section entirely (no public address — home-based/mobile business); remove `streetAddress`/`postalCode` from the JSON-LD `PostalAddress` block, keeping `addressLocality: "Oklahoma City"`/`addressRegion: "OK"`
- [x] 5.2 Replace `[City One]`&ndash;`[City Six]` placeholders in the service area section with: Edmond, Norman, Moore, Yukon, Mustang, Midwest City

## 6. SEO metadata

- [x] 6.1 Fix `<title>` and `<meta name="description">` to remove `[CITY, ST]` placeholder (use "Oklahoma City, OK" per the JSON-LD `areaServed` already set)
- [x] 6.2 Fix `og:title`, `og:description` placeholders
- [x] 6.3 Generate a brand-appropriate placeholder `assets/og-image.png` from the new icon/wordmark so `og:image` resolves instead of 404ing (to be replaced with real photography later, per design.md Non-Goals)
- [x] 6.4 Fix JSON-LD `PostalAddress`/`areaServed` placeholders per 5.1 (locality/region only, no street address) and confirm `areaServed` reflects the OKC metro

## 7. Verification

- [x] 7.1 Browser-driven check (per the `run` skill pattern) confirming: new icon renders at header/favicon/hero sizes, no old teal/orange colors remain visible, no placeholder text remains anywhere on the page
- [x] 7.2 Click-test every `tel:`/`mailto:` link and confirm the resolved `href` matches the real contact info
- [x] 7.3 Confirm no console errors and that the page's color contrast (new palette) remains legible in both light interactive states (buttons, links) and on dark sections
