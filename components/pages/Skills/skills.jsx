"use client"

import { TrendingUp } from "lucide-react"
import { ResponsiveContainer, Bar, BarChart, CartesianGrid, LabelList, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, XAxis, YAxis } from "recharts"

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
    { skill: "React", desktop: 70 },
    { skill: "Tailwind", desktop: 70 },
    { skill: "Git", desktop: 70 },
    { skill: "HTML5", desktop: 80 },
    { skill: "CSS3", desktop: 75 },
    { skill: "Github", desktop: 40 },
    { skill: "JavaScript", desktop: 60 },
    { skill: "ShadcnUI", desktop: 60 },
    { skill: "NextJS", desktop: 40 },
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
      className="flex flex-col space-y-10 justify-center items-center w-full min-h-screen h-screen p-5 md:p-10 "
    >
      <h1 className="text-4xl font-bold text-center">Conhecimentos</h1>
      <Card className="flex flex-col md:grid md:grid-cols-2 p-2 bg-foreground/10 text-foreground text-center items-center w-full h-full " >
        <CardHeader className="flex flex-col w-full justify-center items-center col-span-2 ">
          <CardTitle>Minhas habilidades</CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit.</CardDescription>
        </CardHeader>
        <Card className="flex-col w-full h-full text-center bg-foreground/20 text-foreground">
          <div className="w-full h-full flex flex-col items-center">
            <CardContent>
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-video max-h-[250px] w-full h-[250px]"
              >
                <ResponsiveContainer width="100%" height="100%">
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
                </ResponsiveContainer>
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
        </Card>
        <div className="w-full h-full">
          <Card className="h-full w-full flex justify-between bg-foreground/20 text-foreground">
            <CardContent >
              <ChartContainer config={chartConfig}>
                <BarChart
                  accessibilityLayer
                  data={chartData}
                  layout="vertical"
                >
                  <CartesianGrid horizontal={false} />
                  <YAxis
                    dataKey="month"
                    type="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    hide
                  />
                  <XAxis dataKey="desktop" type="number" hide />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Bar
                    dataKey="desktop"
                    layout="vertical"
                    fill="var(--color-desktop)"
                    radius={4}
                  >
                    <LabelList
                      dataKey="month"
                      position="insideLeft"
                      offset={8}
                      className="fill-(--color-label)"
                      fontSize={12}
                    />
                    <LabelList
                      dataKey="desktop"
                      position="right"
                      offset={8}
                      className="fill-foreground"
                      fontSize={12}
                    />
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 leading-none font-medium">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
              </div>
              <div className="text-muted-foreground leading-none">
                Showing total visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>
        </div>
      </Card>
    </section>

  )
}