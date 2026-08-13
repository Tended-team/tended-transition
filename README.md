# ApexCare Team Hub — The Next Chapter

Internal hub for the ApexCare team communicating the leadership transition (Joe, Matt, and
Matt, operating as Tended, leading the road ahead; founder Jason Wu staying as owner).
Jason's Day-1 message, what's changing and what isn't, the three names, who's who, an FAQ,
the first 100 days, and an "Ask anything" form. Not public (`noindex`).

## Stack

Aligned with the [Foundation Architecture](https://foundation.h11h.io/), scoped for a
static site plus one Cloud Function:

- **Vite** + **React** + **TypeScript**
- **TanStack Router** (code-based, single route today; room to grow)
- **Tailwind CSS v4** — tokens in `src/styles.css` (dark + light registers via
  `[data-theme]`, toggled in the header), sourced from `DESIGN.md`
- **Biome** for lint + format
- Static SPA on **Firebase Hosting**; one **Cloud Function** (`functions/`) for the form

TanStack Query is intentionally omitted: no client-side server data yet.

## Develop

```bash
npm install
npm run dev
```

## Build & check

```bash
npm run build      # tsc typecheck + vite build → dist/
npm run lint       # biome check
npm run format     # biome format --write
```

## "Ask anything" form → email

The form POSTs to the `submitQuestion` Cloud Function (`functions/src/index.ts`), fronted
same-origin by a Hosting rewrite (`/api/ask` → function). The function emails the question
to `MAIL_TO` (default `jo@tended.team`) over SMTP using Nodemailer, with a honeypot and
length checks. Anonymous mode collects no name; follow-up mode includes one.

Configure the SMTP secret before deploying (any provider; example is Google Workspace):

```bash
firebase functions:secrets:set SMTP_URL
# value e.g. smtps://no-reply@tended.team:APP_PASSWORD@smtp.gmail.com:465
```

`MAIL_TO` / `MAIL_FROM` default in code; override via `functions/.env` if needed. To test
locally, run the Functions + Hosting emulators, or point the app at the emulator with
`VITE_ASK_ENDPOINT` in a `.env` file.

## Deploy (Firebase)

1. Set the project id in `.firebaserc` (replace the placeholder), or run `firebase use --add`.
2. Set the `SMTP_URL` secret (above).
3. Build and deploy hosting + functions:

```bash
npm run build
firebase deploy --only hosting,functions
```

`firebase.json` serves `dist/`, routes `/api/ask` to the function, rewrites everything else
to `index.html` (SPA), and long-caches hashed assets.

## Content & brand

- Editable copy/data lives in `src/content.ts`; Jason's letter is inline in
  `src/components/sections/Message.tsx`. `[bracketed]` items still need confirming.
- Brand system: `DESIGN.md`. Audience and voice: `PRODUCT.md`.
- `public/styleguide.html` is a standalone visual style guide for both brands.
- ApexCare logos in `public/assets` are the real marks (theme-swapped). The Tended wordmark
  is a DM Serif Display stand-in matching the kit construction; drop the official outlined
  SVG from the Tended Logo Kit (SharePoint) into `public/assets` and wire it in `Wordmark.tsx`.
