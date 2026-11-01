# Mohamed Abdalla Yahya — Mechatronics Engineering Portfolio

A static personal portfolio website for a Mechatronics Engineering student, built with React, Vite, TypeScript, Tailwind CSS, and Lucide icons. Designed for hosting on GitHub Pages.

## Features

- Single scrolling page with anchor navigation (no routing required)
- Light, clean engineering aesthetic with subtle grid background
- Responsive layout for mobile, tablet, and desktop
- Featured projects with an accessible keyboard-navigable detail modal
- Industrial experience timeline
- Grouped technical skills (no arbitrary progress bars)
- "Currently Exploring" section for an in-progress project
- Education and achievements with optional, hideable fields
- Contact section with email, LinkedIn, GitHub, and CV download
- Accessible (keyboard nav, focus styles, reduced-motion support) and SEO-friendly
- Works under a GitHub Pages project subpath (relative `base` path)
- No backend, database, or API keys required

## Getting started

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev      # start the dev server
```

The site runs on the local dev URL shown in the terminal.

## Building for production

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build locally
```

## How to update your content

Everything you need to edit lives in `src/`.

### 1. Personal details and links — `src/config/site.ts`

Update your:
- name, title, location
- email, LinkedIn URL, GitHub URL
- CV file path (`cvPath`)
- profile image path (`profileImage`)
- hero intro and about text
- education details (year, CGPA, Dean's List, graduation date)

Leave any field you don't want to show as an empty string `""` — the site hides empty fields automatically.

> Insert your real links where the comments say `// <-- Insert ...`.

### 2. Projects — `src/data/projects.ts`

Add, edit, or hide projects. Set `hidden: true` to remove a project without deleting it.

Each project supports optional fields: `image`, `github`, `demo`, `report`. Leave them empty to hide them. Never invent outcomes or metrics — only document what is actually true.

### 3. Experience and skills — `src/data/experience.ts`

Edit the industrial experience timeline, skill groups, and the "Currently Exploring" project. Set `currentlyExploring.enabled = false` to hide that section until you're ready to publish.

## Adding your assets

- **CV:** place your file at `public/assets/cv.pdf`
- **Profile photo:** place at `public/assets/profile.jpg` and set `profileImage: "assets/profile.jpg"`
- **Project images:** set each project's `image` field, e.g. `"assets/projects/pic18f452.jpg"`, and put the file under `public/assets/projects/`

Missing images fall back to a neutral patterned placeholder automatically.

## Hosting on GitHub Pages

1. Create a GitHub repository and push this project to it.
2. Run `npm run build` — the output is in `/dist`.
3. **Option A — GitHub Actions (recommended):** the site uses a relative base path (`base: './'`), so you can deploy the `/dist` folder with any static-site action (e.g. `actions/upload-pages-artifact` + `actions/deploy-pages`). See the official GitHub Pages deployment guides.
4. **Option B — `gh-pages` branch:** push the contents of `/dist` to a branch named `gh-pages`, then in your repo go to **Settings → Pages** and set the source to the `gh-pages` branch (root).
5. For a *project* repository (repo name not equal to your username), the site will be served at `https://<username>.github.io/<repo>/`. The relative base path handles this automatically.
6. Wait a moment for Pages to publish, then open the URL shown in the Pages settings.

## Customization notes

- Colors and fonts live in `tailwind.config.js` and `src/index.css`.
- The hero illustration is an inline SVG in `src/components/Hero.tsx` — no external image required.

## Tech stack

- React 18 + TypeScript
- Vite 7
- Tailwind CSS 3
- lucide-react icons

## License

Personal portfolio content © Mohamed Abdalla Yahya. Template code is free to adapt for your own use.
