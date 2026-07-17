# contact-info-consistency Specification

## Purpose
Ensures every phone/email reference on the site — visible text and underlying `tel:`/`mailto:` links alike — resolves to the same real, correct contact information, and that location/service-area content contains no placeholder text.

## Requirements

### Requirement: Every contact link resolves to the real, correct destination
All `tel:` and `mailto:` links on the site SHALL point to the real phone number and email address shown in their own visible text, with no link pointing to a placeholder value while its visible text shows a different, real value.

#### Scenario: Clicking any "call" link
- **WHEN** a visitor clicks any phone link anywhere on the site (header, hero, CTA banner, contact section, footer)
- **THEN** the device initiates a call to the real number, `405-812-0508`, matching what is displayed as text

#### Scenario: Clicking any "email" link
- **WHEN** a visitor clicks any email link anywhere on the site
- **THEN** the device opens a new email addressed to the real address, `info@koppmechanical.com`, matching what is displayed as text

### Requirement: Location and service-area content contains no placeholders
The site SHALL NOT display literal placeholder tokens (e.g. `[CITY, ST]`, `[STREET ADDRESS]`, `[ZIP]`, `[City One]`) anywhere in visible content once real values are available.

#### Scenario: Visitor reads the service area section
- **WHEN** a visitor views the service area or contact section
- **THEN** the address and listed service-area cities are real values, not placeholder tokens
