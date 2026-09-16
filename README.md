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
- **Project links:** set `link` and `linkLabel` (e.g. `Read thesis`) on a project
  in `site.config.ts`. The whole tile opens the link; video controls remain
  independently clickable. Without a link, the tile is informational.
- **Project media:** optimized WebP images and silent H.264 MP4 videos live in
  `public/projects/`. Set `video` and/or `image` to their public paths in
  `site.config.ts`; `image` also serves as a video's still preview. Use
  `imageAlt` for descriptive alt text and `imageFit: 'contain'` for diagrams
  that must not be cropped. Videos load and loop only while visible, pause
  offscreen, and have a play/pause button. Reduced-motion users see a still
  preview until they choose to play. Images load lazily.
  Original files in `media/` stay local and are ignored by Git; commit the
  optimized assets in `public/projects/` along with the configuration.

### Compress a project video

Install FFmpeg on macOS with `brew install ffmpeg`. Use MP4 for efficient loops:

```bash
ffmpeg -i media/input.mov -map 0:v:0 -an -map_metadata -1 \
  -vf "fps=24,scale=960:540:force_original_aspect_ratio=decrease:force_divisible_by=2,setsar=1" \
  -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p \
  -movflags +faststart public/projects/demo.mp4

ffmpeg -ss 1 -i public/projects/demo.mp4 -frames:v 1 \
  -q:v 3 public/projects/demo.jpg
```

This preserves the full clip and its aspect ratio while removing audio and
limiting resolution and frame rate. Set the resulting still image as the video's
`image` in `site.config.ts`.

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
