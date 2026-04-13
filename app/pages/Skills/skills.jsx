"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  SiCss3,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2,
    },
  },
};

const TOOLS_DATA = [
  {
    nome: "React",
    icone: <SiReact />,
    nivel: "Componentes, Hooks, Context",
    tipo: "Frontend",
    href: "https://react.dev",
  },
  {
    nome: "Next.js",
    icone: <SiNextdotjs />,
    nivel: "App Router, SSR, SEO",
    tipo: "Frontend",
    href: "https://nextjs.org",
  },
  {
    nome: "TypeScript",
    icone: <SiTypescript />,
    nivel: "Tipos, Interfaces, Generics",
    tipo: "Frontend",
    href: "https://www.typescriptlang.org",
  },
  {
    nome: "JavaScript",
    icone: <SiJavascript />,
    nivel: "ES6+, Async/Await",
    tipo: "Frontend",
    href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  {
    nome: "Tailwind CSS",
    icone: <SiTailwindcss />,
    nivel: "Responsividade, Design System",
    tipo: "Frontend",
    href: "https://tailwindcss.com",
  },
  {
    nome: "HTML5",
    icone: <SiHtml5 />,
    nivel: "Semântico, Acessibilidade",
    tipo: "Frontend",
    href: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
  },
  {
    nome: "CSS3",
    icone: <SiCss3 />,
    nivel: "Animations, Grid, Flexbox",
    tipo: "Frontend",
    href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
  },
  {
    nome: "Shadcn/UI",
    icone: <SiShadcnui />,
    nivel: "Componentes, Radix UI",
    tipo: "Frontend",
    href: "https://ui.shadcn.com",
  },
  {
    nome: "Node.js",
    icone: <SiNodedotjs />,
    nivel: "API REST, Server Actions",
    tipo: "Backend",
    href: "https://nodejs.org",
  },
  {
    nome: "PostgreSQL",
    icone: <SiPostgresql />,
    nivel: "Queries, Relacional",
    tipo: "Backend",
    href: "https://www.postgresql.org",
  },
  {
    nome: "Git",
    icone: <SiGit />,
    nivel: "Versionamento, Fluxo",
    tipo: "Ferramentas",
    href: "https://git-scm.com",
  },
  {
    nome: "GitHub",
    icone: <SiGithub />,
    nivel: "Open source, CI/CD",
    tipo: "Ferramentas",
    href: "https://github.com/joaofelipe-dev",
  },
  {
    nome: "Vercel",
    icone: <SiVercel />,
    nivel: "Deploy, Edge Functions",
    tipo: "Ferramentas",
    href: "https://vercel.com",
  },
];

export const Skills = () => {
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");

  const tiposUnicos = ["Todos", "Frontend", "Backend", "Ferramentas"];

  const getFilteredTools = () => {
    if (filtroAtivo === "Todos") {
      return TOOLS_DATA;
    }
    return TOOLS_DATA.filter((tool) => tool.tipo === filtroAtivo);
  };

  return (
    <section
      id="skills"
      className="min-h-screen w-full px-4 md:px-6 lg:px-10 py-12 md:py-16 lg:py-20 flex flex-col gap-10 md:gap-12 overflow-hidden relative"
    >
      {/* Background Blobs */}
      <div className="absolute left-0 top-0 w-72 h-72 bg-secondary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-tertiary/5 rounded-full blur-[150px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center w-full"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-on-surface font-[var(--font-space-grotesk)] tracking-tight">
          Tech Stack
        </h2>
        <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto">
          Ferramentas que domino e utilizo no dia a dia. Filtro por categoria para facilitar a visualização.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2 md:gap-3 justify-center"
      >
        {tiposUnicos.map((tipo) => (
          <Button
            key={tipo}
            size={filtroAtivo === tipo ? "default" : "sm"}
            variant={filtroAtivo === tipo ? "default" : "outline"}
            onClick={() => setFiltroAtivo(tipo)}
            className="cursor-pointer"
          >
            {tipo}
          </Button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        layout
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6 justify-items-center flex-1"
      >
        <AnimatePresence mode="popLayout">
          {getFilteredTools().map(({ nome, icone, nivel, href }) => (
            <motion.a
              layout
              key={nome}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              initial="hidden"
              animate="show"
              exit="exit"
              className="w-full h-full max-h-72 flex"
              whileHover={{ y: -4 }}
            >
            <Card className="
              flex flex-col items-center justify-center
              text-xs sm:text-sm md:text-base text-center
              p-5 sm:p-6 md:p-7 w-full h-full
              transition-all duration-200
              cursor-pointer
              group
            ">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 transition-all group-hover:scale-110 group-hover:text-primary duration-200">
                {icone}
              </div>
              <h3 className="font-semibold text-on-surface group-hover:text-primary transition-colors text-xs sm:text-sm md:text-base">
                {nome}
              </h3>
              <p className="text-[10px] sm:text-xs text-on-surface-variant mt-1 sm:mt-1.5">
                {nivel}
              </p>
            </Card>
          </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};