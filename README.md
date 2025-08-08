# BrightStack IT — Static Website

A responsive static website for a small IT services business (small office IT, individuals/home office, custom gaming PCs, VoIP phone systems, cloud/backup, cybersecurity).

## Quick start

- Open `index.html` directly in your browser, or
- Serve the folder locally:

```bash
cd /workspace
python3 -m http.server 5173
# open http://localhost:5173
```

## Customize

- Company name and contact info: search for `BrightStack IT`, `hello@brightstack.it`, and `+1 (234) 567‑890` across `*.html` and update.
- Logo: replace `assets/img/logo.svg` with your own.
- Colors and styles: edit `assets/css/styles.css`.
- Form recipient: in `assets/js/main.js`, change `to = 'hello@brightstack.it'` to your real inbox.

## Deploy

- GitHub Pages: push and enable Pages on the repository root.
- Netlify/Vercel: drag‑and‑drop the folder; no build step needed.

## Structure

- `index.html` — home/landing
- `services.html` — detailed services
- `about.html` — about/company
- `contact.html` — contact + mailto form
- `assets/css/styles.css` — styles
- `assets/js/main.js` — interactions and form handler
- `assets/img/logo.svg` — logo
