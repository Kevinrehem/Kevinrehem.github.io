"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FolderGit2 } from "lucide-react";
import Link from "next/link";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const getLanguageColor = (lang: string) => {
  switch (lang) {
    case 'Java': return 'bg-[#b07219]';
    case 'TypeScript': return 'bg-[#3178c6]';
    case 'JavaScript': return 'bg-[#f1e05a]';
    default: return 'bg-[#8b949e]';
  }
};

const githubProjects = [
  {
    name: "Plenus Agenda Médica",
    description: "API RESTful desenvolvida para gerenciar o fluxo de trabalho de profissionais liberais da saúde, incluindo agendamentos e finanças.",
    url: "https://github.com/Kevinrehem/Plenus-Agenda-Medica",
    language: "Java",
    tags: ["API REST", "Saúde", "Backend"]
  },
  {
    name: "Simulador de Escalonamento",
    description: "Projeto de escalonamento de processos de uma fila hospitalar, utilizando processamento paralelo e Java Threads.",
    url: "https://github.com/Kevinrehem/Simulador-de-Escalonamento-Fila-Hospital",
    language: "Java",
    tags: ["Multithreading", "OS", "Escalonamento"]
  },
  {
    name: "Video Processing",
    description: "Aprendizado prático de tratamento, correção e processamento de dados em vídeos utilizando multithreading.",
    url: "https://github.com/Kevinrehem/VideoProcessing",
    language: "Java",
    tags: ["Processamento Paralelo", "Mídia"]
  },
  {
    name: "Gerenciador GCMEE",
    description: "Sistema Gerenciador e Controlador de Manutenção em Equipamentos Eletrônicos (Gestão de chamados e equipamentos).",
    url: "https://github.com/Kevinrehem/GCMEE_-_Gerenciador_e_Controlador_de_Manutencao_em_Equipamentos_Eletronicos",
    language: "Java",
    tags: ["Gestão", "POO"]
  },
  {
    name: "Intensivão JavaScript",
    description: "Projeto destinado às atividades práticas do intensivão de JavaScript da Hashtag.",
    url: "https://github.com/Kevinrehem/IntensivaoJavaScript",
    language: "JavaScript",
    tags: ["Frontend", "Estudo"]
  },
  {
    name: "BiteSync",
    description: "SaaS gerenciador de restaurante completo: desde o pedido até a cozinha e o cálculo da conta, com suporte a comandas individuais por mesa.",
    url: "https://github.com/allysson-assuncao/esof1-project",
    language: "TypeScript",
    tags: ["SaaS", "Gestão"]
  },
  {
    name: "Simulador File System",
    description: "Simulador de sistema de arquivos desenvolvido para estudos e aplicação prática em Sistemas Operacionais.",
    url: "https://github.com/RhuanAzevedo/simulador-filesystem",
    language: "Java",
    tags: ["OS", "File System"]
  },
  {
    name: "Quiz Show (Lar de Idosos)",
    description: "Aplicação interativa de Quiz desenvolvida com foco em engajamento e acessibilidade para lares de idosos (ILPI).",
    url: "https://github.com/allysson-assuncao/quiz-show-asilo",
    language: "TypeScript",
    tags: ["Acessibilidade", "Interativo"]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

export function GitHubProjectsSection() {
  return (
    <SectionWrapper id="github-projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3 mb-2">
            <GithubIcon className="w-8 h-8 text-foreground" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              Projetos no GitHub
            </h2>
          </div>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {githubProjects.map((project, i) => (
            <motion.div
              key={project.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <Link href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full group">
                <Card className="h-full bg-card border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer">
                  <CardHeader className="pb-3 flex flex-row items-start justify-between space-y-0 gap-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                      <FolderGit2 size={20} />
                    </div>
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <CardTitle className="text-base font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {project.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`} />
                        <span className="text-xs font-medium text-muted-foreground">{project.language}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Badge variant="secondary" className="text-[10px] px-1.5 py-0 bg-primary/10 text-primary hover:bg-primary/20 shadow-none border-0">
                          {project.tags[0]}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
