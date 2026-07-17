# seo-metadata Specification

## Purpose
Ensures all search/social metadata (title, meta description, Open Graph tags, JSON-LD structured data) contains real, accurate content with no placeholder text, and that every asset it references (e.g. `og:image`) actually exists.

## Requirements

### Requirement: Search and social metadata contains no placeholder text
The `<title>`, meta description, Open Graph tags, and JSON-LD structured data SHALL contain real, accurate content with no literal placeholder tokens.

#### Scenario: Search engine reads the title and description
- **WHEN** a crawler or browser reads the page `<title>` and `<meta name="description">`
- **THEN** neither contains placeholder tokens like `[CITY, ST]`

#### Scenario: Social platform reads Open Graph tags
- **WHEN** a social platform unfurls a link to the page
- **THEN** `og:title`, `og:description`, and `og:image` all resolve to real, accurate content and a real (or brand-appropriate placeholder) image that actually exists at the referenced path

#### Scenario: JSON-LD structured data is parsed
- **WHEN** a crawler parses the page's `HVACBusiness` JSON-LD block
- **THEN** the `address` and `areaServed` fields contain real values with no placeholder tokens

### Requirement: Referenced assets exist
Any asset referenced by metadata (e.g. `og:image`) SHALL exist at the referenced path rather than 404.

#### Scenario: Open Graph image is requested
- **WHEN** a social platform or crawler requests the `og:image` URL
- **THEN** the request returns a valid image, not a 404
