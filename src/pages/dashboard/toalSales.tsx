import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";

export const description = "A donut chart";

const chartData = [
  { mode: "sponsored", visitors: 154.02, fill: "#95A4FC" },
  { mode: "mail", visitors: 48.96, fill: "#B1E3FF" },
  { mode: "affiliate", visitors: 135.18, fill: "#BAEDBD" },
  { mode: "direct", visitors: 300.6, fill: "#1C1C1C" },
];

const chartConfig = {
  direct: {
    label: "Direct",
    color: "#1C1C1C",
  },
  affiliate: {
    label: "Affiliate",
    color: "#BAEDBD",
  },
  sponsored: {
    label: "Sponsored",
    color: "#95A4FC",
  },
  mail: {
    label: "E-mail",
    color: "#B1E3FF",
  },
};

export function TotalSales() {
  return (
    <Card className="flex-1 flex flex-col gap-2">
      <CardHeader className="items-center pb-0">
        <CardTitle>Total Sales</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="mode"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="w-full flex-col gap-2 text-sm">
        {chartData.map((entity) => {
          return (
            <div className="w-full flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: entity.fill }}
                ></div>
                <p>{entity.mode}</p>
              </div>
              <p>${entity.visitors}</p>
            </div>
          );
        })}
      </CardFooter>
    </Card>
  );
}
