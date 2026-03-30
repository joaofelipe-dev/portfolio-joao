"use client";
import { Button } from "@/components/ui/button";
import TextType from "@/components/ui/TextType";
import GradientText from "@/components/ui/GradientText";
import { UserRound, PanelsTopLeft } from "lucide-react";
import { motion } from "motion/react";

export function Banner() {
  return (
    <section
      id="banner"
      className="w-full min-h-screen md:grid md:grid-cols-5 py-6 sm:py-10 rounded-2xl overflow-x-hidden"
    >
      {/* Seção Esquerda - Conteúdo Principal (Visível em todas as telas) */}
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
        <div className="w-full max-w-4xl mx-auto">
          {/* Título */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight mb-2 sm:mb-4">
              João Felipe | <br className="hidden sm:block" />
              Desenvolvendo Soluções em&nbsp;
            </h1>
            <span className="text-2xl sm:text-4xl md:text-6xl">
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

          {/* Subtítulo */}
          <div className="mb-6 sm:mb-8 text-center md:text-left">
            <h2 className="text-xs sm:text-base md:text-xl text-muted-foreground">
              Frontend Engineer especializado em ecossistemas React e Next.js.
              Foco em performance, escalabilidade e na intersecção entre tecnologia e produto.
            </h2>
          </div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 mb-12 md:mb-0">
            <a href="#contato" className="w-full sm:w-auto" aria-label="Navegar para seção de contato">
              <Button className="flex items-center justify-center gap-2 w-full sm:w-40 h-10 sm:h-12 md:w-56 md:h-12 lg:w-64 text-sm sm:text-base">
                <UserRound className="size-3 sm:size-4 md:size-5" />
                <span>Iniciar uma Conversa</span>
              </Button>
            </a>
            <a href="#projetos" className="w-full sm:w-auto" aria-label="Ver meus projetos">
              <Button
                className="flex items-center justify-center gap-2 w-full sm:w-40 h-10 sm:h-12 md:w-52 md:h-12 lg:w-60 text-sm sm:text-base"
                variant="outline"
              >
                <PanelsTopLeft className="size-3 sm:size-4 md:size-5" />
                <span>Explorar Projetos</span>
              </Button>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Seção Direita - Estatísticas e Tecnologias (Visível em todas as telas) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.8, delay: 0.2 },
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="h-full flex items-center justify-center py-8 md:py-0 col-span-2"
      >
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center gap-6 sm:gap-12 md:gap-16 py-6 sm:py-8 w-full px-2">
            {/* Título principal */}
            <div>
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold">Indicadores de Maturidade</h2>
            </div>

            {/* Números e estatísticas */}
            <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-12 text-sm sm:text-lg md:text-xl w-full max-w-lg">
              <div className="flex flex-col items-center">
                <span className="text-xl sm:text-3xl md:text-4xl font-bold">Clean Code</span>
                <span className="text-muted-foreground text-xs sm:text-sm md:text-base">
                  Código organizado e escalável
                </span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-xl sm:text-3xl md:text-4xl font-bold">Arquitetura</span>
                <span className="text-muted-foreground text-xs sm:text-sm md:text-base">
                  Orientada a SOLID
                </span>
              </div>

              <div className="flex flex-col items-center col-span-2">
                <span className="text-2xl sm:text-4xl md:text-5xl font-bold">Performance</span>
                <span className="text-muted-foreground text-xs sm:text-sm md:text-base">
                  Foco em UX e escalabilidade
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section >
  );
}
