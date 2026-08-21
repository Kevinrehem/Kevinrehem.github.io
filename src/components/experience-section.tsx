"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "Set/2025 – Atual",
    title: "Estagiário em Inteligência Artificial",
    company: "OK Inteligência Artificial",
    description: [
      "Desenvolvimento de aplicações web e backend com Java, Spring Boot, TypeScript e Next.js.",
      "Criação de automações complexas e formatação de dados com n8n e expressões regulares.",
      "Aplicação prática de arquitetura de microsserviços, metodologias ágeis e princípios SOLID na construção de soluções escaláveis.",
    ],
  },
  {
    period: "Out/2024 – Ago/2025",
    title: "Auxiliar de Escritório",
    company: "Contabilidade Moderna",
    description: [
      "Atuação direta em rotinas contábeis, gerenciamento de folha de pagamento e análise da saúde tributária de clientes corporativos.",
    ],
  },
  {
    period: "Set/2021 – Ago/2023",
    title: "Estagiário de Tecnologia da Informação",
    company: "Siemens Healthineers",
    description: [
      "Suporte a infraestrutura de TI e resolução de incidentes técnicos.",
    ],
  },
];

const timelineVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
          Experiência Profissional
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-10" />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                custom={i}
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-md" />

                <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {exp.title}
                    </h3>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase size={14} className="text-muted-foreground" />
                    <p className="text-sm text-muted-foreground font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                      >
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
