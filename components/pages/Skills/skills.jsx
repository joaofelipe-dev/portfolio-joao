"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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

export const Skills = () => {
  const tools = [
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

  const tiposUnicos = ["Todos", ...new Set(tools.map((tool) => tool.tipo))];
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");

  const ferramentasFiltradas =
    filtroAtivo === "Todos"
      ? tools
      : tools.filter((tool) => tool.tipo === filtroAtivo);

  return (
    <section
      id="skills"
      className="min-h-screen w-full p-6 md:p-10 flex flex-col gap-12 overflow-x-hidden"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Minhas Habilidades
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Tecnologias e ferramentas que utilizo para construir produtos modernos e escaláveis.
        </p>
      </div>

      {/* Botões de filtro */}
      <div className="flex flex-wrap gap-3 justify-center">
        {tiposUnicos.map((tipo) => (
          <Button
            key={tipo}
            variant={filtroAtivo === tipo ? "default" : "outline"}
            className="px-4 py-2 text-sm md:text-base transition-all"
            onClick={() => setFiltroAtivo(tipo)}
          >
            {tipo}
          </Button>
        ))}
      </div>

      {/* Cards filtrados */}
      <div
        className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
          gap-4 sm:gap-6 lg:gap-8 justify-items-center flex-1
        "
      >
        {ferramentasFiltradas.map(({ nome, icone, nivel, href }) => (
          // No loop de ferramentas filtradas:
          <a
            key={nome}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full max-w-[140px] sm:max-w-40 md:max-w-[180px] flex"
          >
            <Card
              className="
      flex flex-col items-center justify-center 
      text-xs sm:text-sm md:text-base text-center 
      p-4 sm:p-5 w-full h-full
      dark:bg-slate-800 hover:scale-105 hover:shadow-lg 
      transition-all duration-300
    "
            >
              <div className="text-4xl sm:text-5xl mb-2">{icone}</div>
              <h3 className="font-semibold">{nome}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-auto">
                {nivel}
              </p>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};
