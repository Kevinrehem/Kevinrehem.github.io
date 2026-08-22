"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { HireMeModal } from "./hire-me-modal";
import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <SectionWrapper id="cta" className="py-24 px-4 bg-primary/5 relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-50 blur-[100px]" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6 text-primary">
            <Rocket size={32} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Pronto para decolar seu negócio?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Se você gostou da performance e do design deste portfólio, imagine o que podemos construir para a sua marca. Soluções Web modernas, responsivas e focadas em conversão.
          </p>
          
          <HireMeModal>
            <Button size="lg" className="h-14 px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all group rounded-xl">
              Faça um orçamento sem compromisso
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </HireMeModal>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
