"use client";
import React, { useState, useEffect } from "react";
import { Projetos } from "./projetos";
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
      "Desenvolvimento de um motor de efeitos visuais de alta performance, utilizando manipulação direta de DOM e otimização de renderização para garantir 60 FPS em múltiplos dispositivos.",
    href: "./",
    tags: ["React", "Performance", "3D"],
    category: "Visual Effects"
  },
  {
    image: "/travelgram.png",
    title: "Travelgram - Perfil de Viagens",
    description: "Desenvolvimento de um perfil de viagens com design responsivo e interativo.",
    href: "https://joaofelipe-dev.github.io/Travelgram",
    tags: ["React", "Responsive", "Design"],
    category: "Social Profile"
  },
  {
    image: "/painel-vendas.png",
    title: "Smart Sales Analytics Dash",
    description:
      "Arquitetura de dashboard corporativo com visualização de dados em tempo real. Implementação de persistência de estado e processamento de dados do lado do cliente para relatórios dinâmicos.",
    href: "./",
    tags: ["React", "Analytics", "Real-time"],
    category: "Dashboard"
  },
  {
    image: "/pedido-papelaria.png",
    title: "Enterprise ERP Flow",
    description:
      "Solução completa de gestão de pedidos com foco em UX para alta produtividade. Sistema robusto de validação de dados e integração de fluxo de trabalho para redução de erros operacionais.",
    href: "./",
    tags: ["React", "UX", "Enterprise"],
    category: "ERP System"
  },
];

export const ProjetosPage = () => {
  const [api, setApi] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrentIndex(api.selectedScrollSnap());

    const onSelect = () => setCurrentIndex(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      whileInView={{
        scale: 1,
        transition: {
          duration: 0.4,
          type: "tween",
          ease: [0.39, 0.24, 0.3, 1],
        },
      }}
      viewport={{ once: false, amount: 0.2 }}
      id="projetos"
      className="relative rounded-2xl 
             min-h-[100svh] md:min-h-screen
             w-full
             flex flex-col 
             overflow-hidden"
    >

      {/* Backlight */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 3, delay: 0.2, ease: "easeOut" },
        }}
        className="absolute inset-0
               pointer-events-none
               bg-transparent
               "
      />

      {/* Conteúdo */}
      <main
        className="flex-1 relative z-10
               flex flex-col
               justify-center
               items-center
               py-8 md:py-12 lg:py-16
               px-4 md:px-6 lg:px-8
               gap-8 md:gap-10"
      >

        <div className="w-full text-center flex flex-col gap-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Portfólio de Projetos
          </h2>

          <p className="text-sm md:text-base lg:text-lg
                  text-muted-foreground
                  max-w-xl mx-auto">
            Explore as soluções web e aplicações que desenvolvi com foco em arquitetura, performance e experiência do usuário.
          </p>
        </div>

        <div className="w-full max-w-6xl flex items-center justify-center">

          <div className="w-full max-w-2xl">
            <Carousel
              className="w-full"
              opts={{
                align: "center",
                loop: true,
              }}
              orientation="horizontal"
              setApi={setApi}
            >
              {/* Navigation Arrows - Desktop Only */}
              <CarouselPrevious
                className="hidden md:flex shrink-0 p-3 rounded-full z-20 border-none shadow-lg bg-primary/80 hover:bg-primary text-primary-foreground hover:shadow-xl transition-all duration-300"
                aria-label="Projeto anterior"
              />

              <CarouselContent className="py-4 md:py-6">
                {PROJETOS_DATA.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="flex justify-center px-2 md:px-0">
                      <Projetos {...item} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselNext
                className="hidden md:flex shrink-0 p-3 rounded-full z-20 border-none shadow-lg bg-primary/80 hover:bg-primary text-primary-foreground hover:shadow-xl transition-all duration-300"
                aria-label="Próximo projeto"
              />
            </Carousel>
          </div>
        </div>

        {/* Improved Dot Indicators */}
        <div className="flex items-center gap-3 mt-6 md:mt-8">
          <div className="flex gap-2">
            {PROJETOS_DATA.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => api && api.scrollTo(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Ver projeto ${index + 1} de ${PROJETOS_DATA.length}`}
                className={`rounded-full transition-all duration-300 ${index === currentIndex
                  ? "w-8 h-3 bg-primary shadow-lg shadow-primary/50"
                  : "w-2.5 h-2.5 bg-foreground/40 hover:bg-foreground/60"
                  }`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <span className="text-xs md:text-sm text-muted-foreground ml-2 font-medium">
            {currentIndex + 1} / {PROJETOS_DATA.length}
          </span>
        </div>

      </main>
    </motion.div>
  );
};
