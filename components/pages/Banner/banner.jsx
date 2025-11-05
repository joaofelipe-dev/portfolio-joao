'use client'
import { Button } from "@/components/ui/button";
import TextType from "@/components/ui/TextType";
import GradientText from "@/components/ui/GradientText";
import { UserRound, PanelsTopLeft } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import LogoLoop from "@/components/ui/LogoLoop"
import { SiReact, SiNextdotjs, SiTailwindcss, SiGit, SiShadcnui } from 'react-icons/si';

export function Banner() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiShadcnui />, title: "Shadcn UI", href: "https://ui.shadcn.com" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  ];

  return (
    <section
      id="banner"
      className="w-full min-h-screen md:grid md:grid-cols-2 bg-cover bg-center dark:bg-[url('/wallpaper-dark.png')] bg-[url('/wallpaper-light.jpg')] p-5 md:p-10 "
    >
      {/* Seção Esquerda - Conteúdo Principal (Visível em todas as telas) */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.8 },
        }}
        viewport={{ once: false, amount: 0.3 }}
        className="h-full flex items-center"
      >
        <div className="w-full max-w-4xl mx-auto">
          {/* Título */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-8">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4">
              Transformando ideias em&nbsp;
            </h1>
            <span className="text-3xl md:text-6xl">
              <GradientText animationSpeed={120}>
                <TextType
                  text={[
                    "experiências únicas",
                    "projetos funcionais",
                    "aplicações web",
                    "interfaces intuitivas",
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
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-lg md:text-xl text-muted-foreground">
              Desenvolvedor Frontend | React | Next.js | Tailwind CSS. Vamos
              criar algo incrível juntos!
            </h2>
          </div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-16 md:mb-0">
            <Button className="flex items-center justify-center gap-2 w-full sm:w-40 h-12 md:w-56 md:h-12 lg:w-64">
              <UserRound className="size-4 md:size-5" />
              <span>Entre em contato</span>
            </Button>
            <Link href="#projetos" className="w-full sm:w-auto">
              <Button
                className="flex items-center justify-center gap-2 w-full sm:w-40 h-12 md:w-52 md:h-12 lg:w-60"
                variant="outline"
              >
                <PanelsTopLeft className="size-4 md:size-5" />
                <span>Ver Projetos</span>
              </Button>
            </Link>
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
        viewport={{ once: false, amount: 0.3 }}
        className="h-full flex items-center justify-center py-10 md:py-0"
      >
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center gap-12 md:gap-16 py-8 w-full">
            {/* Título principal */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Experiências</h2>
            </div>

            {/* Números e estatísticas */}
            <div className="grid grid-cols-2 gap-8 md:gap-12 text-lg md:text-xl w-full max-w-sm">
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold">1+</span>
                <span className="text-muted-foreground text-sm md:text-base">
                  Ano de Experiência
                </span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold">37K+</span>
                <span className="text-muted-foreground text-sm md:text-base">
                  Xícaras de Café
                </span>
              </div>

              <div className="flex flex-col items-center col-span-2">
                <span className="text-4xl md:text-5xl font-bold">∞</span>
                <span className="text-muted-foreground text-sm md:text-base">
                  Linhas de Código
                </span>
              </div>
            </div>

            {/* Tecnologias */}
            <div className="flex flex-col items-center justify-end gap-6 w-full max-w-full">
              <h2 className="text-2xl md:text-3xl font-bold">Tecnologias</h2>
              <div className="w-full max-w-full overflow-hidden" style={{ height: '120px', position: 'relative' }}>
                <LogoLoop
                  logos={techLogos}
                  speed={100}
                  direction="right"
                  logoHeight={40}
                  gap={32}
                  copyCount={3}
                  pauseOnHover
                  scaleOnHover
                  ariaLabel="Conhecimentos"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}