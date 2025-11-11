"use client";

import { TrendingUp } from "lucide-react";
import {
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  SiCss3,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
} from "react-icons/si";

export const Skills = () => {
  const chartData = [
    { skill: "React", porcentagem: 70, icon: <SiReact color="#61DAFB" /> },
    { skill: "Tailwind", porcentagem: 70, icon: <SiTailwindcss color="#38BDF8" /> },
    { skill: "Git", porcentagem: 70, icon: <SiGit color="#F05033" /> },
    { skill: "HTML5", porcentagem: 80, icon: <SiHtml5 color="#E34F26" /> },
    { skill: "CSS3", porcentagem: 75, icon: <SiCss3 color="#1572B6" /> },
    { skill: "Github", porcentagem: 40, icon: <SiGithub color="#fff" /> },
    { skill: "JavaScript", porcentagem: 60, icon: <SiJavascript color="#F7DF1E" /> },
    { skill: "ShadcnUI", porcentagem: 60, icon: <SiShadcnui color="#a855f7" /> },
    { skill: "NextJS", porcentagem: 40, icon: <SiNextdotjs color="#fff" /> },
  ];

  const chartConfig = {
    porcentagem: {
      label: "Porcentagem",
      color: "var(--primary)",
    },
  };

  return (
    <section
      id="skills"
      className="flex flex-col space-y-10 justify-center items-center w-full min-h-screen p-5 md:p-10"
    >
      <h1 className="text-4xl font-bold text-center">Conhecimentos</h1>

      <Card
        className="flex gap-6 p-4 sm:p-6 bg-foreground/10 text-foreground items-center justify-between w-full mx-auto"
      >
        <div className="w-full flex flex-col items-center justify-center">
          {/* 🔹 Ícones fora do gráfico */}
          <div className="flex flex-row flex-wrap justify-around gap-4 mt-4 sm:mt-6 w-full justify-items-center">
            {chartData.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-xs sm:text-sm"
              >
                <div className="text-xl sm:text-2xl">{item.icon}</div>
                <span className="font-medium">{item.skill}</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground">
                  {item.porcentagem}%
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* --- Bar Chart    --- */}
        <div className="w-full flex flex-col items-center col-span-2">

          <CardContent className="w-full md:w-[80%] mt-4 sm:mt-6 p-5">
            <ChartContainer config={chartConfig} >
              <ResponsiveContainer width="100%">
                <BarChart data={chartData} layout="vertical" className="p-2">
                  <CartesianGrid horizontal={true} />
                  <YAxis
                    dataKey="skill"
                    type="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <XAxis dataKey="porcentagem" type="number" domain={[0, 100]} />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Bar
                    dataKey="porcentagem"
                    layout="vertical"
                    fill="var(--color-porcentagem)"
                    radius={4}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </div>

        {/* --- Footer --- */}
        <CardFooter className="flex flex-col md:col-span-2 items-center gap-2 text-xs sm:text-sm">
          <h2 className="flex gap-2 leading-none font-medium items-center">
            Tecnologias
          </h2>
        </CardFooter>
      </Card>

    </section>
  );
};
