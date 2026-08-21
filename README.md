# Portfólio — Kevin Ávila Rehem

Portfólio profissional e acadêmico construído com **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, e **Framer Motion**. Deploy automático no **GitHub Pages** via **GitHub Actions**.

🌐 **Acesse online:** [kevinrehem.github.io](https://kevinrehem.github.io)

---

## 🚀 Tecnologias

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Static Export)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Componentes UI:** [shadcn/ui](https://ui.shadcn.com/)
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **Tema (Dark/Light):** [next-themes](https://github.com/pacocoursey/next-themes)
- **Tipografia:** [Lexend](https://fonts.google.com/specimen/Lexend) (Google Fonts)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **CI/CD:** [GitHub Actions](https://github.com/features/actions)

---

## 📁 Estrutura do Projeto

```
Kevinrehem.github.io/
├── .agents/
│   └── skills/nextjs-portfolio/   # AI Skill para desenvolvimento do portfólio
├── .github/
│   └── workflows/deploy.yml       # Workflow de CI/CD para GitHub Pages
├── public/
│   ├── .nojekyll                  # Ignora processamento Jekyll no GitHub Pages
│   └── images/foto-perfil.jpeg    # Foto de perfil
├── src/
│   ├── app/
│   │   ├── globals.css            # Variáveis CSS, tema e Tailwind v4
│   │   ├── layout.tsx             # Root layout, metadados SEO e ThemeProvider
│   │   └── page.tsx               # Página principal e composição das seções
│   ├── components/
│   │   ├── ui/                    # Componentes base shadcn/ui (Button, Card, Badge, etc.)
│   │   ├── navbar.tsx             # Navegação fixa com smooth scroll e tema
│   │   ├── hero-section.tsx       # Apresentação, foto e links sociais
│   │   ├── about-section.tsx      # Sobre mim
│   │   ├── skills-section.tsx     # Habilidades categorizadas
│   │   ├── experience-section.tsx # Timeline profissional
│   │   ├── projects-section.tsx   # Experiência acadêmica e projetos
│   │   ├── github-stats-section.tsx # Estatísticas do GitHub
│   │   ├── footer.tsx             # Rodapé
│   │   ├── theme-provider.tsx     # Provider do tema dark/light
│   │   └── section-wrapper.tsx    # Wrapper com animações de scroll
│   └── lib/
│       └── utils.ts               # Utilitários (ex: cn helper)
├── next.config.ts                 # Configuração de exportação estática
├── package.json
└── tsconfig.json
```

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js 20+
- npm

### 1. Clonar o repositório
```bash
git clone https://github.com/Kevinrehem/Kevinrehem.github.io.git
cd Kevinrehem.github.io
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### 4. Gerar build estático (produção)
```bash
npm run build
```
Os arquivos estáticos prontos para publicação serão gerados na pasta `out/`.

---

## 🚢 Deploy no GitHub Pages

O deploy é acionado automaticamente a cada `push` na branch `main` através do workflow do GitHub Actions em `.github/workflows/deploy.yml`.

> [!IMPORTANT]
> Certifique-se de que a configuração do repositório em **Settings → Pages → Build and deployment** está definida com **Source: GitHub Actions**.

---

## 📄 Licença

Este projeto é de uso pessoal. Todos os direitos reservados a [Kevin Ávila Rehem](https://github.com/Kevinrehem).
