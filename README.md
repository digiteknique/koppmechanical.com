# Kopp Mechanical — Website

A self-contained static site. No build step, no dependencies — just open
`public/index.html` in a browser, or deploy the `public/` folder as-is.

## Structure

```
public/            Everything that gets deployed — Cloudflare (or any host)
                    should point at THIS folder, not the repo root.
  index.html        All page content and sections
  css/styles.css    Design tokens + styles (colors/fonts at the top of the file)
  js/main.js        Mobile nav, footer year, contact form submission (Formspree)
  favicon.svg       Logo mark used as the browser tab icon
  robots.txt        Search engine crawl rules
  sitemap.xml       Search engine sitemap
  assets/           Images (og:image, future real photos)

openspec/           Project planning docs (proposals/designs/tasks) — internal,
                    never deployed.
.claude/            Claude Code / OpenSpec tooling config — internal, never deployed.
```

`openspec/` and `.claude/` are committed for project history but deliberately
live outside `public/` so they're never served by the site (see Deploying below).

## Updating reviews/testimonials

There's no testimonials section yet — it was removed rather than filled with
placeholder quotes, since the business doesn't have real customer reviews
yet. To add one once real reviews exist: add a section back into
`public/index.html` (a `<blockquote class="card">` with a star rating, quote,
and reviewer name works with the existing `.card`/`.grid-3` styles), and link
it from the nav.

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

The hero badge (icon), about-section headshot, and map are currently SVG
placeholders/icons so the site works with zero photography. Drop real photos
into `public/assets/` and swap the placeholder `<div>`s for `<img>` tags when
ready — also replace `public/assets/og-image.png` (currently a
brand-generated placeholder) with a real 1200×630 photo for social link
previews.

## Deploying to Cloudflare Pages

1. Push this repo to a GitHub (or GitLab) repo.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, pick the repo.
3. Build settings: **Framework preset: None**, **Build command: (leave blank)**, **Build output directory: `public`** (not `/` — this keeps `openspec/`/`.claude/` out of the deployed site).
4. Deploy. Cloudflare gives you a `*.pages.dev` URL immediately.
5. Add your real domain under the Pages project's **Custom domains** tab (if the domain's DNS is already on Cloudflare, this is a couple of clicks and SSL is automatic).

Alternative (no GitHub required): install `wrangler` and run
`npx wrangler pages deploy public` from this folder — it uploads the contents
of `public/` directly (note the `public` argument — deploying `.` would
upload the whole repo, including the internal planning docs). Re-run the same
command any time you want to push an update.

Any other static host works too — Netlify, Vercel, GitHub Pages, or plain
FTP — just make sure you point it at `public/`, not the repo root.
