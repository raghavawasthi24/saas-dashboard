import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";
import { revenueData } from "../../constants/dashboard";

const chartConfig = {
  currWeek: {
    label: "Current Week",
    color: "var(--brand)",
  },
  prevWeek: {
    label: "Previous Week",
    color: "var(--cyan)",
  },
};

export function Revenue() {
  return (
    <Card className="w-full md:w-2/3 h-fit border-none shadow-none bg-secondary">
      <CardHeader>
        <CardTitle className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span>Revenue</span>

          <hr className="hidden sm:blockrotate-90 w-6 text-black" />

          <ul className="flex flex-col sm:flex-row sm:gap-8 list-disc font-light text-sm ml-4">
            <li>
              <span>Current Week</span>
              <span className="ml-2 font-semibold">$58,211</span>{" "}
            </li>
            <li>
              <span>Previous Week</span>
              <span className="ml-2 font-semibold">$68,768</span>
            </li>
          </ul>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-64">
          <LineChart
            accessibilityLayer
            data={revenueData}
            margin={{
              left: 12,
              right: 12,
            }}
            className="h-64"
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="currWeek"
              type="monotone"
              stroke="var(--color-currWeek)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="prevWeek"
              type="monotone"
              stroke="var(--color-prevWeek)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
