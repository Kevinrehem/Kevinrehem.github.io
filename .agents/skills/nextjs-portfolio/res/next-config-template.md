# Next.js Config Template

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
```

## Key Points

- `output: 'export'` — generates static HTML/CSS/JS into `out/` directory
- `images: { unoptimized: true }` — required because Next.js Image Optimization needs a server
- **Do NOT add** `basePath` for user sites (`username.github.io`)
- **Do NOT add** API routes — they are incompatible with static export
