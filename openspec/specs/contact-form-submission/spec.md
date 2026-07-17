# Contact Form Submission

## Purpose

Enables website visitors to submit inquiries through the site's contact form and have them reliably reach the business, without requiring a custom backend. Currently implemented as a stopgap using a hosted third-party form service (Formspree) pending selection and integration of a CRM (Housecall Pro or Jobber), at which point this capability will be superseded by a future change.

## Requirements

### Requirement: Contact form submissions are delivered to the business
The site's contact form SHALL deliver visitor-submitted inquiries to a business-monitored email address via a hosted third-party form service, without requiring a custom backend.

#### Scenario: Visitor submits a valid inquiry
- **WHEN** a visitor fills out all required fields on the contact form and submits it
- **THEN** the submission is sent to the form service, which forwards it by email to the business's monitored address

#### Scenario: Visitor submits an incomplete form
- **WHEN** a visitor submits the form with a required field missing
- **THEN** the browser's native validation blocks submission and no request is sent, consistent with the form's existing `required` fields and `novalidate` + manual `checkValidity()` handling

### Requirement: Visitor sees on-page confirmation without leaving the site
Submitting the contact form SHALL show the visitor an on-page success message and SHALL NOT navigate them away to a third-party page.

#### Scenario: Successful submission
- **WHEN** the form service accepts a submission
- **THEN** the page shows a success message in place (the existing `#form-note` element) and the form resets, with no page redirect or navigation

#### Scenario: Submission fails
- **WHEN** the form service returns an error or is unreachable
- **THEN** the page shows a friendly error message in `#form-note` telling the visitor to call or email directly instead, and the form is not silently cleared

### Requirement: Basic spam mitigation is in place
The contact form SHALL include a low-friction spam mitigation mechanism that does not require the visitor to complete a visible challenge.

#### Scenario: Automated bot submission
- **WHEN** an automated submission fills in the hidden honeypot field
- **THEN** the form service discards the submission without forwarding it as a legitimate inquiry

### Requirement: Stopgap nature is documented in the codebase
The implementation SHALL be clearly marked in-code and in project documentation as a temporary solution pending CRM selection, so it is not mistaken for the permanent lead-routing integration.

#### Scenario: Future developer inspects the form
- **WHEN** a developer reads the HTML comment above `#contact-form` or the README's contact form section
- **THEN** they see that this is a stopgap using a hosted form service, intended to be replaced once a CRM (Housecall Pro or Jobber) is selected and integrated
