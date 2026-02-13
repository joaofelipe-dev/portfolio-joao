"use client";
import { Button } from "@/components/ui/button";
import TextType from "@/components/ui/TextType";
import GradientText from "@/components/ui/GradientText";
import { UserRound, PanelsTopLeft } from "lucide-react";
import { motion } from "motion/react";
import LogoLoop from "@/components/ui/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiShadcnui,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

export function Banner() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiGithub />, title: "Github", href: "https://github.com" },
    { node: <SiHtml5 />, title: "Html5", href: "" },
    { node: <SiCss3 />, title: "Css3", href: "" },
    { node: <SiJavascript />, title: "JavaScript", href: "" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    { node: <SiShadcnui />, title: "Shadcn UI", href: "https://ui.shadcn.com" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  ];

  return (
    <section
      id="banner"
      className="w-full min-h-screen md:grid md:grid-cols-2 bg-cover bg-center dark:bg-[url('/wallpaper-dark.png')] bg-[url('/wallpaper-light.jpg')] p-5 md:p-10 overflow-x-hidden"
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
              João Felipe | <br className="hidden md:block" />
              Desenvolvendo Soluções em&nbsp;
            </h1>
            <span className="text-3xl md:text-6xl">
              <GradientText animationSpeed={150}>
                <TextType
                  text={[
                    "engenharia de software",
                    "sistemas escaláveis",
                    "experiências de alto impacto",
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
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-lg md:text-xl text-muted-foreground">
              Frontend Engineer especializado em ecossistemas React e Next.js.
              Foco em performance, escalabilidade e na intersecção entre tecnologia e produto.
            </h2>
          </div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-16 md:mb-0">
            <a href="#contato" className="w-full sm:w-auto" aria-label="Navegar para seção de contato">
              <Button className="flex items-center justify-center gap-2 w-full sm:w-40 h-12 md:w-56 md:h-12 lg:w-64">
                <UserRound className="size-4 md:size-5" />
                <span>Iniciar uma Conversa</span>
              </Button>
            </a>
            <a href="#projetos" className="w-full sm:w-auto" aria-label="Ver meus projetos">
              <Button
                className="flex items-center justify-center gap-2 w-full sm:w-40 h-12 md:w-52 md:h-12 lg:w-60"
                variant="outline"
              >
                <PanelsTopLeft className="size-4 md:size-5" />
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
        viewport={{ once: false, amount: 0.3 }}
        className="h-full flex items-center justify-center py-10 md:py-0"
      >
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center gap-12 md:gap-16 py-8 w-full">
            {/* Título principal */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Indicadores de Maturidade</h2>
            </div>

            {/* Números e estatísticas */}
            <div className="grid grid-cols-2 gap-8 md:gap-12 text-lg md:text-xl w-full max-w-lg">
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold">Clean Code</span>
                <span className="text-muted-foreground text-sm md:text-base">
                  Código organizado e escalável
                </span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold">Arquitetura</span>
                <span className="text-muted-foreground text-sm md:text-base">
                  Orientada a SOLID
                </span>
              </div>

              <div className="flex flex-col items-center col-span-2">
                <span className="text-4xl md:text-5xl font-bold">Performance</span>
                <span className="text-muted-foreground text-sm md:text-base">
                  Foco em UX e escalabilidade
                </span>
              </div>
            </div>

            {/* Tecnologias */}
            <div className="flex flex-col items-center gap-y-20 w-full ">
              <h2 className="text-2xl md:text-3xl font-bold">Stack de Tecnologias</h2>
              <div
                className="w-full max-w-full overflow-hidden"
                style={{ height: "120px", position: "relative" }}
              >
                <LogoLoop
                  logos={techLogos}
                  speed={50}
                  direction="right"
                  logoHeight={60}
                  gap={32}
                  copyCount={3}
                  pauseOnHover
                  scaleOnHover
                  ariaLabel="Tecnologias que utilizo: React, Next.js, Tailwind, Git e mais"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section >
  );
}
