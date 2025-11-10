"use client";
import Iridescence from "@/components/ui/Iridescence";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export const Sobre = () => {

  return (
    <>
      {/* Waves do topo */}
      <div className="relative w-full h-[213px] overflow-hidden">
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
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b0ef1ff" />
            </linearGradient>
          </defs>
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
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
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
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Seção Sobre com blob interativo */}
      <section
        id="sobre"
        className="relative snap-start min-h-screen flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >

        {/* Cabeçalho */}
        <div className="relative z-10 text-center mb-8 sm:mb-12 lg:mb-16 w-full max-w-6xl">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground"
          >
            Sobre Mim
          </motion.h1>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-primary max-w-2xl mx-auto"
          >
            Desenvolvedor Frontend | React | Next.js | Tailwind CSS
          </motion.h2>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 w-full max-w-6xl items-start">
          {/* Coluna Direita */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-left w-full"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl pr-2 text-foreground">
                Meu
              </h3>
              <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>
                Objetivo
              </h3>
            </div>
            <div className=" backdrop-blur-sm">
              <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed sm:leading-loose text-justify">
                Eu sou o João Felipe, tenho 21 anos e sou apaixonado por
                desenvolvimento front-end. Trabalho criando aplicações web
                modernas e funcionais, utilizando frameworks como React, Next.js
                e Tailwind CSS. Aplicações front-end que unem design,
                performance e usabilidade.
                <br />
                <br />
                Meu foco é transformar ideias em experiências digitais
                intuitivas, eficientes e visualmente atraentes, ajudando
                empresas e projetos a se destacarem no mundo digital.
                <br />
                <br />
                Tem um projeto em mente ou quer saber mais sobre meus serviços e
                valores? Vamos conversar e transformar suas ideias em soluções
                web reais! 💻✨
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className=" text-left w-full "
          >
            <div className=" flex items-center mb-4 sm:mb-6 ">
              <h3 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl pr-2 text-foreground ">
                Minha
              </h3>
              <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>
                Jornada
              </h3>
            </div>
            <div className=" backdrop-blur-sm ">
              <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed sm:leading-loose text-justify ">
                Desde pequeno sempre fui apaixonado por computadores. A
                curiosidade em entender como as coisas funcionavam me levou a
                explorar diversas áreas da tecnologia. Participei por alguns
                anos de projetos de robótica, competindo em torneios regionais e
                estaduais, e também realizei cursos voltados principalmente para
                hardware.
                <br />
                <br />
                Mais tarde, iniciei a faculdade de Análise e Desenvolvimento de
                Sistemas, e atualmente atuo com automações e gestão de TI. Foi
                nesse caminho que descobri minha verdadeira afinidade pela área
                de frontend — tudo começou ao entender como funcionava um site
                simples, e desde então, mergulhei de vez no desenvolvimento web.
                Hoje, continuo aprimorando minhas habilidades e também crio
                designs e interfaces para sites, unindo lógica e criatividade em
                cada projeto.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
