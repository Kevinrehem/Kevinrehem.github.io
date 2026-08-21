# Project Structure

```
Kevinrehem.github.io/
├── .agents/
│   └── skills/
│       └── nextjs-portfolio/
│           ├── SKILL.md
│           └── res/
│               ├── next-config-template.md
│               ├── github-actions-deploy.md
│               ├── shadcn-setup-guide.md
│               ├── component-patterns.md
│               └── project-structure.md
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── .nojekyll
│   └── images/
│       └── foto-perfil.jpeg
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/              # shadcn/ui generated components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── separator.tsx
│   │   │   └── tooltip.tsx
│   │   ├── navbar.tsx
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── github-stats-section.tsx
│   │   ├── footer.tsx
│   │   ├── theme-provider.tsx
│   │   └── section-wrapper.tsx
│   └── lib/
│       └── utils.ts          # shadcn/ui utility (cn function)
├── components.json           # shadcn/ui config
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```
