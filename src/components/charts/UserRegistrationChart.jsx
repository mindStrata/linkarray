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
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

export const description = "A line chart";

const chartData = [
  { date: "24 Sep", desktop: 232 },
  { date: "25 Sep", desktop: 217 },
  { date: "26 Sep", desktop: 182 },
  { date: "27 Sep", desktop: 177 },
  { date: "28 Sep", desktop: 210 },
  { date: "29 Sep", desktop: 234 },
  { date: "30 Sep", desktop: 242 },
  { date: "01 Oct", desktop: 163 },
  { date: "02 Oct", desktop: 228 },
  { date: "03 Oct", desktop: 233 },
  { date: "04 Oct", desktop: 246 },
  { date: "05 Oct", desktop: 188 },
  { date: "06 Oct", desktop: 165 },
  { date: "07 Oct", desktop: 237 },
  { date: "08 Oct", desktop: 182 },
  { date: "09 Oct", desktop: 204 },
  { date: "10 Oct", desktop: 163 },
  { date: "11 Oct", desktop: 170 },
  { date: "12 Oct", desktop: 170 },
  { date: "13 Oct", desktop: 237 },
  { date: "14 Oct", desktop: 206 },
  { date: "15 Oct", desktop: 227 },
  { date: "16 Oct", desktop: 219 },
  { date: "17 Oct", desktop: 244 },
  { date: "18 Oct", desktop: 217 },
  { date: "19 Oct", desktop: 153 },
  { date: "20 Oct", desktop: 162 },
  { date: "21 Oct", desktop: 228 },
  { date: "22 Oct", desktop: 190 },
  { date: "23 Oct", desktop: 229 },
];

const chartConfig = {
  desktop: {
    label: "Users",
    color: "hsl(var(--chart-1))",
  },
};

export function UserRegistrationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Registrations</CardTitle>
        <CardDescription>
          Total new users registered in the last 30 days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
