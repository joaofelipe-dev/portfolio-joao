"use client";
import { motion } from "motion/react";
import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
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
} from "react-icons/si";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const TOOLS_DATA = [
  {
    nome: "React",
    icone: <SiReact />,
    nivel: "Arquitetura de Componentes",
    tipo: "Core Stack",
    href: "https://react.dev",
  },
  {
    nome: "Next.js",
    icone: <SiNextdotjs />,
    nivel: "SSG, SSR e Otimização de Performance",
    tipo: "Core Stack",
    href: "https://nextjs.org",
  },
  {
    nome: "JavaScript (ES6+)",
    icone: <SiJavascript />,
    nivel: "Manipulação de dados e Logica Assíncrona",
    tipo: "Core Stack",
    href: "/",
  },
  {
    nome: "Tailwind CSS",
    icone: <SiTailwindcss />,
    nivel: "Design e Responsividade",
    tipo: "Visual & Experience",
    href: "https://tailwindcss.com",
  },
  {
    nome: "Shadcn UI",
    icone: <SiShadcnui />,
    nivel: "Componentização Escalável e Acessibilidade",
    tipo: "Visual & Experience",
    href: "https://ui.shadcn.com",
  },
  {
    nome: "CSS3 / GSAP",
    icone: <SiCss3 />,
    nivel: "Animações e Micro-interações",
    tipo: "Visual & Experience",
    href: "https://developer.mozilla.org/docs/Web/CSS",
  },
  {
    nome: "Git",
    icone: <SiGit />,
    nivel: "Versionamento Estratégico e Fluxo de Trabalho",
    tipo: "Tooling & Ecosystem",
    href: "https://git-scm.com",
  },
  {
    nome: "GitHub",
    icone: <SiGithub />,
    nivel: "CI/CD",
    tipo: "Tooling & Ecosystem",
    href: "https://github.com",
  },
  {
    nome: "HTML5 / Semantic",
    icone: <SiHtml5 />,
    nivel: "SEO e Estrutura Semântica de Dados",
    tipo: "Core Stack",
    href: "https://developer.mozilla.org/docs/Web/HTML",
  },
];

export const Skills = () => {
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");

  const tiposUnicos = useMemo(
    () => ["Todos", ...new Set(TOOLS_DATA.map((tool) => tool.tipo))],
    [],
  );

  const ferramentasFiltradas = useMemo(
    () =>
      filtroAtivo === "Todos"
        ? TOOLS_DATA
        : TOOLS_DATA.filter((tool) => tool.tipo === filtroAtivo),
    [filtroAtivo],
  );

  return (
    <section
      id="skills"
      className="min-h-screen w-full px-4 md:px-6 lg:px-10 py-12 md:py-16 lg:py-20 flex flex-col gap-12 md:gap-16 overflow-x-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center w-full"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
          Minhas Habilidades
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
          Tecnologias e ferramentas que utilizo para construir produtos modernos
          e escaláveis com foco em performance e experiência do usuário.
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
          <motion.button
            key={tipo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFiltroAtivo(tipo)}
            className={`px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-sm lg:text-base rounded-full font-medium transition-all cursor-pointer duration-300 ${
              filtroAtivo === tipo
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                : "bg-background text-muted-foreground hover:bg-background/80 border border-primary drop-shadow-md drop-shadow-primary hover:drop-shadow-lg hover:drop-shadow-primary"
            }`}
          >
            {tipo}
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 justify-items-center flex-1"
      >
        {ferramentasFiltradas.map(({ nome, icone, nivel, href }) => (
          <motion.a
            key={nome}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            className="w-full h-full max-h-80 flex"
            whileHover={{ y: -4 }}
          >
            <Card
              className="
          flex flex-col items-center justify-center
          text-xs sm:text-sm md:text-base text-center
          p-4 sm:p-6 md:p-7 w-full h-full
          hover:shadow-xl hover:border-primary/50
          transition-all duration-300
          cursor-pointer
          bg-card/50 backdrop-blur-sm
          hover:bg-card/80
          border border-border/50
          group
        "
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 transition-all group-hover:scale-110 group-hover:text-primary duration-300">
                {icone}
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {nome}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 group-hover:text-muted-foreground/80">
                {nivel}
              </p>
            </Card>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};
