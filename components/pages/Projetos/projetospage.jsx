"use client";
import React, { useRef } from "react";
import { Projetos } from "./projetos";
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
      title: "Parallax Creator",
      description: "Criador de efeito Parallax",
      href: "https://parallax-creator.vercel.app",
    },
    {
      image: "/wallpaper-dark.png",
      title: "Landing Page",
      description: "Landing Page Moderna",
      href: "./",
    },
    {
      image: "/todo.png",
      title: "To do List",
      description: "Lista de Afazeres",
      href: "./",
    },
  ];

  return (
    <div
      id="projetos"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Waves do topo */}
      <div className="relative w-full h-[213px] overflow-hidden">
        {/* Wave 1 - Base */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 213"
          preserveAspectRatio="none"
        >
          <path
            d="M0,192L80,170.7C160,149,320,107,480,112C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            fill="url(#grad1)"
            className="shadow-lg shadow-blue-500/30"
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b0ef1ff" />
            </linearGradient>
          </defs>
        </svg>

        {/* Wave 2 - Meio */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 213"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160L60,149.3C120,139,240,117,360,96C480,75,600,53,720,74.7C840,96,960,160,1080,160C1200,160,1320,96,1380,64L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            fill="url(#grad2)"
            className="blur-sm shadow-2xl shadow-purple-500"
          />
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>

        {/* Wave 3 - Topo */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 213"
          preserveAspectRatio="none"
        >
          <path
            d="M0,128L40,133.3C80,139,160,149,240,165.3C320,181,400,203,480,197.3C560,192,640,160,720,149.3C800,139,880,149,960,160C1040,171,1120,181,1200,181.3C1280,181,1360,171,1400,165.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            fill="url(#grad3)"
            className="opacity-70 blur-[2px] shadow-lg shadow-indigo-400"
          />
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Conteúdo principal */}
      <main className="flex-1 relative z-10 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
        <h1 className="text-4xl font-bold text-center">Meus Projetos</h1>
        <h2 className="mt-5 mb-8 text-lg text-center">
          Veja alguns dos meus projetos criados
        </h2>

        {/* Carousel centralizado */}
        <div className="w-full max-w-6xl flex items-center justify-center gap-4 px-4">
          {/* Botão anterior */}

          {/* Carousel */}
          <div className="flex-1 max-w-2xl">
            <Carousel
              className="w-full"
              opts={{
                align: "center",
                loop: true,
              }}
              orientation="horizontal"
            >
              <CarouselPrevious className="flex-shrink-0 bg-white/80 hover:bg-white p-3 rounded-full z-20 border-none shadow-lg transition-colors" />
              <CarouselContent className="h-fit p-5">
                {projetosArray.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="flex justify-center p-2">
                      <Projetos {...item} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="flex-shrink-0 bg-white/80 hover:bg-white p-3 rounded-full z-20 border-none shadow-lg transition-colors" />
            </Carousel>
          </div>

          {/* Botão próximo */}
        </div>
      </main>

      {/* Waves do rodapé */}
      <div className="relative w-full h-[213px] overflow-hidden -scale-y-100 z-0 pointer-events-none">
        {/* Wave 1 */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 213"
          preserveAspectRatio="none"
        >
          <path
            d="M0,192L80,170.7C160,149,320,107,480,112C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            fill="url(#grad1)"
            className="shadow-lg shadow-blue-500/30"
          />
        </svg>

        {/* Wave 2 */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 213"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160L60,149.3C120,139,240,117,360,96C480,75,600,53,720,74.7C840,96,960,160,1080,160C1200,160,1320,96,1380,64L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            fill="url(#grad2)"
            className="blur-sm shadow-2xl shadow-purple-500"
          />
        </svg>

        {/* Wave 3 */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 213"
          preserveAspectRatio="none"
        >
          <path
            d="M0,128L40,133.3C80,139,160,149,240,165.3C320,181,400,203,480,197.3C560,192,640,160,720,149.3C800,139,880,149,960,160C1040,171,1120,181,1200,181.3C1280,181,1360,171,1400,165.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            fill="url(#grad3)"
            className="opacity-70 blur-[2px] shadow-lg shadow-indigo-400"
          />
        </svg>
      </div>
    </div>
  );
};
