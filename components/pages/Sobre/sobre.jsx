"use client";
import Particles from "@/components/ui/Particles";
import { motion } from "motion/react";

export const Sobre = () => {

  return (
    <>

      <section
        id="sobre"
        className="relative snap-start min-h-screen flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
      >
        {/* Fundo com partículas */}
        <div className="absolute inset-0 -z-10">
          <Particles
            particleColors={["#9933ff", "#9933ff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={300}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
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
