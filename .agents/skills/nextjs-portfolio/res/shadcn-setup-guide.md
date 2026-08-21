# shadcn/ui Setup Guide

## Initialization

```bash
npx shadcn@latest init
```

When prompted:
- Style: Default
- Color: Neutral (or your preference)
- CSS variables: Yes

## Required Components

```bash
npx shadcn@latest add button card badge separator tooltip
```

## Integration with Tailwind CSS v4

shadcn/ui v4 is designed for Tailwind CSS v4. The CSS variables in `globals.css` 
map directly to shadcn/ui's expected variable names:

- `--background`, `--foreground`
- `--card`, `--card-foreground`
- `--primary`, `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- `--muted`, `--muted-foreground`
- `--accent`, `--accent-foreground`
- `--border`, `--input`, `--ring`
- `--radius`

## Theme Compatibility

The `@theme inline` block in `globals.css` maps CSS variables to Tailwind tokens,
making `bg-primary`, `text-foreground`, etc. work correctly with dark mode.
