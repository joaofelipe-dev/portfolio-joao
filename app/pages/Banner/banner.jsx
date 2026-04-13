"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import {
  Code2,
  Zap,
  Users,
  TrendingUp,
  ArrowRight,
  FolderKanban,
  Figma,
  Terminal,
  Database,
  Globe
} from "lucide-react";
import GitHubStats from "@/components/ui/GitHubStats";

// Static data fora do componente — nunca recriados
const PILLS = [
  { icon: Code2, label: "Clean Code", color: "text-tertiary" },
  { icon: Zap, label: "Performance", color: "text-secondary" },
  { icon: Users, label: "UX First", color: "text-primary" },
  { icon: TrendingUp, label: "Escalável", color: "text-tertiary" },
];

const TECH_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Vercel",
];

// Variants centralizados — stagger automático, sem delays manuais
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
};

export function Banner() {
  const [commits, setCommits] = useState(38);
  const [projects, setProjects] = useState("5+");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => {
        if (data.commits !== undefined) setCommits(data.commits);
        if (data.repos !== undefined) setProjects(String(data.repos));
      })
      .catch(() => { })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      id="banner"
      className="w-full min-h-screen flex items-center py-16 lg:py-20 relative overflow-hidden"
    >
      {/* Background Effects — sem animate-pulse (GPU-heavy) */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-tertiary/8 rounded-full blur-[180px] -z-10" />
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-secondary/5 rounded-full blur-[250px] -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(173,198,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(173,198,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Content — um único container com stagger */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-[var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-5 tracking-tight"
            >
              <span className="block text-on-surface mb-1">
                Desenvolvedor que
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-tertiary">
                entrega resultados
              </span>
            </motion.h1>

            {/* Value Proposition */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-on-surface-variant max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed"
            >
              Interfaces modernas com{" "}
              <span className="text-tertiary font-medium">React e Next.js</span>{" "}
              — foco em resultados reais, código limpo e
              {" "}<span className="text-primary font-medium">performance</span>{" "}
              que o usuário sente.
            </motion.p>

            {/* Feature Pills */}
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
                  <span className="text-xs text-on-surface-variant">{item.label}</span>
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
                  className="w-full sm:w-56 h-12 text-base gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40"
                >
                  <span>Entre em Contato</span>
                  <ArrowRight className="size-4" />
                </Button>
              </a>
              <a href="#projetos" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-56 h-12 text-base gap-2">
                  <FolderKanban className="size-4" />
                  <span>Ver Portfólio</span>
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Visual Area */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:block lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">

              {/* Main Dashboard Card */}
              <motion.div
                className="absolute inset-0 glass rounded-3xl p-6 border border-outline-variant/20"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Code2 className="size-4 text-primary" />
                    </div>
                    <span className="font-semibold text-on-surface">Dashboard</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-xs text-secondary font-medium">Online</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-surface-container-low rounded-xl p-3 border border-outline-variant/10">
                    <p className="text-xs text-on-surface-variant mb-1">Commits</p>
                    <p className="text-xl font-bold text-primary">{loading ? "..." : commits}</p>
                    <p className="text-[10px] text-secondary">Este ano</p>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-3 border border-outline-variant/10">
                    <p className="text-xs text-on-surface-variant mb-1">Projetos</p>
                    <p className="text-xl font-bold text-secondary">{loading ? "..." : projects}</p>
                    <p className="text-[10px] text-secondary">Entregues</p>
                  </div>
                </div>

                {/* GitHub Activity */}
                <div className="mb-4">
                  <GitHubStats />
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-xs text-on-surface-variant mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {TECH_STACK.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-surface-container-high text-xs text-on-surface-variant"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Terminal className="size-4 text-primary" />
                  <span className="text-xs text-on-surface">frontend-dev</span>
                </div>
              </motion.div>

              {/* Corner Icons */}
              <motion.div
                className="absolute top-10 -left-6"
              >
                <Globe className="size-6 text-primary/40" />
              </motion.div>

              <motion.div
                className="absolute bottom-20 -right-4"
              >
                <Database className="size-5 text-secondary/40" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}