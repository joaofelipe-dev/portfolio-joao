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

export const ProjetosPage = () => {
  const projetosArray = [
    {
      image: "/parallax.png",
      title: "Parallax Creator Engine",
      description:
        "Desenvolvimento de um motor de efeitos visuais de alta performance, utilizando manipulação direta de DOM e otimização de renderização para garantir 60 FPS em múltiplos dispositivos.",
      href: "./",
    },
    {
      image:"/travelgram.png",
      title:"Travelgram - Perfil de Viagens",
      description: "Desenvolvimento de um perfil de viagens com design responsivo e interativo.",
      href: "https://joaofelipe-dev.github.io/Travelgram",
    },
    {
      image: "/painel-vendas.png",
      title: "Smart Sales Analytics Dash",
      description:
        "Arquitetura de dashboard corporativo com visualização de dados em tempo real. Implementação de persistência de estado e processamento de dados do lado do cliente para relatórios dinâmicos.",
      href: "./",
    },
    {
      image: "/pedido-papelaria.png",
      title: "Enterprise ERP Flow",
      description:
        "Solução completa de gestão de pedidos com foco em UX para alta produtividade. Sistema robusto de validação de dados e integração de fluxo de trabalho para redução de erros operacionais.",
      href: "./",
    },
  ];
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
               md:bg-radial 
               from-blue-500/30
               via-primary/30
               to-transparent
               blur-2xl"
  />

  {/* Conteúdo */}
  <main
    className="flex-1 relative z-10 
               flex flex-col 
               justify-center 
               items-center py-8
               md:p-6 
               lg:p-8"
  >
    
    <h2 className="text-2xl md:text-4xl font-bold text-center">
      Portfólio de Projetos
    </h2>

    <p className="mt-4 mb-6 md:mt-5 md:mb-8 
                  text-sm md:text-lg 
                  text-center 
                  text-muted-foreground
                  max-w-md">
      Explore as soluções web e aplicações que desenvolvi
    </p>

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
          {/* Setas só desktop */}
          <CarouselPrevious className="hidden md:flex shrink-0 p-3 rounded-full z-20 border-none shadow-lg" />

          <CarouselContent className="py-4">
            {projetosArray.map((item, index) => (
              <CarouselItem key={index}>
                <div className="flex justify-center px-2">
                  <Projetos {...item} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext className="hidden md:flex shrink-0 p-3 rounded-full z-20 border-none shadow-lg" />
        </Carousel>
      </div>
    </div>

    {/* Bolinhas */}
    <div className="flex gap-2 mt-4">
      {projetosArray.map((_, index) => (
        <button
          key={index}
          onClick={() => api && api.scrollTo(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === currentIndex
              ? "bg-primary scale-150"
              : "bg-foreground/50"
          }`}
        />
      ))}
    </div>

  </main>
</motion.div>
  );
};
