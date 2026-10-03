# Tanmay Singh — Personal Portfolio

> Personal portfolio website with my projects, skills, education, certificates, and coding profiles, built with Next.js.

## Quick Links

| | |
|---|---|
| Live portfolio | [tanmayportfolio-five.vercel.app](https://tanmayportfolio-five.vercel.app) |
| This repository | [TanmaySingh2711/tanmay_portfolio](https://github.com/TanmaySingh2711/tanmay_portfolio) |
| Resume | [public/resume.pdf](public/resume.pdf) |
| GitHub profile | [TanmaySingh2711](https://github.com/TanmaySingh2711) |
| LinkedIn | [tanmay-singh](https://linkedin.com/in/tanmay-singh-216380334/) |
| GeeksforGeeks | [tanmaysiaq6p](https://www.geeksforgeeks.org/profile/tanmaysiaq6p) |
| HackerRank | [tanmaysingh4628](https://www.hackerrank.com/profile/tanmaysingh4628) |
| LeetCode | [vcYjoLhKrp](https://leetcode.com/u/vcYjoLhKrp/) |

## Project Preview

This repository does not include screenshots yet. The best preview is the live site: **[tanmayportfolio-five.vercel.app](https://tanmayportfolio-five.vercel.app)**.

## Table of Contents

- [Overview](#overview)
- [Website Sections](#website-sections)
- [Tech Stack](#tech-stack)
- [Featured Projects](#featured-projects)
- [Resume](#resume)
- [Certifications and Certificate Files](#certifications-and-certificate-files)
- [Requirements](#requirements)
- [Installation](#installation)
- [One-Click Setup](#one-click-setup)
- [Run Locally](#run-locally)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [CI / GitHub Actions](#ci--github-actions)
- [Deployment](#deployment)
- [Environment and Configuration](#environment-and-configuration)
- [License](#license)
- [Author and Contact](#author-and-contact)

## Overview

This is a single-page portfolio website. Visitors can read a short introduction, see my education and skills, browse my projects with links to their code, open my resume and certificates, and find my coding profiles and contact details.

It supports light and dark mode, and the navigation bar scrolls smoothly to each section.

All the content (text, skills, projects, links) is stored in one file, [src/data/portfolio.ts](src/data/portfolio.ts). To change what the website shows, edit that file instead of the components.

## Website Sections

The page shows these sections, in this order:

| Section | What it shows |
|---|---|
| Hero | Name, title, short summary, a **View Resume** button, and GitHub / LinkedIn / email icons |
| About | A few short paragraphs about me |
| Education | Degree, college, location, years, and CGPA |
| Skills | Skills grouped by category (languages, AI & ML, frameworks, APIs & databases, tools) |
| Projects | Project cards with the tech stack, a description, and a **View on GitHub** button |
| Hackathons | Hackathon participation, each with a link to its certificate |
| Coding Profiles | Links to GeeksforGeeks, HackerRank, and LeetCode |
| Certifications | Course certificates, each with a **View Certificate** button |
| Contact | Phone, email, GitHub, and LinkedIn |

## Tech Stack

**Framework and language**

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)

**Styling and UI**

- [Tailwind CSS](https://tailwindcss.com) v4
- [Framer Motion](https://motion.dev) for the fade-in animation on each section
- [Lucide React](https://lucide.dev) and [React Icons](https://react-icons.github.io/react-icons/) for icons
- [next-themes](https://github.com/pacocoursey/next-themes) for light / dark / system theme
- `clsx` and `tailwind-merge` for combining class names

**Tooling**

- ESLint with `eslint-config-next`
- GitHub Actions for CI

**Hosting**

- [Vercel](https://vercel.com)

The website also generates its own SEO files with Next.js: page metadata, Open Graph image, `sitemap.xml`, `robots.txt`, web app manifest, and favicons (all in [src/app/](src/app/)).

## Featured Projects

| Project | Description | Main tech | Code |
|---|---|---|---|
| CNN-Based Gesture Controlled Pac-Man | Plays a Pac-Man-style game using hand gestures from the webcam, recognized by a CNN | Python, PyTorch, OpenCV, CUDA, Pygame | [GitHub](https://github.com/TanmaySingh2711/gesture-controlled-game) |
| Glitch Hunter – AI Game Testing System | A reinforcement learning agent plays a game and a live dashboard shows the bugs it finds | Python, Stable-Baselines3, Gymnasium, Flask | [GitHub](https://github.com/TanmaySingh2711/glitch_hunter_project) |
| Razorpay Agentic Commerce | An AI shopping assistant that completes purchases with approval checks and Razorpay test payments | TypeScript, Next.js, PostgreSQL, Gemini API, Razorpay API | [GitHub](https://github.com/TanmaySingh2711/razorpay-agentic-commerce) |

## Resume

- File: [public/resume.pdf](public/resume.pdf)
- On the website, the **View Resume** button in the Hero section opens `/resume.pdf` in a new tab.
- To update it, replace `public/resume.pdf` with the new PDF (keep the same file name) and push.

## Certifications and Certificate Files

All certificate PDFs are in [public/certificates/](public/certificates/). Each website card links to its file, for example `/certificates/hackathon-24-kssem.pdf`. The button says **View Certificate** for PDFs and **Verify Certificate** for any other kind of link.

**Certifications section**

| Certificate | Issuer | Year | File |
|---|---|---|---|
| Introduction to Machine Learning | VOIS | 2025 | `introduction-to-machine-learning-vois.pdf` |
| Getting Started with Artificial Intelligence | IBM SkillsBuild | 2024 | `getting-started-with-ai-ibm.pdf` |
| Generative AI Literacy | IT-ITeS SSC / FutureSkills Prime | 2025 | `generative-ai-literacy-futureskills.pdf` |

**Hackathons section**

| Event | Level | Year | File |
|---|---|---|---|
| Hire-4-Thon | National | 2026 | `hire-4-thon-national-hackathon.pdf` |
| Hackathon-24 | College | 2024 | `hackathon-24-kssem.pdf` |

To add one, put the PDF in `public/certificates/` and add an entry to `certifications` or `hackathons` in [src/data/portfolio.ts](src/data/portfolio.ts).

## Requirements

- [Node.js](https://nodejs.org) 20 or newer (the setup scripts check this)
- npm (comes with Node.js)
- [Git](https://git-scm.com), to clone the repository

It runs on Windows, macOS, and Linux.

## Installation

```bash
git clone https://github.com/TanmaySingh2711/tanmay_portfolio.git
cd tanmay_portfolio
npm install
```

## One-Click Setup

The repository has setup scripts that check your Node.js version and install the dependencies for you.

**Windows**

```text
setup.bat
```

**macOS / Linux**

```bash
./setup.sh
```

On Windows you can also double-click `run_dev.bat`. It runs the setup first if dependencies are missing, then starts the dev server.

## Run Locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). The page reloads automatically when you save a file.

## Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run start` | Serves the production build |
| `npm run lint` | Checks the code with ESLint |
| `npm run typecheck` | Generates route types and checks TypeScript |

## Project Structure

```text
src/
  app/               Layout, page, metadata, icons, sitemap, robots, error and 404 pages
  components/
    sections/        One component per website section
    ui/              Shared pieces (Section, SectionHeading, CredentialCard)
  data/portfolio.ts  All the website content
  lib/utils.ts       Small helper for combining class names
public/
  resume.pdf         Resume
  certificates/      Certificate PDFs
.github/workflows/   CI workflow
setup.bat, setup.sh  One-click setup scripts
run_dev.bat          Windows shortcut to start the dev server
```

## CI / GitHub Actions

The workflow is [.github/workflows/ci.yml](.github/workflows/ci.yml), named **CI**. It runs on every push to `main` and on every pull request. A newer run on the same branch cancels the older one.

| Job | What it does | Runs on |
|---|---|---|
| Lint | `npm run lint` | Ubuntu |
| Type check | `npm run typecheck` | Ubuntu |
| Build | `npm ci` and `npm run build` | Ubuntu, macOS, Windows |
| One-click setup | Runs `setup.sh` or `setup.bat`, then checks that Next.js is installed | Ubuntu, macOS, Windows |

All jobs use Node.js 22.

## Deployment

The live site is hosted on [Vercel](https://vercel.com) at [tanmayportfolio-five.vercel.app](https://tanmayportfolio-five.vercel.app). Vercel builds the Next.js app and deploys it whenever changes are pushed to the repository.

There is no Vercel config file in the repo; deployment is managed from the Vercel dashboard. The site address used for SEO files (`siteUrl`) is set in [src/data/portfolio.ts](src/data/portfolio.ts), so update it there if the domain ever changes.

## Environment and Configuration

No environment variables are needed. You can run and build the project without a `.env` file, and there are no API keys or secrets in the code.

Other configuration lives in these files:

- [next.config.ts](next.config.ts): hides the `X-Powered-By` header and adds basic security headers
- [eslint.config.mjs](eslint.config.mjs) and [tsconfig.json](tsconfig.json): lint and TypeScript settings
- [src/app/globals.css](src/app/globals.css): theme colors for light and dark mode

## License

This repository does not have a license file. All rights are reserved by the author.

## Author and Contact

Built and maintained by **Tanmay Singh**.

- Portfolio: [tanmayportfolio-five.vercel.app](https://tanmayportfolio-five.vercel.app)
- Email: [tanmaysingh8970@gmail.com](mailto:tanmaysingh8970@gmail.com)
- LinkedIn: [tanmay-singh-216380334](https://linkedin.com/in/tanmay-singh-216380334/)
- GitHub: [TanmaySingh2711](https://github.com/TanmaySingh2711)
- GeeksforGeeks: [tanmaysiaq6p](https://www.geeksforgeeks.org/profile/tanmaysiaq6p)
- HackerRank: [tanmaysingh4628](https://www.hackerrank.com/profile/tanmaysingh4628)
- LeetCode: [vcYjoLhKrp](https://leetcode.com/u/vcYjoLhKrp/)
