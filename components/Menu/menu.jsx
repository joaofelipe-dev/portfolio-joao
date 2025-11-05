"use client";
import React from "react";
import { useActiveSection } from "@/hooks/isActiveSection";
import { useState } from "react";
import { Circle } from "lucide-react";

export const Menu = () => {
  const pages = [
    { nome: "Inicio", id: "banner", href: "#banner" },
    { nome: "Projetos", id: "projetos", href: "#projetos" },
    { nome: "Skills", id: "skills", href: "#skills" },
    { nome: "Sobre", id: "sobre", href: "#sobre" },
    { nome: "Contato", id: "contato", href: "#contato" },
  ];

  const activeSection = useActiveSection(
    pages.map((p) => p.id),
    {
      root: null,
      rootMargin: "0px",
      threshold: [0.4, 0.6],
    }
  );

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        fixed top-[50%] right-3 transform -translate-y-1/2
        flex flex-col items-center gap-4
        bg-foreground/90 backdrop-blur-md shadow-lg
        rounded-xl py-4 px-2
        transition-all duration-300 ease-in-out
        ${hovered ? "w-32" : "w-12"}
        z-50
      `}
    >
      {pages.map((page) => {
        const isActive = activeSection === page.id;
        return (
          <a
            key={page.id}
            href={page.href}
            onClick={(e) => handleClick(e, page.id)}
            className={`
              flex items-center justify-start gap-3 w-full
              text-secondary px-2 py-1 rounded-md
              transition-all duration-300 cursor-pointer
              ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }
            `}
          >
            <Circle
              className={`min-w-3 transition-transform duration-300 ${
                isActive ? "scale-125 fill-primary" : ""
              }`}
              size={10}
            />
            <span
              className={`
                whitespace-nowrap overflow-hidden
                transition-all duration-300
                ${
                  hovered
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2"
                }
              `}
            >
              {page.nome}
            </span>
          </a>
        );
      })}
    </div>
  );
};
