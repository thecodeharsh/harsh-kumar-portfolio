# Harsh Kumar — Personal Portfolio

A premium, fully responsive personal portfolio built with **React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion**. It represents Harsh Kumar, an Electronics & Communication Engineering student working across embedded systems, IoT, wireless communication, UAVs and software development.

Live features: animated hero circuit visual, dark/light mode with system-preference detection, a categorized skills section, an experience timeline, a featured-project spotlight, an achievements/certificates gallery with a preview modal, a Ctrl+K command palette, a playful "Engineering Mode" status dashboard, and full keyboard/reduced-motion accessibility support.

---

## 1. Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (via `@tailwindcss/vite`, config lives in `src/index.css` using `@theme`)
- Framer Motion (animation)
- lucide-react (icons; GitHub/LinkedIn glyphs are custom SVGs in `src/components/icons.tsx` since lucide-react no longer ships brand icons)

No backend, no paid APIs, no CMS — it's a 100% static site.

---

## 2. Run it locally

```bash
npm install
npm run dev       # starts a dev server, usually at http://localhost:5173
npm run build     # type-checks and produces a production build in /dist
npm run preview   # serves the production build locally to sanity-check it
```

---

## 3. Where to put your content

Everything content-related lives in `src/data/`, so you never have to touch component code to update information:

| File | What it controls |
|---|---|
| `src/data/profile.ts` | Name, tagline, about text, education, stats, resume/portfolio paths, social links (GitHub/LinkedIn/email), SEO title & description, hero node labels |
| `src/data/skills.ts` | The four skill categories and their chips |
| `src/data/experience.ts` | The vertical timeline entries |
| `src/data/projects.ts` | The featured project (SNIPS) and the other project cards |
| `src/data/achievements.ts` | Achievement banner(s) and the certificate gallery |

### Add your GitHub URL

Open `src/data/profile.ts` and replace:

```ts
social: {
  github: '[ADD GITHUB URL]',
  ...
}
```

with your real GitHub profile or repo URL. Every GitHub button/link on the site pulls from this single field.

### Replace the resume

Put your real PDF at:

```
public/resume/Harsh-Kumar-Resume.pdf
```

(overwrite the placeholder file that's already there — it currently just says "Resume Placeholder" so you can see the download/view flow working). The "View Resume" and "Download Resume" buttons across the site already point at this path via `profile.resumePath` in `src/data/profile.ts`. If you rename the file, update that path too.

The "Download Portfolio" button under the Resume section points at `public/resume/Harsh-Kumar-Portfolio.pdf` (`profile.portfolioPdfPath`) — replace that once you have a printable portfolio PDF, or remove the button if you don't plan to make one.

### Replace certificates

Put your certificate files (PDF or image) in:

```
public/certificates/
```

Then edit `src/data/achievements.ts` and update each certificate's `fileUrl` to point at the new file, e.g.:

```ts
{
  id: 'cert-ceeri',
  title: 'Advanced Industrial IoT Skill Development Training',
  organization: 'CSIR–CEERI, Jaipur Campus',
  date: 'August 2026',
  description: '...',
  fileUrl: '/certificates/ceeri-iiot-certificate.pdf',
}
```

### Fill in remaining placeholders

A few fields were left as clearly-marked placeholders because the source brief didn't provide the information. Search the codebase for `[ADD` to find every one, including:

- `[ADD GITHUB URL]` / `[ADD GITHUB PROJECT URL]` — GitHub profile and per-project repo links
- `[ADD PROJECT URL]` — live/demo link for the SNIPS project
- `[ADD CANONICAL URL]` / `[ADD OG IMAGE URL]` in `index.html` — set these once the site has a real domain
- North Western Railway internship description/technologies in `src/data/experience.ts`

```bash
grep -rn "\[ADD" src index.html
```

---

## 4. Project structure

```
src/
  components/       # Navbar, Hero, About, Skills, Experience, Projects,
                     # Achievements, Certificates, ResumeCTA, Contact, Footer,
                     # ThemeToggle, EngineeringMode, CommandPalette, etc.
  data/              # All editable content (profile, skills, experience, projects, achievements)
  hooks/             # useTheme, useReducedMotion, useActiveSection, useScrolled
  utils/             # scrollToId helper
  App.tsx
  main.tsx
  index.css          # Design tokens (colors, fonts, keyframes) via Tailwind v4 @theme
public/
  resume/            # Resume + portfolio PDFs
  certificates/       # Certificate files
  favicon/           # Favicon SVG
```

---

## 5. Deployment (all free)

The site builds to a static `/dist` folder, so any static host works. `vite.config.ts` uses `base: './'` (relative paths) so the build works from any subpath without extra config.

### GitHub Pages

1. Push this project to a GitHub repository.
2. Install the gh-pages helper: `npm install -D gh-pages`
3. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.
5. In your repo settings → Pages, set the source to the `gh-pages` branch.

### Vercel

1. Push the project to GitHub.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — Vercel handles the rest automatically on every push.

### Cloudflare Pages

1. Push the project to GitHub.
2. Go to the Cloudflare dashboard → Pages → Create a project → connect the repo.
3. Build command: `npm run build`. Build output directory: `dist`.
4. Deploy.

### Netlify

1. Push the project to GitHub, or drag-and-drop the `/dist` folder after running `npm run build` directly into Netlify's dashboard.
2. If connecting the repo instead: build command `npm run build`, publish directory `dist`.

### Custom domain

All four hosts above support adding a custom domain for free from their dashboard (Pages/Vercel/Netlify → Domains). Once you have one, update `[ADD CANONICAL URL]` and `[ADD OG IMAGE URL]` in `index.html` so social-share previews and search engines pick up the right URL.

---

## 6. Accessibility & performance notes

- Respects `prefers-reduced-motion`: animations are cut to near-zero duration automatically.
- Full keyboard navigation, visible focus rings, skip-to-content link, `aria-label`s on icon-only buttons, and a `role="dialog"` + `aria-modal` on the certificate modal and command palette.
- Theme preference is stored in `localStorage` and falls back to the OS-level `prefers-color-scheme` on first visit.
- No layout-shifting hero image — the hero visual is inline SVG, so there's nothing to lazy-load or optimize further.
- Everything ships as a single static JS/CSS bundle (~114 KB gzipped JS, ~7 KB gzipped CSS) with no runtime backend calls.

---

## 7. Customizing further

- **Colors/typography**: edit the `@theme` block and `html.light` overrides at the top of `src/index.css`.
- **Hero circuit diagram**: edit `heroNodes` / `heroConnections` in `src/data/profile.ts` to change which technologies are shown and how they connect.
- **Command palette actions**: edit the `items` array in `src/components/CommandPalette.tsx`.
- **Engineering Mode dashboard rows**: edit `statusRows` in `src/components/EngineeringMode.tsx`.
