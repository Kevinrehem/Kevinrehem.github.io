"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ChevronDown } from "lucide-react";

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/kevin-ávila-rehem-1781301a5",
    icon: LinkedinIcon,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Kevinrehem",
    icon: GithubIcon,
    label: "GitHub",
  },
  {
    href: "mailto:kevin.rehem@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12"
      >
        {/* Profile Photo */}
        <motion.div variants={itemVariants} className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-primary/60 to-primary/20 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
            <Image
              src="/images/foto-perfil.jpeg"
              alt="Foto de Kevin Ávila Rehem"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <motion.p
            variants={itemVariants}
            className="text-sm font-medium text-primary uppercase tracking-wider mb-2"
          >
            Olá, eu sou
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3"
          >
            Kevin Ávila Rehem
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-medium text-primary mb-3"
          >
            Desenvolvedor Full Stack & Estagiário em IA
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground max-w-lg mb-6"
          >
            Construindo soluções robustas com qualidade técnica e visão de negócio
          </motion.p>

          {/* CTA & Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <a 
              href="/curriculo.pdf" 
              download
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25"
            >
              Baixar Currículo
            </a>

            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" as const }}
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
