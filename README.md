# Tanmay Singh — Portfolio

Personal portfolio site for Tanmay Singh, an aspiring AI Engineer. Built with the Next.js App Router, React, TypeScript, and Tailwind CSS.

**Live site:** [tanmayportfolio-five.vercel.app](https://tanmayportfolio-five.vercel.app)

## Tech stack

- [Next.js](https://nextjs.org) (App Router, Turbopack)
- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev) for scroll/entry animations
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode
- Hosted on [Vercel](https://vercel.com)

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. It hot-reloads as you edit files under [src/](src/).

## Project structure

```
src/
  app/                # App Router entry point, layout, metadata, SEO files
  components/
    sections/          # One component per page section (Hero, About, Projects, ...)
    ui/                # Small shared building blocks (Section, SectionHeading)
  data/
    portfolio.ts       # Single source of truth for all site content
  lib/
    utils.ts           # Shared helpers (e.g. `cn` for class merging)
public/
  certificates/        # Certificate PDFs linked from the Certifications section
  resume.pdf           # Resume linked from the Hero "View Resume" button
```

All personal content (bio, skills, projects, certifications, links) lives in [src/data/portfolio.ts](src/data/portfolio.ts) — update that file to change what's shown on the site rather than editing components directly.

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Deployment

The site auto-deploys to [Vercel](https://vercel.com) on push. To deploy manually, run `npm run build` and follow the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
