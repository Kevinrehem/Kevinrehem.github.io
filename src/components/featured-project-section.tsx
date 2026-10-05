"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Sparkles, Sword, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const featuredProjects = [
  {
    name: "Dungeoneer",
    subtitle: "Plataforma Avançada de Gestão para D&D 5e (2014 & 2024)",
    description: "Dungeoneer é meu projeto mais ambicioso. Construído com uma arquitetura moderna e escalável, o projeto foca na união de microsserviços sob o padrão de Clean Architecture e um robusto API Gateway. A proposta traz uma imersão tecnológica que vai desde a gestão de autenticação segura (JWT) até um ecossistema modular através de Umbrella Repos.",
    status: "Em Desenvolvimento",
    techStack: [
      "Next.js",
      "JWT Auth",
      "API Gateway",
      "API RESTful",
      "Clean Arch",
      "Microservices",
      "Umbrella Repos",
    ],
    deployUrl: "https://dungeoneer-xi.vercel.app",
    repoUrl: "https://github.com/Witches-Of-The-Country/Dungeoneer",
    icon: Sword,
  },
  {
    name: "Landpager",
    subtitle: "Plataforma SaaS para criação e gestão de Landing Pages de alta performance.",
    description: "Landpager é uma plataforma focada na construção e otimização de landing pages para conversão. Com uma interface intuitiva, a ferramenta permite a criação rápida de páginas de alta performance sem necessidade de codificação complexa. Destaca-se pelas suas integrações robustas com ferramentas avançadas, como a API do Mercado Pago para pagamentos, Cal.com para gerenciamento de agenda, envio de e-mails transacionais via SMTP, além de contar com um aplicativo Android (React Native) dedicado ao gerenciamento do painel administrativo.",
    status: "Em Produção",
    techStack: [
      "Next.js",
      "TypeScript",
      "Mercado Pago API",
      "Cal.com API",
      "SMTP",
      "React Native",
      "Android",
    ],
    deployUrl: "https://landpager.com",
    repoUrl: null,
    icon: LayoutTemplate,
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 } 
  },
};

export function FeaturedProjectSection() {
  return (
    <SectionWrapper id="featured-project" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              Projetos em Destaque
            </h2>
          </div>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </div>

        <div className="space-y-8">
          {featuredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.name}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="overflow-hidden border-border bg-card shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      
                      {/* Visual Area */}
                      <div className="md:w-2/5 bg-muted/30 flex flex-col items-center justify-center p-10 border-b md:border-b-0 md:border-r border-border relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="p-6 rounded-full bg-primary/10 text-primary mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500">
                          <Icon size={64} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground relative z-10 text-center">{project.name}</h3>
                        <p className="text-sm text-muted-foreground mt-2 relative z-10 text-center px-4">{project.subtitle}</p>
                      </div>

                      {/* Content Area */}
                      <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-between space-y-6">
                        <div>
                          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium mb-4">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            {project.status}
                          </div>

                          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                            {project.description}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-foreground">Tecnologias Utilizadas</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <Badge 
                                key={tech} 
                                variant="outline" 
                                className="text-xs border-primary/30 text-primary/80"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4 border-t border-border/50">
                          <Link href={project.deployUrl} target="_blank" rel="noopener noreferrer">
                            <Button className="gap-2 w-full sm:w-auto">
                              <ExternalLink size={16} />
                              Ver Deploy
                            </Button>
                          </Link>
                          {project.repoUrl && (
                            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                              <Button variant="outline" className="gap-2 group w-full sm:w-auto">
                                <GithubIcon className="w-4 h-4 group-hover:text-primary transition-colors" />
                                Repositório
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
