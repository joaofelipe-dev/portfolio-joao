"use client";
import { Button } from "@/components/ui/button";
import TextType from "@/components/ui/TextType";
import GradientText from "@/components/ui/GradientText";
import { UserRound, PanelsTopLeft } from "lucide-react";
import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Banner() {
  return (
    <section
      id="banner"
      className="w-full min-h-screen md:grid md:grid-cols-5 py-12 md:py-16 lg:py-20 px-4 md:px-0 rounded-2xl overflow-x-hidden"
    >
      {/* Left Section - Main Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.8 },
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="h-full flex items-center col-span-3"
      >
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
          {/* Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-10 gap-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              João Felipe
            </h1>
            <div className="h-1.5 w-20 bg-primary rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground/80">
              Desenvolvendo Soluções em
            </h2>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-h-16 md:min-h-20">
              <GradientText animationSpeed={150}>
                <TextType
                  text={[
                    "engenharia de software",
                    "sistemas escaláveis",
                    "experiências de impacto",
                    "arquiteturas modernas",
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </GradientText>
            </span>
          </div>

          {/* Subtitle */}
          <div className="mb-10 md:mb-12">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Frontend Engineer especializado em ecossistemas React e Next.js.
              <br className="hidden sm:block" />
              Foco em performance, escalabilidade e na intersecção entre tecnologia e produto.
            </h3>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <a href="#contato" aria-label="Navegar para seção de contato" className="w-full">
                <Button className="flex items-center justify-center gap-2 w-full h-12 md:h-14 lg:h-16 px-8 text-base md:text-lg shadow-lg hover:shadow-xl transition-all">
                  <UserRound className="size-5 md:size-6" />
                  <span>Iniciar uma Conversa</span>
                </Button>
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <a href="#projetos" aria-label="Ver meus projetos" className="w-full">
                <Button
                  className="flex items-center justify-center gap-2 w-full h-12 md:h-14 lg:h-16 px-8 text-base md:text-lg"
                  variant="outline"
                >
                  <PanelsTopLeft className="size-5 md:size-6" />
                  <span>Explorar Projetos</span>
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Right Section - Stats */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.8, delay: 0.2 },
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="h-full flex items-center justify-center py-12 md:py-0 col-span-2 px-4 md:px-0"
      >
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center gap-12 md:gap-16 py-8 w-full">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Indicadores de Maturidade</h2>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8 md:gap-12 w-full max-w-lg"
            >
              <motion.div
                variants={item}
                className="flex flex-col items-center gap-2 p-6 md:p-8 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/50 transition-all"
              >
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Clean Code</span>
                <span className="text-xs md:text-sm text-muted-foreground">
                  Código organizado e escalável
                </span>
              </motion.div>

              <motion.div
                variants={item}
                className="flex flex-col items-center gap-2 p-6 md:p-8 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/50 transition-all"
              >
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Arquitetura</span>
                <span className="text-xs md:text-sm text-muted-foreground">
                  Orientada a SOLID
                </span>
              </motion.div>

              <motion.div
                variants={item}
                className="flex flex-col items-center gap-2 p-6 md:p-8 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/50 transition-all col-span-2"
              >
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">Performance</span>
                <span className="text-xs md:text-sm text-muted-foreground">
                  Foco em UX e escalabilidade
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
