"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PROJETOS_DATA = [
  {
    image: "/parallax.png",
    title: "Parallax Creator Engine",
    description:
      "Desenvolvimento de um motor de efeitos visuais parallax para imersão",
    href: "./",
    tags: ["React", "Performance", "3D"],
    category: "Visual Effects",
  },
  {
    image: "/painel-vendas.png",
    title: "Painel de Vendas - Dashboard Corporativo",
    description:
      "Dashboard com visualização de dados em tempo real. Painel administrativo",
    href: "./",
    tags: ["React", "Analytics", "Real-time"],
    category: "Dashboard",
  },
  {
    image: "/travelgram.png",
    title: "Travelgram - Perfil de Viagens",
    description:
      "Desenvolvimento de um perfil de viagens com design responsivo e interativo.",
    href: "https://joaofelipe-dev.github.io/Travelgram",
    tags: ["React", "Responsive", "Design"],
    category: "Social Profile",
  },
  {
    image: "/pedido-papelaria.png",
    title: "Pedidos de Papelaria - Sistema de Gestão",
    description:
      "Sistema de gestão de pedidos para papelaria com foco em facilidade de uso.",
    href: "./",
    tags: ["React", "UX", "Enterprise"],
    category: "Management System",
  },
];

export const Projetos = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
        Portfólio de Projetos
      </h2>
      <p className="text-sm md:text-base lg:text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-6">
        Uma seleção de projetos que demonstram minha experiência em
        desenvolvimento
      </p>
      <div className="flex flex-row flex-wrap w-full gap-6 justify-center">
        {PROJETOS_DATA.map((projeto, index) => (
          <motion.div
            className="flex flex-col items-center text-center justify-between max-w-2xl h-auto aspect-4/3"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              translate: { type: "tween", stiffness: 100, ease: "easeOut" },
            }}
            key={index}
            {...projeto}
          >
            <h3 className="text-2xl font-semibold mb-2 text-foreground">
              {projeto.title}
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              {projeto.description}
            </p>
            <img
              src={projeto.image}
              alt={projeto.title}
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-default"
            />
            <div className="flex flex-wrap gap-2 mt-4">
              {projeto.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-background border text-muted-foreground px-3 py-1 rounded-full drop-shadow-primary drop-shadow-md hover:drop-shadow-lg hover:drop-shadow-primary hover:scale-105 cursor-default text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
