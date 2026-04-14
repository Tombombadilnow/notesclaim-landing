# NotesClaim Landing Page

Static marketing site for NotesClaim. Built with Next.js 14 + Tailwind.

## Local dev

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy

Push to GitHub, connect the repo in [Vercel](https://vercel.com/new). Auto-deploys on every push to `main`.

## Beta signup form

The form at `#signup` POSTs to Formspree. Replace `YOUR_FORM_ID` in `app/page.tsx` with your real Formspree form ID (free tier: 50 submissions/mo at https://formspree.io).

Alternative: swap for a Supabase `beta_signups` table + a `/api/signup` route.

## Edit copy

All copy lives in `app/page.tsx`. Edit, commit, push — Vercel redeploys in seconds.

## Structure

- Hero
- vs ChatGPT comparison (the #4 positioning moat)
- Features grid
- Pricing
- Beta signup
- Footer
