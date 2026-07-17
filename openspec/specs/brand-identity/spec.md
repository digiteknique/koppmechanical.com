# brand-identity Specification

## Purpose
Defines the site's visual identity (the Blue Flame icon/wordmark, navy/blue/brass palette, Bitter heading typeface) and the trust/provenance copy it carries — ensuring the site presents Kopp Mechanical consistently and honestly, with no fabricated claims about reviews, licensing, or business history.

## Requirements

### Requirement: Site uses the Blue Flame visual identity consistently
The site SHALL present a single consistent visual identity (icon, wordmark, color palette, heading typeface) across every page section, rather than mixing the new identity with the prior generic template styling.

#### Scenario: Icon appears in header, favicon, and hero
- **WHEN** a visitor loads the site
- **THEN** the header logo, browser-tab favicon, and hero badge all render the same flame-with-nested-snowflake mark (not the old flame-in-circle icon), rendered in the new blue palette

#### Scenario: Palette and typography are applied site-wide
- **WHEN** a visitor scrolls through the full page (header, hero, services, about, service area, contact, footer)
- **THEN** no section still uses the prior teal/orange color tokens or Poppins heading typeface — all sections use the new navy/blue/brass tokens and Bitter heading typeface

### Requirement: Trust and provenance claims are true
The site SHALL NOT display fabricated or premature claims about reviews, licensing, or business history; any social-proof or credential claim shown SHALL be verifiably true at time of publish.

#### Scenario: No fabricated review statistic
- **WHEN** a visitor views the hero section
- **THEN** no invented review count or star rating (e.g. "4.9/5 from 300+ reviews") is present

#### Scenario: No premature licensing claim
- **WHEN** a visitor views the header, hero, or footer
- **THEN** the site does not state "Licensed" or display a license number unless a real, issued license number has been provided; "Insured" appears only if confirmed as currently true

#### Scenario: Founder story is present and accurate
- **WHEN** a visitor views the hero or about section
- **THEN** the site identifies the business as founded by Shayne & Jayson Kopp, a father-son team, rather than using generic anonymous marketing copy

### Requirement: No fabricated testimonials are displayed
The site SHALL NOT display invented customer testimonials; the testimonials section is removed until real customer quotes are available.

#### Scenario: Visitor looks for reviews section
- **WHEN** a visitor navigates the site looking for customer testimonials
- **THEN** no placeholder-named testimonial quotes (e.g. "Sarah M.", "James R.") are shown
