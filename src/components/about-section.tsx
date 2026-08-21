"use client";

import { SectionWrapper } from "./section-wrapper";

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
          Sobre Mim
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-8" />

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-md">
          <p className="text-base md:text-lg text-card-foreground leading-relaxed">
            Estudante de Sistemas de Informação e Estagiário em Inteligência Artificial,
            com background prático em rotinas administrativas. Focado em construir soluções
            robustas e de alto impacto, aliando{" "}
            <span className="text-primary font-semibold">qualidade técnica</span> e
            entendimento das necessidades do negócio.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
