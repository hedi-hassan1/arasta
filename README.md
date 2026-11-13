# ئاڕاستە — Arasta website

Website for Arasta in Sorani (default), Arabic and English, with a language button in the header: study in Poland, study in Europe,
systems & technology for business, and travel services.

## Stack
- React (Create React App) + React Router
- Tailwind CSS with the Arasta brand tokens (`tailwind.config.js`)
- Fonts self-hosted in `src/fonts/` (Noto Kufi Arabic, Noto Sans Arabic — SIL Open Font License)

## Editing content
All text lives in `src/content.js`, one block per language (`ckb`, `ar`, `en`). The chosen language is saved in the browser; `src/i18n.js` sets `lang` and `dir` (rtl/ltr) on the page.
Logos are in `public/brand/` and come from the Arasta brand kit — do not redraw them.

## Run
```
npm install
npm start      # http://localhost:3000
npm run build  # production build in /build
```

`vercel.json` sends every route to `index.html` so links like `/services` work on refresh.
