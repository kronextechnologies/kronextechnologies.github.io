# Kronex Technologies Website

Static GitHub Pages website for Kronex Technologies.

## Structure
- `index.html` — company homepage
- `apps/lockin.html` — LockIn product page
- `apps/d2d.html` — D2D product page
- `apps/APP_TEMPLATE.html` — duplicate this when adding a new app
- `privacy.html` — existing LockIn privacy-policy URL, preserved for compatibility
- `terms.html` — existing LockIn terms URL, preserved for compatibility
- `app-ads.txt` — AdMob declaration; keep this at the repository root
- `assets/css/style.css` — global styles
- `assets/js/main.js` — navigation, year, and reveal effects
- `assets/images/` — brand assets

## Add another app
1. Copy `apps/APP_TEMPLATE.html`.
2. Rename the copy, e.g. `apps/myapp.html`.
3. Replace the ALL-CAPS placeholders.
4. Add a product card/link for it in the `#products` section of `index.html`.
5. If the app needs public legal URLs, create separate policy/terms pages for that app instead of overwriting another product's legal text.

## Deploy
Commit and push to the `main` branch. GitHub Pages will publish the update automatically if Pages is configured to deploy from that branch.
