import { LabelList, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a label list";

const chartData = [
  { linkType: "chrome", links: 275, fill: "var(--color-chrome)" },
  { linkType: "safari", links: 200, fill: "var(--color-safari)" },
  { linkType: "firefox", links: 187, fill: "var(--color-firefox)" },
  { linkType: "edge", links: 173, fill: "var(--color-edge)" },
  { linkType: "other", links: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  Links: {
    label: "Links",
  },
  chrome: {
    label: "Facebook",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Instagram",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Twitter",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "LinkdIn",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};

export function LinkChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Total Registered Links</CardTitle>
        <CardDescription>
          Cumulative count of all links registered to date
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="Links" hideLabel />}
            />
            <Pie data={chartData} dataKey="links">
              <LabelList
                dataKey="linkType"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value) => chartConfig[value]?.label}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
