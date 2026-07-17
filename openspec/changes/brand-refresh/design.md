## Context

Kopp Mechanical is Shayne Kopp's new HVAC company, run with his son Jayson. The current site (`index.html`, `css/styles.css`, `favicon.svg`) was built from a generic HVAC template: a flame-in-a-circle icon, a default teal/orange/cream palette, Poppins/Inter typography, and dozens of unfilled `[PLACEHOLDER]` strings including in the `<title>`, meta description, and JSON-LD. Contact links (`tel:`/`mailto:`) still point at placeholder values even where visible text was already corrected. The hero also claims a fabricated review count, and the footer implies an active contractor license that doesn't exist yet — Shayne is still studying for the licensing exam.

During exploration (see conversation/artifact history — a "Blue Flame" concept was iterated live with the user), a specific direction was agreed on: a wordmark-led identity built around a recolored flame+snowflake mark, refined through several rounds until it converged on a design close to a reference the user liked (a full flame silhouette with a full snowflake nested inside), executed in a single blue family rather than the standard red/blue HVAC convention.

## Goals / Non-Goals

**Goals:**
- Apply the agreed "Blue Flame" identity consistently across the whole site (header, favicon, hero, buttons/accents, section styling, footer) — not just swap the logo in isolation.
- Replace fabricated/premature trust claims (fake review count, "Licensed" before the license exists) with honest ones (family-owned, founders named, "Insured" only if actually true).
- Make every contact reference (visible text and `href`) consistent and correct.
- Remove all literal placeholder strings from visible copy and metadata.

**Non-Goals:**
- Any backend, build tooling, or CRM integration — out of scope, covered by other changes.
- Sourcing real photography — this change uses the new icon/wordmark and honest copy; real photos of Shayne & Jayson can be swapped in later without needing this change reopened.
- Finalizing licensing/insurance copy permanently — this change removes false claims now; the actual "Licensed" copy returns in a future change once the license is issued.

## Decisions

**Decision: Full site restyle, not an icon-only swap.**
Applying the new navy/blue/brass palette and Bitter heading typeface everywhere (not just the header) was chosen over a partial swap because a new icon next to the old teal/orange buttons and Poppins headings would read as an inconsistent, half-finished brand rather than an intentional identity — worse than not changing anything. Confirmed directly with the user before scoping this.

**Decision: Design tokens (replacing current `css/styles.css` `:root` variables).**
| Token | Old value | New value | Use |
|---|---|---|---|
| `--color-ink-900` (was `--color-teal-900`) | `#0F373B` | `#14202B` | Deepest background/heading color |
| `--color-ink-700` (was `--color-teal-700`) | `#14454A` | `#0F1A22` | Secondary dark surface (header, footer, cards) |
| `--color-accent-600` (was `--color-orange-600`) | `#CF4F1D` | `#2B7BA6` | Flame/icon fill, primary accent (deeper steel-blue) |
| `--color-accent-500` (was `--color-orange-500`) | `#E8622C` | `#4FB4E8` | Buttons, links, primary interactive accent (bright blue) |
| `--color-ice-400` (new) | — | `#8FDCF8` | Snowflake glyph, secondary highlight |
| `--color-brass-500` (new) | — | `#C9A24B` | Small-caps labels, "Est. 2026", subordinate accents (replaces reliance on orange for emphasis text) |
| `--color-cream-50` (renamed in spirit, kept name) | `#FAF8F4` | `#EEF2F5` | Light backgrounds/text-on-dark |
| `--font-heading` | `'Poppins'` | `'Bitter'` | Headings and the wordmark itself |
| `--font-body` | `'Inter'` | `'Inter'` (unchanged) | Body copy — kept as-is; the identity change is about the display face and palette, not the reading experience |

Bitter (a slab serif) was chosen for headings because it's what the wordmark itself uses in the approved concept — using a different face for body headings than the logo would fragment the identity. Inter stays for body text since slab serifs at paragraph sizes read heavier/slower; the "personal" feel comes from the mark and palette, not from re-typesetting every sentence.

**Decision: New icon is a single SVG asset (flame silhouette + nested snowflake), replacing `favicon.svg` and the inline `<svg class="logo-mark">`/hero-badge SVGs.**
The exact path data was already produced and visually verified (rendered at 20px–120px, confirmed legible at favicon size) during exploration. Reusing that path avoids re-deriving the geometry; it becomes the single source of truth referenced from the favicon, header logo, and hero badge instead of three separately hand-maintained copies of the old generic icon.

**Decision: Drop the fabricated review count instead of reducing it to something smaller but still fake.**
Any invented number is a false statement for a company with zero customers yet. The honest replacement is the real, verifiable fact already established: founded by Shayne & Jayson Kopp, a father-son team, est. 2026. This is also more distinctive than a star rating every competitor's template claims.

