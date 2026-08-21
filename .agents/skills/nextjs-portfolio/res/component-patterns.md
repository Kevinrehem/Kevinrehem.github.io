# Component Patterns

## Client Component Directive

All interactive components must include `"use client"` as the first line:

```tsx
"use client";

import { motion } from "framer-motion";
// ...
```

## Section Wrapper Pattern

Use a reusable `SectionWrapper` for scroll-triggered animations:

```tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function SectionWrapper({ children, id, className }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
```

## Theme Provider Pattern

Wrap the app with `next-themes` ThemeProvider:

```tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  );
}
```

## Smooth Scroll Navigation

Use anchor links with `scroll-behavior: smooth`:

```tsx
<a href="#about" className="...">Sobre</a>
```

Add to `globals.css`:
```css
html {
  scroll-behavior: smooth;
}
```
