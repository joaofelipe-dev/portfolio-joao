"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ButtonGroup } from "@/components/ui/button-group";
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
import Particles from "@/components/ui/Particles";

export const Skills = () => {
  const tools = [
    {
      nome: "React",
      icone: <SiReact />,
      nivel: "Intermediário",
      tipo: "Frameworks & Bibliotecas",
      href: "https://react.dev",
    },
    {
      nome: "Tailwind",
      icone: <SiTailwindcss />,
      nivel: "Intermediário",
      tipo: "Frameworks & Bibliotecas",
      href: "https://tailwindcss.com",
    },
    {
      nome: "Next.js",
      icone: <SiNextdotjs />,
      nivel: "Básico",
      tipo: "Frameworks & Bibliotecas",
      href: "https://nextjs.org",
    },
    {
      nome: "JavaScript",
      icone: <SiJavascript />,
      nivel: "Básico",
      tipo: "Linguagens & Core",
      href: "/",
    },
    {
      nome: "Git",
      icone: <SiGit />,
      nivel: "Intermediário",
      tipo: "Controle de Versão",
      href: "https://git-scm.com",
    },
    {
      nome: "Shadcn UI",
      icone: <SiShadcnui />,
      nivel: "Intermediário",
      tipo: "Estilização & UI",
      href: "https://git-scm.com",
    },
    {
      nome: "Html5",
      icone: <SiHtml5 />,
      nivel: "Intermediário",
      tipo: "Linguagens & Core",
      href: "https://git-scm.com",
    },
    {
      nome: "Github",
      icone: <SiGithub />,
      nivel: "Intermediário",
      tipo: "Controle de Versão",
      href: "https://git-scm.com",
    },
    {
      nome: "Css3",
      icone: <SiCss3 />,
      nivel: "Intermediário",
      tipo: "Linguagens & Core",
      href: "https://git-scm.com",
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
      className="min-h-screen h-screen p-10 flex flex-col gap-8"
    >

      {/* Botões de filtro */}
      <div className="flex gap-3 justify-center">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {tiposUnicos.map((tipo) => (
            <Button
            key={tipo}
              variant={filtroAtivo === tipo ? "default" : "outline"}
              className="px-5 py-2 text-sm md:text-base transition-all"
              onClick={() => setFiltroAtivo(tipo)}
            >
              {tipo}
            </Button>
          ))}
        </div>
      </div>

      {/* Cards filtrados */}
      <div className="flex flex-wrap flex-auto gap-5 md:gap-x-20 justify-center items-center w-full h-full">
        {ferramentasFiltradas.map(({ nome, icone, nivel, href }) => (
          <a
          href={href}
            key={nome}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold flex items-center justify-center"
          >
            <Card className="flex flex-col justify-around text-sm md:text-2xl items-start p-5 aspect-square min-w-30 md:w-60 dark:bg-slate-800 hover:scale-110 hover:shadow-md ">
              {icone}
              {nome}
              <p className="text-sm text-foreground">{nivel}</p>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};
