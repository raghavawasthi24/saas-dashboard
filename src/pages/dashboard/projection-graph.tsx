import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import {
  ChartContainer,
} from "../../components/ui/chart"
import { projectionData } from "../../constants/dashboard"

export const description = "A stacked bar chart with a legend"
export const iframeHeight = "600px"
export const containerClassName =
  "[&>div]:w-full [&>div]:max-w-md flex items-center justify-center min-h-svh"


const chartConfig = {
  projection: {
    label: "Projection",
    color: "#A8C5DA",
  },
  actual: {
    label: "Actual",
    color: "#DBE6ED",
  },
}

export function Projection() {
  return (
    <Card className="w-full md:w-1/2 h-fit border-none shadow-none bg-secondary">
      <CardHeader>
        <CardTitle>Projections vs Actuals</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full max-h-42">
          <BarChart data={projectionData}>
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <Bar
              dataKey="projection"
              stackId="a"
              fill={chartConfig.projection.color}
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="actual"
              stackId="a"
              fill={chartConfig.actual.color}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
