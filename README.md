# Personal website

A fast, single-page personal site + project portfolio, built with
[Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).
Zero client-side JavaScript by default, dark mode, responsive, SEO-ready.

## Prerequisites — Node version

This project needs **Node ≥ 20.19** (Astro 5's toolchain requires it). Your
machine's default Node (20.12.2) is too old, so an [`.nvmrc`](.nvmrc) pins the
project to Node 22. Before running anything, in this folder:

```bash
nvm use          # reads .nvmrc → Node 22 (run `nvm install 22` once if needed)
```

Your global default Node is left untouched — this only applies in this folder.

## Develop

```bash
npm install
npm run dev      # → http://localhost:4321
```

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the built site locally               |

## Make it yours

Almost everything lives in **one file**: [`src/site.config.ts`](src/site.config.ts).
Edit your name, role, bio, skills, social links, and projects there — the whole
page updates automatically. Other things you might tweak:

- **Photo:** your hero headshot lives at `public/diego-arapovic.jpg`, referenced by
  `avatar` in `site.config.ts`. Replace the file (or change `avatar`) to swap it;
  set `avatar: ''` to remove it.
- **Email:** stored base64-encoded in `socials.emailEncoded` (so it isn't scrapable) and turned into a `mailto:` link in the browser. To change it, run `btoa('you@example.com')` in a browser console and paste the result.
- **Favicon:** [`public/favicon.svg`](public/favicon.svg) (currently a "D" monogram).
- **Accent color:** it's Tailwind's `indigo`. Find-and-replace `indigo` →
  `emerald` / `rose` / `violet` etc. across `src/` to re-theme.
- **Project media:** each project tile can show a **looping video** or an image.
  Drop the file in `public/` (e.g. `public/projects/thesis.mp4`) and set
  `video: '/projects/thesis.mp4'` (or `image: '/projects/thesis.png'`) on that
  project in `site.config.ts`. The video autoplays muted on a loop, and an
  `image` doubles as its poster. With neither, the tile shows a gradient panel.

## Deploy

First, set your real URL in [`astro.config.mjs`](astro.config.mjs) (the `site`
field) — it's used for canonical links and social previews.

### Option A — Vercel or Netlify (simplest)

1. Push this repo to GitHub.
2. Import it at [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com).
3. They auto-detect Astro (build: `npm run build`, output: `dist`) — just click deploy.

You get a free `*.vercel.app` / `*.netlify.app` URL; add a custom domain in the
dashboard whenever you like.

### Option B — GitHub Pages (the `username.github.io` route)

A workflow is included at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. **User site** (`<username>.github.io` repo): set `site: 'https://<username>.github.io'`
   in `astro.config.mjs`.
   **Project site** (any other repo name): also add `base: '/<repo-name>'`.
2. Push to the `main` branch.
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The site rebuilds and redeploys on every push to `main`.