**Decision: Testimonials section is removed (not filled with placeholder names) until real customer quotes exist.**
Inventing plausible-sounding testimonials ("Sarah M.", "James R.") would be the same category of problem as the fake review count — fabricated social proof. Since there are no customers yet, the honest move is to remove the section entirely rather than dress up placeholders, and re-add it later with real quotes once the business has them.

**Decision: "Licensed & Insured" is replaced entirely with "Family-Owned & Operated"; footer license line is removed outright.**
Confirmed with Shayne: insurance is also still in process, not active yet — so neither "Licensed" nor "Insured" is true right now. Per the earlier decision in this project (drop claims that aren't true yet, ship everything else), the hero/header phrase becomes "Family-Owned & Operated" with no licensing/insurance claim at all, and the footer's `License #[XXXXXX]` line is deleted outright. Both return in a future change once actually true.

**Decision: No public street address; contact section shows service area instead.**
Home-based/mobile HVAC contractors commonly omit a storefront address for privacy — there's no retail location to direct customers to. Rather than wait on a real street address, the contact section and JSON-LD show phone, email, hours, and "Serving the OKC Metro" with no street-level address field.

**Decision: Light-mode neutrals ("cream" tokens) shifted from warm beige to cool blue-grey.**
The first implementation kept the original template's warm cream/beige neutrals (`#F1EDE1`/`#E9E2D2`) under the new names, changing only their exact hex. In practice this read as a beige page with a navy header dropped on top, not one cohesive identity — a neutral should lean toward the palette's own accent hue rather than staying warm just because that's what was already there. Corrected to cool blue-grey neutrals (`#EEF2F5`/`#E1E8ED`) so the light sections read as part of the same navy/blue system as the header, footer, and buttons. Caught via direct visual feedback after first implementing the palette.

**Decision: Service area is the OKC metro, represented by six real suburbs.**
`Edmond`, `Norman`, `Moore`, `Yukon`, `Mustang`, and `Midwest City` replace the `[City One]`–`[City Six]` placeholders — the well-known suburbs that make up the Oklahoma City metro, matching the `areaServed` already set to "Oklahoma City, OK and surrounding areas."

## Risks / Trade-offs

- **[Risk]** No public street address may read as less established to some visitors than a full address → **Mitigation**: accepted trade-off, consistent with being a home-based/mobile business; phone, email, hours, and service area are all still present.
- **[Risk]** Removing testimonials/review-count entirely leaves the site looking sparser than a "finished" competitor site → **Mitigation**: accepted trade-off — a new, honest company necessarily looks newer than an established one; fabricating proof to look established is the worse option.
- **[Risk]** Full palette/typography migration touches most of `css/styles.css`, higher chance of visual regressions (contrast, hover states) than a scoped icon swap → **Mitigation**: verify via the project's `run`/browser-driven check after implementation (as was done for the contact-form-stopgap change) before considering this done.
- **[Risk]** `og:image` still has no real asset behind it → **Mitigation**: out of scope for this change (no real photography yet per Non-Goals); generate a simple brand-colored placeholder `assets/og-image.png` from the new mark/wordmark so the meta tag isn't pointing at a 404, to be replaced with real photography later.

## Migration Plan

1. Update `css/styles.css` design tokens per the table above; audit usages of old teal/orange variable names and rename/repoint them.
2. Replace `favicon.svg` and all inline logo/icon SVG instances (header, hero badge) with the new flame+snowflake mark.
3. Update hero eyebrow/trust line, About section, and footer copy: remove fake review stat and premature licensing claim, add founder framing (Shayne & Jayson, est. 2026, family-owned).
4. Remove the testimonials section (or leave the section shell present but empty/hidden — implementer's call in tasks — pending real quotes).
5. Fix every `tel:`/`mailto:` `href` to match the real, already-correct visible text.
6. Remove the street-address field from the contact section and JSON-LD; replace service-area placeholders with the real OKC-metro city list.
7. Fix `<title>`, meta description, Open Graph tags to remove placeholder text; add a real (or brand-generated placeholder) `assets/og-image.png`.
8. Verify via a browser-driven check (per the `run` skill pattern used previously) that the restyled site renders correctly, links resolve correctly, and no visible placeholder text remains.

**Rollback**: all changes are in static files with no data migration; reverting the commit fully restores the prior state.

## Open Questions

None outstanding — insurance (not yet active), address display (omit, service-area only), and service-area cities (OKC metro: Edmond, Norman, Moore, Yukon, Mustang, Midwest City) were all resolved before implementation.
