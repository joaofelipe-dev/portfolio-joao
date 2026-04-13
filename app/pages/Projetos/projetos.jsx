"use client";
import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Chip } from "@/components/ui/chip";

const PROJETOS_DATA = [
  {
    image: "/centralizador.png",
    title: "Centralizador de Pedidos",
    description:
      "Sistema Fullstack para gestão de pedidos empresariais. Interface React com Next.js, PostgreSQL, API REST e gestão em tempo real.",
    href: "https://github.com/joaofelipe-dev/centralizador",
    tags: ["React", "Next.js", "TypeScript", "PostgreSQL", "Node.js"],
    category: "Sistema Corporativo",
    live: true,
  },
  {
    image: "/placeholder.svg",
    title: "Firebroker",
    description:
      "Plataforma para análise de imóveis. Integração com APIs externas e visualização de dados em tempo real.",
    href: "https://firebroker.vercel.app",
    tags: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Vercel"],
    category: "Plataforma",
    live: true,
  },
  {
    image: "/placeholder.svg",
    title: "PCEasyBot",
    description:
      "Bot de automação para TikTok. Automatiza tarefas repetitivas e interações com usuários.",
    href: "https://github.com/joaofelipe-dev/PCEasyBot",
    tags: ["Python", "Automação", "Bot", "TikTok"],
    category: "Automação",
    live: false,
  },
  {
    image: "/travelgram.png",
    title: "Travelgram",
    description:
      "Website de perfil de viagens responsivo. Design mobile-first com integração Pages do GitHub.",
    href: "https://joaofelipe-dev.github.io/Travelgram",
    tags: ["HTML5", "CSS3", "Mobile-First", "GitHub Pages"],
    category: "Website",
    live: true,
  },
  {
    image: "/pedido-papelaria.png",
    title: "Sistema de Papelaria",
    description:
      "Sistema de gestão para papelarias. Fluxo simplificado de pedidos com interface intuitiva.",
    href: "https://pedidos-papelaria.vercel.app",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    category: "Sistema Corporativo",
    live: true,
  },
];

export const Projetos = () => {
  return (
    <section id="projetos" className="w-full flex flex-col items-center justify-center mx-auto px-4 py-12 md:py-16 relative">
      {/* Background Blobs */}
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-tertiary/5 rounded-full blur-[150px] -z-10" />

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-on-surface font-[var(--font-space-grotesk)] tracking-tight">
        Projetos Entregues
      </h2>
      <p className="text-sm md:text-base text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
        Aplicações reais que entreguei para clientes. Cada projeto tem link para visualização.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-6 justify-items-center">
        {PROJETOS_DATA.map((projeto, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            viewport={{ once: true }}
            className="w-full max-w-md"
          >
            <article className="group bg-surface-container-low rounded-xl overflow-hidden transition-all duration-300 hover:bg-surface-container-high hover:scale-[1.02]">
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={projeto.image}
                  alt={projeto.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <a
                    href={projeto.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-full p-3 hover:scale-110 transition-transform"
                    aria-label={`Ver ${projeto.title}`}
                  >
                    {projeto.href.startsWith("http") ? <Github className="size-5" /> : <ExternalLink className="size-5" />}
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-on-surface font-[var(--font-space-grotesk)] tracking-tight">
                    {projeto.title}
                  </h3>
                  {projeto.live && (
                    <Chip variant="secondary">Live</Chip>
                  )}
                </div>
                <p className="text-sm text-on-surface-variant mb-4">
                  {projeto.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {projeto.tags.map((tag, tagIndex) => (
                    <Chip key={tagIndex} variant="primary">
                      {tag}
                    </Chip>
                  ))}
                </div>
              </div>
            </article>
          </motion.div>
        ))}
      </div>
    </section>
  );
};