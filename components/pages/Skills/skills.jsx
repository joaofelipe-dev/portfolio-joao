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
    { nome: "React", icone: <SiReact />, nivel: "Intermediário", tipo: "Frameworks & Bibliotecas", href: "https://react.dev" },
    { nome: "Tailwind", icone: <SiTailwindcss />, nivel: "Intermediário", tipo: "Frameworks & Bibliotecas", href: "https://tailwindcss.com" },
    { nome: "Next.js", icone: <SiNextdotjs />, nivel: "Básico", tipo: "Frameworks & Bibliotecas", href: "https://nextjs.org" },
    { nome: "JavaScript", icone: <SiJavascript />, nivel: "Básico", tipo: "Linguagens & Core", href: "/" },
    { nome: "Git", icone: <SiGit />, nivel: "Intermediário", tipo: "Controle de Versão", href: "https://git-scm.com" },
    { nome: "Shadcn UI", icone: <SiShadcnui />, nivel: "Intermediário", tipo: "Estilização & UI", href: "https://ui.shadcn.com" },
    { nome: "Html5", icone: <SiHtml5 />, nivel: "Intermediário", tipo: "Linguagens & Core", href: "https://developer.mozilla.org/docs/Web/HTML" },
    { nome: "Github", icone: <SiGithub />, nivel: "Intermediário", tipo: "Controle de Versão", href: "https://github.com" },
    { nome: "Css3", icone: <SiCss3 />, nivel: "Intermediário", tipo: "Linguagens & Core", href: "https://developer.mozilla.org/docs/Web/CSS" },
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
      className="min-h-screen w-full p-6 md:p-10 flex flex-col gap-8"
    >
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
          <a
            key={nome}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[140px] sm:max-w-40 md:max-w-[180px]"
          >
            <Card
              className="
                flex flex-col items-center justify-center 
                text-xs sm:text-sm md:text-base text-center 
                p-4 sm:p-5 aspect-square
                dark:bg-slate-800 hover:scale-105 hover:shadow-lg 
                transition-all duration-300
              "
            >
              <div className="text-4xl sm:text-5xl mb-2">{icone}</div>
              <h3 className="font-semibold">{nome}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{nivel}</p>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};
