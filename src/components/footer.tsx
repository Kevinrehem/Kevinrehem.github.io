"use client";

import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
          © {new Date().getFullYear()} Kevin Ávila Rehem. Feito com Next.js &{" "}
          <Heart size={14} className="text-primary fill-primary" />
        </p>
      </div>
    </footer>
  );
}
