'use client'
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
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";

export const Stack = () => {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiGithub />, title: "Github", href: "https://github.com" },
    { node: <SiHtml5 />, title: "Html5", href: "" },
    { node: <SiCss3 />, title: "Css3", href: "" },
    { node: <SiJavascript />, title: "JavaScript", href: "" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    { node: <SiShadcnui />, title: "Shadcn UI", href: "https://ui.shadcn.com" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  ];

  return (
    <div className="flex flex-col items-center  justify-evenly h-30 w-full">
      <h2 className="text-2xl md:text-3xl font-bold">Stack de Tecnologias</h2>
      <div
        className="w-full max-w-full overflow-hidden"
        style={{ position: "relative" }}
      >
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="right"
          logoHeight={40}
          gap={32}
          copyCount={3}
          pauseOnHover
          scaleOnHover
          ariaLabel="Tecnologias que utilizo: React, Next.js, TypeScript, JavaScript, Node.js, PostgreSQL, Tailwind CSS, Shadcn UI, Vercel, Git e mais"
        />
      </div>
    </div>
  );
};
