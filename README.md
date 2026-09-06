# Kronex Technologies Website

Root structure for GitHub Pages / static hosting.

- `index.html` — Kronex Technologies homepage
- `apps.html` — portfolio directory; intentionally keeps app details minimal
- `juice-sort.html` — dedicated Juice Sort product page with full app details
- `privacy-policy.html` — Juice Sort privacy policy
- `terms-of-use.html` — Juice Sort terms of use
- `style.css` — shared responsive design
- `script.js` — mobile navigation and reveal animations

## Juice Sort status
Juice Sort is explicitly marked **Under closed testing**. It is not presented as publicly released.

## Recommended future structure
For each new app, add:
1. A compact card/link in `apps.html`
2. A dedicated `<app-name>.html` page containing the app's details
3. `<app-name>-privacy.html` and/or `<app-name>-terms.html` when the app requires separate legal pages

The main Kronex site should remain a portfolio/directory rather than a full app-details page.
