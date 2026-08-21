import { Mail, MapPin, Globe } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Currículo | Kevin Ávila Rehem",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-neutral-900 flex justify-center py-10 print:py-0 print:bg-neutral-900">
      {/* A4 Container */}
      <div 
        className="bg-neutral-900 text-neutral-200 w-full max-w-[210mm] min-h-[297mm] shadow-2xl p-[15mm] mx-auto print:shadow-none print:m-0 print:p-[10mm] print:w-[210mm] print:h-[297mm]"
        style={{ 
          // Forçando esquema de cores dark no print
          colorScheme: 'dark',
          WebkitPrintColorAdjust: 'exact',
          printColorAdjust: 'exact'
        }}
      >
        
        {/* Header */}
        <header className="border-b border-neutral-700 pb-6 mb-6">
          <h1 className="text-4xl font-bold text-white tracking-tight mb-2">Kevin Ávila Rehem</h1>
          <h2 className="text-xl font-medium text-primary mb-4">Desenvolvedor Full Stack & Estagiário em IA</h2>
          
          <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-neutral-400">
            <div className="flex items-center gap-1.5">
              <Mail size={14} />
              <a href="mailto:kevin.rehem@gmail.com" className="hover:text-primary transition-colors">kevin.rehem@gmail.com</a>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={14} />
              <span>Minas Gerais, Brasil</span>
            </div>
            <div className="flex items-center gap-1.5">
              <LinkedinIcon size={14} />
              <a href="https://linkedin.com/in/kevin-ávila-rehem-1781301a5" className="hover:text-primary transition-colors">LinkedIn</a>
            </div>
            <div className="flex items-center gap-1.5">
              <GithubIcon size={14} />
              <a href="https://github.com/Kevinrehem" className="hover:text-primary transition-colors">GitHub</a>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe size={14} />
              <Link href="/" className="hover:text-primary transition-colors">kevinrehem.github.io</Link>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Content (Left Column) */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Resumo */}
            <section>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-4 h-px bg-primary"></span>
                Sobre Mim
              </h3>
              <p className="text-sm leading-relaxed text-neutral-300 text-justify">
                Estudante de Sistemas de Informação e Estagiário em Inteligência Artificial, com background prático em rotinas administrativas. Focado em construir soluções robustas e de alto impacto, aliando qualidade técnica e entendimento das necessidades do negócio.
              </p>
            </section>

            {/* Experiência Profissional */}
            <section>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-primary"></span>
                Experiência Profissional
              </h3>
              
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-base font-semibold text-neutral-100">Estagiário em Inteligência Artificial</h4>
                    <span className="text-xs text-primary font-medium">Set/2025 - Atual</span>
                  </div>
                  <div className="text-sm font-medium text-neutral-400 mb-2">OK Inteligência Artificial</div>
                  <ul className="list-disc list-outside ml-4 text-sm text-neutral-300 space-y-1">
                    <li>Desenvolvimento de aplicações web e backend com Java, Spring Boot, TypeScript e Next.js.</li>
                    <li>Criação de automações complexas e formatação de dados com n8n e expressões regulares.</li>
                    <li>Aplicação prática de arquitetura de microsserviços, metodologias ágeis e princípios SOLID na construção de soluções escaláveis.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-base font-semibold text-neutral-100">Auxiliar de Escritório</h4>
                    <span className="text-xs text-neutral-500 font-medium">Out/2024 - Ago/2025</span>
                  </div>
                  <div className="text-sm font-medium text-neutral-400 mb-2">Contabilidade Moderna</div>
                  <ul className="list-disc list-outside ml-4 text-sm text-neutral-300 space-y-1">
                    <li>Atuação direta em rotinas contábeis, gerenciamento de folha de pagamento e análise da saúde tributária de clientes corporativos.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-base font-semibold text-neutral-100">Estagiário de Tecnologia da Informação</h4>
                    <span className="text-xs text-neutral-500 font-medium">Set/2021 - Ago/2023</span>
                  </div>
                  <div className="text-sm font-medium text-neutral-400 mb-2">Siemens Healthineers</div>
                  <ul className="list-disc list-outside ml-4 text-sm text-neutral-300 space-y-1">
                    <li>Suporte a infraestrutura de TI e resolução de incidentes técnicos.</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar (Right Column) */}
          <div className="space-y-6">
            
            {/* Educação */}
            <section>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-primary"></span>
                Formação
              </h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-neutral-100">IFMG</h4>
                  <div className="text-xs text-primary mt-1">2024/1 – Previsão 2027/2</div>
                  <div className="text-xs text-neutral-500 mt-1">Bacharelado em Sistemas de Informação</div>
                </div>
              </div>
            </section>

            {/* Habilidades Técnicas */}
            <section>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-primary"></span>
                Skills Tech
              </h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Backend & Arq.</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["Java", "Spring Boot", "Node.js", "Python", "Microsserviços"].map(s => (
                      <span key={s} className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded text-[11px] text-neutral-200">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Frontend</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["React", "Next.js", "Vue.js", "TailwindCSS"].map(s => (
                      <span key={s} className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded text-[11px] text-neutral-200">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Banco de Dados</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["MySQL", "PostgreSQL"].map(s => (
                      <span key={s} className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded text-[11px] text-neutral-200">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Cloud & Tools</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["Docker", "Git/GitHub", "Linux"].map(s => (
                      <span key={s} className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded text-[11px] text-neutral-200">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Idiomas */}
            <section>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-primary"></span>
                Idiomas
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-neutral-200">Inglês</span>
                  <span className="text-xs text-primary font-medium">Fluente</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-neutral-200">Japonês</span>
                  <span className="text-xs text-neutral-500 font-medium">Básico</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-neutral-200">Espanhol</span>
                  <span className="text-xs text-neutral-500 font-medium">Básico</span>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
