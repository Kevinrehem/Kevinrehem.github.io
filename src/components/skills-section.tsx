"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "./section-wrapper";
import { Code2, Layers, Database, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Desenvolvimento",
    icon: Code2,
    skills: ["Java", "Spring Boot", "TypeScript", "Next.js", "React"],
  },
  {
    title: "Engenharia & Arquitetura",
    icon: Layers,
    skills: ["Microsserviços", "Event-Driven (Tempo Real)", "SOLID", "Metodologias Ágeis"],
  },
  {
    title: "Dados & Automação",
    icon: Database,
    skills: ["PostgreSQL", "Modelagem de Dados", "n8n", "Automação de Processos"],
  },
  {
    title: "Perfil",
    icon: Users,
    skills: ["Colaborativo", "Código Limpo", "Sistemas Críticos (Saúde)", "Inclusão Digital"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
          Habilidades
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <category.icon size={20} />
                    </div>
                    <CardTitle className="text-base font-semibold text-card-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
