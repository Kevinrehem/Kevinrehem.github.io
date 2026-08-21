---
name: nextjs-portfolio
description: >
  Skill for building and maintaining a Next.js 15 portfolio site with App Router,
  TypeScript, Tailwind CSS v4, shadcn/ui, and Framer Motion. Covers static export
  configuration, GitHub Pages deployment via GitHub Actions, dark/light theme toggle,
  and component architecture patterns.
---

# Next.js Portfolio Skill

## Overview

This skill covers the architecture and deployment of a Next.js 15 portfolio site
deployed to GitHub Pages as a static export.

## Core Rules

### 1. Static Export Only
- Always use `output: 'export'` in `next.config.ts`
- **No API routes** — they are incompatible with static export
- **No SSR** — all pages are statically generated at build time

### 2. Client Components
- shadcn/ui components require `"use client"` directive
- Framer Motion components require `"use client"` directive
- `next-themes` ThemeProvider requires `"use client"` directive

### 3. Image Configuration
- `images: { unoptimized: true }` is **mandatory** for static export
- Next.js Image Optimization requires a server — static export cannot use it
- Use `<Image>` component with `unoptimized` globally set

### 4. No basePath
- User sites (`username.github.io`) do **not** need `basePath`
- Only project sites (`username.github.io/repo-name`) need `basePath`

### 5. `.nojekyll` File
- Always include `public/.nojekyll` (empty file)
- This prevents GitHub Pages Jekyll processing which would ignore `_next/` directory

### 6. Theme System
- CSS variables defined in `globals.css` using `:root` and `.dark` selectors
- Tailwind CSS v4 `@theme inline` block maps CSS variables to Tailwind tokens
- `next-themes` manages dark/light mode with `attribute="class"` strategy
- Theme persists via `localStorage`

### 7. Font
- **Lexend** from Google Fonts
- Configured via `next/font/google` in `layout.tsx`
- CSS variable `--font-sans` set to Lexend

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 15 | Framework (App Router) |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | v4 | Utility-first CSS |
| shadcn/ui | latest | UI component library |
| Framer Motion | latest | Animations |
| next-themes | latest | Dark/light mode |
| lucide-react | latest | Icons |

## Project Structure

See `res/project-structure.md` for the full directory layout.

## Deployment

See `res/github-actions-deploy.md` for the GitHub Actions workflow.

## Component Patterns

See `res/component-patterns.md` for reusable patterns.
