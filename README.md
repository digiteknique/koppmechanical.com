# Kopp Mechanical — Website

A self-contained static site. No build step, no dependencies — just open `index.html` in a browser, or deploy the folder as-is.

## Structure

```
index.html       All page content and sections
css/styles.css   Design tokens + styles (colors/fonts at the top of the file)
js/main.js       Mobile nav, footer year, contact form feedback
favicon.svg      Logo mark used as the browser tab icon
robots.txt       Search engine crawl rules
sitemap.xml      Search engine sitemap
```

## Before going live, replace these placeholders

Search the project for square-bracket placeholders and swap in real info:

- `[PHONE]` / `+15555550123` — real phone number (update both the display text and the `tel:` links)
- `[EMAIL]` / `hello@koppmechanical.com` — real email address
- `[CITY, ST]`, `[STREET ADDRESS]`, `[ZIP]` — real business address
- `[City One]`...`[City Six]` in the Service Area section — real towns you serve
- `[Neighborhood]` in testimonials — replace with real customer quotes once you have them
- `[XXXXXX]` in the footer — your HVAC license number
- `koppmechanical.com` — your actual domain, in the `<meta>` tags, JSON-LD block, `sitemap.xml`, and `robots.txt`

## Updating reviews/testimonials

Yes — it's a plain HTML edit, no CMS or database involved. Each review lives
in `index.html` inside `<section id="testimonials">` as one `<blockquote class="testimonial-card">`
block: star rating, quote text, and a `<footer>` with the reviewer's name/area.
Copy an existing block, edit the text, and delete the one you're replacing.
To add or remove a whole review, add/remove a `<blockquote>` block — the CSS
grid (`.grid-3`) will reflow automatically for any number of cards (3 per row
on desktop, fewer on smaller screens). No rebuild step needed; just re-deploy
the file (see Deploying below).

## Wiring up the contact form

The form in `#contact` currently submits to [Formspree](https://formspree.io)
(`js/main.js` posts to it via `fetch`, so the visitor sees an inline message
instead of being redirected off-site). This is a **stopgap** — submissions
land in the `info@koppmechanical.com` inbox until the business sets up a CRM
(Housecall Pro or Jobber) and lead intake moves there instead. When that
happens, replace the form's `action` and the `fetch` handler in `main.js`
with whatever the chosen CRM's integration requires (an embedded widget or
its own API/webhook), and remove the Formspree account.

## Adding real photos

The hero badge, about-section headshot, and map are currently SVG placeholders
so the site works with zero image assets. Drop real photos into an `assets/`
folder and swap the placeholder `<div>`s for `<img>` tags when ready — also
add a real `assets/og-image.png` (1200×630) for social link previews.

## Deploying to Cloudflare Pages

1. Push this folder to a GitHub (or GitLab) repo.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, pick the repo.
3. Build settings: **Framework preset: None**, **Build command: (leave blank)**, **Build output directory: /** (repo root, since there's no build step).
4. Deploy. Cloudflare gives you a `*.pages.dev` URL immediately.
5. Add your real domain under the Pages project's **Custom domains** tab (if the domain's DNS is already on Cloudflare, this is a couple of clicks and SSL is automatic).

Alternative (no GitHub required): install `wrangler` and run
`npx wrangler pages deploy .` from this folder — it uploads the current files
directly. Re-run the same command any time you want to push an update
(e.g. after editing reviews).

Any other static host works too — Netlify, Vercel, GitHub Pages, or plain FTP.
No build command needed anywhere.
