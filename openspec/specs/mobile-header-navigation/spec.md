# Mobile Header Navigation

## Purpose

Defines how the site header behaves and remains usable on mobile viewports, including layout (no horizontal scrolling), the hamburger menu toggle, and a reachable call-to-action.

## Requirements

### Requirement: Header fits within small viewports without horizontal scrolling
On viewports at or below the existing mobile breakpoint (780px), the header's visible content SHALL fit within the viewport width, and the page SHALL NOT require horizontal scrolling to reach any header control.

#### Scenario: Visitor loads the site on a small phone
- **WHEN** a visitor loads the site at a 390px-wide viewport
- **THEN** the page's horizontal scroll width equals the viewport width (no overflow), and the hamburger menu toggle is visible without scrolling

### Requirement: Menu toggle is always reachable on mobile
The hamburger menu toggle SHALL remain visible and functional at all supported mobile viewport widths.

#### Scenario: Visitor taps the menu toggle
- **WHEN** a visitor on a mobile viewport taps the hamburger icon
- **THEN** the navigation menu opens, showing all nav links

### Requirement: A one-tap call action remains visible in the mobile header
On mobile viewports, the header SHALL present a reachable call action, even though the full "Get a Free Quote" button is hidden at this breakpoint.

#### Scenario: Visitor taps the header call button on mobile
- **WHEN** a visitor on a mobile viewport taps the phone icon button in the header
- **THEN** the device initiates a call to the business's real phone number

#### Scenario: Screen reader announces the mobile call button
- **WHEN** a screen reader user navigates to the header call button on a mobile viewport (where the visible text label is hidden)
- **THEN** the screen reader announces a descriptive label identifying it as a call action with the phone number, not an unlabeled icon
