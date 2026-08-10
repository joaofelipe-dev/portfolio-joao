"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "motion/react";
import {
  Accessibility,
  ArrowRight,
  Boxes,
  ArrowUpRight,
  FolderKanban,
  Gauge,
  FileCode2,
  type LucideIcon,
} from "lucide-react";
import GitHubStats from "@/components/ui/GitHubStats";

const GITHUB_USER = "joaofelipe-dev";

// Static data fora do componente — nunca recriados
const PILLS: { icon: LucideIcon; label: string; color: string }[] = [
  { icon: Gauge, label: "Performance · CWV", color: "text-primary" },
  { icon: Accessibility, label: "Acessibilidade", color: "text-tertiary" },
  { icon: Boxes, label: "Design System", color: "text-secondary" },
  { icon: FileCode2, label: "TypeScript", color: "text-tertiary" },
];

// Variants centralizados — stagger automático, sem delays manuais
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
};

export function Banner() {
  const [commits, setCommits] = useState<number | null>(null);
  const [repos, setRepos] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data: { commits?: number; repos?: number }) => {
        if (data.commits !== undefined) setCommits(data.commits);
        if (data.repos !== undefined) setRepos(data.repos);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      id="banner"
      className="w-full min-h-screen flex items-center py-16 lg:py-20 relative overflow-hidden"
    >
      {/* Background Effects — reduzido a 2 blobs, discreto */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/8 rounded-full blur-[200px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-tertiary/6 rounded-full blur-[180px] -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start mb-5"
            >
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-on-surface-variant">
                frontend.engineer
              </span>
            </motion.div>

            {/* Main Headline — específica, não promete o que não dá pra provar no primeiro scroll */}
            <motion.h1
              variants={itemVariants}
              className="font-[var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-5 tracking-tight"
            >
              <span className="sr-only">Engenheiro Frontend</span>
              <span className="block text-on-surface mb-1">
                Front-end na tela,
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-tertiary">
                engenharia por baixo dos panos
              </span>
            </motion.h1>

            {/* Value Proposition — concreta, sem adjetivo de efeito */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-on-surface-variant max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed"
            >
              Componentes, performance e acessibilidade — não só porque
              funcionam, mas porque entendi como funcionam. Do primeiro commit
              ao deploy.
            </motion.p>

            {/* Feature Pills — áreas de foco, não veredito sobre mim mesmo */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
            >
              {PILLS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low border border-outline-variant/20"
                >
                  <item.icon className={`size-3.5 ${item.color}`} />
                  <span className="text-xs text-on-surface-variant">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <a href="#contato" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-56 h-12 text-base gap-2"
                >
                  <span>Entre em Contato</span>
                  <ArrowRight className="size-4" />
                </Button>
              </a>
              <a href="#projetos" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-56 h-12 text-base gap-2"
                >
                  <FolderKanban className="size-4" />
                  <span>Ver Portfólio</span>
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Visual Area — terminal honesto, só com dados reais */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:block lg:col-span-5"
          >
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver perfil do GitHub de ${GITHUB_USER}`}
              className="group block focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 rounded-2xl"
            >
              <div className="glass rounded-2xl border border-outline-variant/20 overflow-hidden font-mono text-sm">
                {/* Barra de título do terminal */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-surface-container-high border-b border-outline-variant/10">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-outline-variant/40" />
                    <span className="size-2.5 rounded-full bg-outline-variant/40" />
                    <span className="size-2.5 rounded-full bg-outline-variant/40" />
                  </div>
                  <span className="text-[11px] text-on-surface-variant">
                    ~/{GITHUB_USER}
                  </span>
                  <ArrowUpRight className="size-3.5 text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Corpo do terminal */}
                <div className="p-5 space-y-4">
                  <div>
                    <p className="text-on-surface-variant">
                      <span className="text-secondary">$</span> gh api users/
                      {GITHUB_USER}/stats
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-surface-container-low rounded-xl p-3 border border-outline-variant/10">
                      <p className="text-[11px] text-on-surface-variant mb-1 font-sans">
                        commits (ano)
                      </p>
                      <p className="text-2xl font-bold text-primary tabular-nums">
                        {loading ? "···" : (commits ?? "—")}
                      </p>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-3 border border-outline-variant/10">
                      <p className="text-[11px] text-on-surface-variant mb-1 font-sans">
                        repositórios
                      </p>
                      <p className="text-2xl font-bold text-secondary tabular-nums">
                        {loading ? "···" : (repos ?? "—")}
                      </p>
                    </div>
                  </div>

                  <div>
                    <GitHubStats />
                  </div>

                  <p className="text-[11px] text-on-surface-variant font-sans pt-1">
                    dados via API pública do GitHub · atualizado em tempo real
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
