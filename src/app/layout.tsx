import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kevin Rehem | Desenvolvedor Full Stack & IA",
  description:
    "Portfólio de Kevin Ávila Rehem — Desenvolvedor Full Stack e Estagiário em Inteligência Artificial. Construindo soluções robustas com qualidade técnica e visão de negócio.",
  keywords: [
    "Kevin Rehem",
    "Desenvolvedor Full Stack",
    "Inteligência Artificial",
    "Java",
    "Spring Boot",
    "TypeScript",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Kevin Ávila Rehem" }],
  openGraph: {
    title: "Kevin Rehem | Desenvolvedor Full Stack & IA",
    description:
      "Portfólio de Kevin Ávila Rehem — Desenvolvedor Full Stack e Estagiário em Inteligência Artificial.",
    type: "website",
    locale: "pt_BR",
    url: "https://kevinrehem.github.io",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${lexend.variable} font-sans min-h-screen flex flex-col antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
