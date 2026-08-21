"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const academicProjects = [
  {
    title: "Bacharelado em Sistemas de Informação — IFMG",
    period: "2024 – Atual",
    projects: [
      {
        name: "Arquitetura de Sistemas em Saúde",
        date: "Abril/2026",
        description:
          "Desenho de sistema orientado a eventos em tempo real para gerenciar filas de espera e prontuários médicos em um posto de pronto-atendimento durante um festival de 8 dias.",
        tags: ["Event-Driven", "Tempo Real", "Saúde"],
      },
      {
        name: 'Capacitação em IA',
        date: "Abril/2026",
        description:
          "Elaboração de proposta de extensão e plano de ensino para instruir professores da rede pública no uso de ferramentas de Inteligência Artificial Generativa.",
        tags: ["IA Generativa", "Educação", "Extensão"],
      },
      {
        name: 'Projeto de Inclusão Digital "Vai, Meninas!"',
        date: "Até Jan/2026",
        description:
          "Gerenciamento de cronograma e execução de ciclos de atividades para alunas de escolas públicas, utilizando os laboratórios do IFMG, sob orientação da Profª. Suelen Mapa de Paula.",
        tags: ["Inclusão Digital", "Gerenciamento", "IFMG"],
      },
      {
        name: "Modelagem e Banco de Dados",
        date: "",
        description:
          "Experiência prática com design, administração e engenharia reversa utilizando PostgreSQL.",
        tags: ["PostgreSQL", "Modelagem", "DBA"],
      },
    ],
  },
  {
    title: "Engenharia Mecatrônica — UFSJ",
    period: "Fev/2017 – Dez/2023",
    projects: [
      {
        name: "Projeto de Extensão CAP Code",
        date: "",
        description:
          "Participação no projeto de extensão CAP Code, focado em maratonas de programação.",
        tags: ["Programação", "Extensão"],
      },
      {
        name: "SEMATRON 2019",
        date: "2019",
        description:
          "Participação na SEMATRON 2019 com a realização de um workshop focado em desenvolvimento com Arduino.",
        tags: ["Arduino", "Workshop"],
      },
    ],
  },
];

const projectCardVariants = {
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

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
          Experiência Acadêmica & Projetos
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-10" />

        <div className="space-y-12 md:space-y-16">
          {academicProjects.map((academic) => (
            <div key={academic.title}>
              {/* Academic Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {academic.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>{academic.period}</span>
                  </div>
                </div>
              </div>

              {/* Project Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {academic.projects.map((project, i) => (
                  <motion.div
                    key={project.name}
                    custom={i}
                    variants={projectCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <Card className="h-full bg-card border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-base font-semibold text-card-foreground group-hover:text-primary transition-colors">
                            {project.name}
                          </CardTitle>
                          {project.date && (
                            <span className="text-xs text-muted-foreground whitespace-nowrap bg-muted px-2 py-0.5 rounded-md">
                              {project.date}
                            </span>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs border-primary/30 text-primary/80"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
