"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"


export const Skills = () => {

    const chartData = [
        { skill: "React", desktop: 70},
        { skill: "Tailwind", desktop: 70},
        { skill: "Git", desktop: 70},
        { skill: "HTML5", desktop: 80},
        { skill: "CSS3", desktop: 75},
        { skill: "Github", desktop: 40},
        { skill: "JavaScript", desktop: 60},
        { skill: "ShadcnUI", desktop: 60},
        { skill: "NextJS", desktop: 40},
    ]

    const chartConfig = {
        desktop: {
            label: "Tecnologia",
            color: "var(--primary)",
        },
    }

    return (
        <section
  id="skills"
  className="flex flex-col gap-y-10 justify-center items-center w-full min-h-screen p-5 md:p-10 "
>
  <h1 className="text-4xl font-bold text-center">Conhecimentos</h1>
  <Card className="flex-col md:grid md:grid-cols-2 w-full h-full text-center bg-foreground/20 text-foreground">
    <div className="w-full h-full flex flex-col items-center">

    <CardHeader className="w-full h-full items-center pb-4">
      <CardTitle>Comparativo Skills</CardTitle>
      <CardDescription>
        Meus conhecimentos para cada ferramenta
      </CardDescription>
    </CardHeader>
    <CardContent className="bg-white">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-video max-h-[250px] "
      >
        <RadarChart data={chartData}>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarGrid />
          <PolarAngleAxis dataKey="skill" />
          <PolarRadiusAxis domain={[0, 100]} />
          <Radar
            dataKey="desktop"
            fill="var(--color-desktop)"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ChartContainer>
    </CardContent>
    <CardContent>
    </CardContent>
    <CardFooter className="flex-col gap-2 text-sm">
      <div className="text-muted-foreground flex items-center gap-2 leading-none">
        Skills
      </div>
    </CardFooter>
            </div>
    <div className="w-full h-full">
      <h1>Oi</h1>
    </div>
  </Card>
</section>

    )
}