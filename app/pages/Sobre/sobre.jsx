"use client";
import Particles from "@/components/ui/Particles";
import { motion } from "motion/react";

export const Sobre = () => {

  return (
    <>

      <section
        id="sobre"
        className="relative snap-start min-h-screen flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden"
      >
        {/* Fundo com partículas */}
        <div className="absolute inset-0 -z-10">
          <Particles
            particleColors={["#7e42f5", "#7e42f5 ", "#2245f2"]}
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
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground"
          >
            Sobre Mim
          </motion.h2>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-primary max-w-2xl mx-auto font-medium"
          >
            Desenvolvedor Frontend | React | Next.js | Tailwind CSS
          </motion.div>
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
                Visão
              </h3>
              <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary`}>
                Estratégica
              </h3>
            </div>
              <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed sm:leading-loose text-justify">
                Atuo como Desenvolvedor Frontend com foco em arquiteturas robustas e escaláveis.
                Minha missão é transcender a entrega de código, focando na resolução de problemas reais de negócio através de interfaces intuitivas e de alta performance.
                Especialista em ecossistemas React, trabalho com a mentalidade de produto, garantindo que cada decisão técnica esteja alinhada aos objetivos estratégicos e à melhor experiência do usuário final.
                <br />
                <br />
                Acredito na autonomia técnica e na colaboração proativa, entregando soluções que não apenas funcionam, mas que são fáceis de manter e preparadas para crescer.
                <br />
                <br />
                Se você busca um profissional que conecta tecnologia de ponta com visão de mercado, vamos construir o próximo nível da sua aplicação.
              </p>
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
                Trajetória
              </h3>
              <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary`}>
                Técnica
              </h3>
            </div>
              <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed sm:leading-loose text-justify ">
                Minha base tecnológica começou na intersecção entre hardware e software, através de projetos de robótica competitiva e manutenção de sistemas.
                Essa fundação me proporcionou uma compreensão profunda de como a tecnologia opera "por baixo dos panos", desenvolvendo um pensamento lógico rigoroso e capacidade analítica diferenciada.
                <br />
                <br />
                Na transição para o desenvolvimento web, foquei em dominar as ferramentas que definem o mercado moderno (React, Next.js, JavaScript).
                Atualmente, somo minha formação acadêmica em Análise e Desenvolvimento de Sistemas à experiência prática em automação e gestão de TI, entregando projetos que equilibram agilidade e solidez arquitetural.
                Minha jornada é marcada pelo aprendizado contínuo e pela busca incessante por excelência técnica e usabilidade.
              </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};
