"use client";
import React, { useState, useEffect, useRef } from "react";
import { useActiveSection } from "@/hooks/isActiveSection";
import { Home, LayoutGrid, Cpu, UserRound, Mail } from "lucide-react";

export const Menu = () => {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { nome: "Inicio", id: "banner", href: "#banner", icon: Home },
    { nome: "Projetos", id: "projetos", href: "#projetos", icon: LayoutGrid },
    { nome: "Skills", id: "skills", href: "#skills", icon: Cpu },
    { nome: "Sobre", id: "sobre", href: "#sobre", icon: UserRound },
    { nome: "Contato", id: "contato", href: "#contato", icon: Mail },
  ];

  const activeSection = useActiveSection(
    pages.map((p) => p.id),
    {
      root: null,
      rootMargin: "0px",
      threshold: [0.4, 0.6],
    },
  );

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    setIsOpen(false);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={menuRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Navegação"
      className={`
        fixed z-50 transition-all duration-300 ease-out
        glass
        
        bottom-6 left-1/2 -translate-x-1/2 
        flex flex-row items-center gap-2
        rounded-2xl py-2 px-3
        ${isOpen ? "w-[90%] max-w-[380px]" : "w-auto min-w-[70px]"}

        sm:top-1/2 sm:right-6 sm:bottom-auto sm:left-auto sm:-translate-y-1/2 sm:translate-x-0
        sm:flex-col sm:py-3 sm:px-2
        sm:rounded-2xl
        ${isOpen ? "sm:w-40" : "sm:w-14"}
      `}
    >
      <ul
        className={`
        flex items-center gap-2 w-full list-none p-0 m-0
        ${isOpen ? "justify-between px-2" : "justify-center"}
        sm:flex-col sm:gap-3 sm:justify-center sm:px-0
      `}
      >
        {pages.map((page) => {
          const isActive = activeSection === page.id;
          const Icon = page.icon;
          return (
            <li
              key={page.id}
              className={`${isOpen ? "flex-1" : "w-auto"} sm:w-full flex justify-center`}
            >
              <a
                href={page.href}
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(e, page.id);
                }}
                className={`
                  flex items-center rounded-xl
                  transition-all duration-200 cursor-pointer
                  ${isOpen ? "justify-start px-4 py-2.5 gap-3" : "justify-center p-2.5 gap-0"}
                  ${
                    isActive
                      ? "bg-primary/20 text-primary shadow-[0_0_15px_rgba(221,183,255,0.2)]"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container-high"
                  }
                `}
              >
                <div className="flex items-center justify-center">
                  <Icon
                    className={`transition-transform duration-200 ${isActive ? "scale-110" : "scale-100"}`}
                    size={20}
                  />
                </div>
                <span
                  className={`
                    text-xs font-medium uppercase tracking-wider
                    whitespace-nowrap overflow-hidden
                    transition-all duration-200
                    ${
                      isOpen
                        ? "opacity-100 w-auto"
                        : "opacity-0 w-0 pointer-events-none"
                    }
                  `}
                >
                  {page.nome}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};