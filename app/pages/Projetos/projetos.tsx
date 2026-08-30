"use client";
import { motion } from "motion/react";
import { Github } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import Image from "next/image";

interface Projeto {
  image: string;
  title: string;
  description: string;
  href: string;
  tags: string[];
  category: string;
  live: boolean;
}

const PROJETOS_DATA: Projeto[] = [
  {
    image: "/design-system.webp",
    title: "Design System",
    description:
      "Design system desenvolvido para padronizar interfaces e acelerar a construção de aplicações, com componentes reutilizáveis, regras de consistência visual, tokens de design e foco em escalabilidade e manutenção do front-end.",
    href: "https://joaofelipe-dev.github.io/defaultdesignsystem",
    tags: ["React", "TypeScript", "Tailwind CSS", "GitHub Pages"],
    category: "Plataforma",
    live: true,
  },
  {
    image: "/pedido-papelaria.webp",
    title: "Sistema de Papelaria",
    description:
      "Sistema de gestão para papelarias. Fluxo simplificado de pedidos com interface intuitiva.",
    href: "#",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    category: "Sistema Corporativo",
    live: false,
  },
  {
    image: "/centralizador.webp",
    title: "Centralizador de Pedidos",
    description:
      "Sistema Fullstack para gestão de pedidos empresariais. Interface React com Next.js, PostgreSQL, API REST e gestão em tempo real.",
    href: "https://github.com/joaofelipe-dev/centralizador",
    tags: ["React", "Next.js", "TypeScript", "PostgreSQL", "Node.js", "Vercel"],
    category: "Sistema Corporativo",
    live: true,
  },
  {
    image: "/promomaker.webp",
    title: "PromoMaker",
    description:
      "Plataforma para criação de placas de ofertas. Interface intuitiva para gerar materiais promocionais.",
    href: "#",
    tags: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Vercel"],
    category: "Plataforma",
    live: false,
  },
  {
    image: "/painel-vendas.webp",
    title: "Painel de Vendas",
    description:
      "Dashboard para gestão de vendas. Visualização de métricas em tempo real com gráficos e relatórios.",
    href: "#",
    tags: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Vercel"],
    category: "Sistema Corporativo",
    live: false,
  },
  {
    image: "/travelgram.webp",
    title: "Travelgram",
    description:
      "Website de perfil de viagens responsivo. Design mobile-first com integração Pages do GitHub.",
    href: "https://joaofelipe-dev.github.io/Travelgram",
    tags: ["HTML5", "CSS3", "Mobile-First", "GitHub Pages"],
    category: "Website",
    live: true,
  },
];

export const Projetos = () => {
  return (
    <section id="projetos" className="w-full flex flex-col items-center justify-center mx-auto px-4 py-12 md:py-16 relative">
      {/* Background Blobs */}
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-tertiary/5 rounded-full blur-[150px] -z-10" />

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-on-surface tracking-tight">
        Projetos Entregues
      </h2>
      <p className="text-sm md:text-base text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
        Projetos que desenvolvi, de plataformas web a sistemas corporativos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-6 justify-items-center">
        {PROJETOS_DATA.map((projeto, index) => (
          <motion.div
            key={projeto.title}
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
            className="w-full max-w-md border-2 border-accent hover:shadow-2xl rounded-xl"
          >
            <article className="group bg-surface-container-low rounded-xl overflow-hidden transition-all duration-300 hover:bg-surface-container-high hover:scale-[1.02]">
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={projeto.image}
                  alt={projeto.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
                {/* Overlay */}
                {projeto.href.startsWith("http") && (
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <a
                      href={projeto.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass rounded-full p-3 hover:scale-110 focus-visible:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-transform"
                      aria-label={`Ver ${projeto.title}`}
                    >
                      <Github className="size-5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-on-surface font-[var(--font-space-grotesk)] tracking-tight">
                    {projeto.title}
                  </h3>
                  {projeto.live && projeto.href.startsWith("http") && (
                    <Chip variant="secondary">Ao vivo</Chip>
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
