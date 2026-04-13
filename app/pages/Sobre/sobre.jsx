"use client";
import Particles from "@/components/ui/Particles";
import { motion } from "motion/react";

const PARTICLES_CONFIG = {
  particleColors: ["#ddb7ff", "#adc6ff", "#4ae176"],
  particleCount: 150,
  particleSpread: 10,
  speed: 0.08,
  particleBaseSize: 250,
  moveParticlesOnHover: false,
  alphaParticles: false,
  disableRotation: false,
};

export const Sobre = () => {

  return (
    <>
      <section
        id="sobre"
        className="relative snap-start min-h-screen flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden"
      >
        {/* Background with Particles */}
        <div className="absolute inset-0 -z-10">
          <Particles {...PARTICLES_CONFIG} />
        </div>

        {/* Background Blobs */}
        <div className="absolute left-0 top-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[150px] -z-10" />
        <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-tertiary/5 rounded-full blur-[150px] -z-10" />

        {/* Header */}
        <div className="relative z-10 text-center mb-8 sm:mb-12 lg:mb-16 w-full max-w-6xl">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-on-surface font-[var(--font-space-grotesk)] tracking-tight"
          >
            Sobre Mim
          </motion.h2>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-primary font-medium"
          >
            +20 repos • ~350 contribuições • +13 tecnologias
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full max-w-6xl items-start">
          {/* Left Column */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-left w-full"
          >
            <div className="flex items-center mb-6 sm:mb-8 gap-3">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-on-surface">
                Visão
              </h3>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                Estratégica
              </h3>
            </div>
            <div className="space-y-5 sm:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-on-surface-variant leading-relaxed">
                Desenvolvedor Frontend focado em React, Next.js e TypeScript. Construo
                interfaces que resolvem problemas reais — do layout ao deploy em produção.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-on-surface-variant leading-relaxed">
                Trabalho com o ecossistema JavaScript moderno: Shadcn/UI, Tailwind CSS,
                Server Actions com Node.js e PostgreSQL via Next.js.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-on-surface-variant leading-relaxed">
                Minha abordagem: entender o problema primeiro, depois escolher a tecnologia
                certa. Código limpo, escalável e que outros devs conseguem manter.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-primary font-medium">
                Procuro minha primeira vaga CLT onde possa aplicar e evoluir essas habilidades.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-left w-full"
          >
            <div className="flex items-center mb-6 sm:mb-8 gap-3">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-on-surface">
                Trajetória
              </h3>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-tertiary">
                Técnica
              </h3>
            </div>
            <div className="space-y-5 sm:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-on-surface-variant leading-relaxed">
                Cursando Análise e Desenvolvimento de Sistemas. Minha base começou com
                robótica e manutenção de hardware, o que desenvolveu meu raciocínio
                lógico e capacidade de resolver problemas.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-on-surface-variant leading-relaxed">
                Comecei a programar em 2024 e desde então mantive um ritmo consistente:
                462 contribuições e 15 repositórios públicos, incluindo sistemas
                corporativos, plataformas web e aplicações com deploy em produção.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-on-surface-variant leading-relaxed">
                Cada projeto foi uma oportunidade de aprender e entregar valor real.
                Busco continuar evoluindo em um ambiente que valorize resultado.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};