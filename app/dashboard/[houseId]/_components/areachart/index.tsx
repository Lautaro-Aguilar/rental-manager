"use client";
import { AreaChart } from "@tremor/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartdata = [
  {
    date: "Jan",
    Sales: 200,
  },
  {
    date: "Feb",
    Sales: 253,
  },
  {
    date: "Mar",
    Sales: 342,
  },
  {
    date: "Apr",
    Sales: 435,
  },
  {
    date: "May",
    Sales: 543,
  },
  {
    date: "Jun",
    Sales: 321,
  },
  {
    date: "Jul",
    Sales: 643,
  },
  {
    date: "Aug",
    Sales: 654,
  },
  {
    date: "Sep",
    Sales: 754,
  },
  {
    date: "Oct",
    Sales: 532,
  },
  {
    date: "Nov",
    Sales: 872,
  },
  {
    date: "Dec",
    Sales: 921,
  },
];

const valueFormatter = function (number: number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

export default function Example() {
  return (
    <Card className="w-full max-w-full h-full sm:flex-none bg-transparent/65">
      <CardHeader className="p-4">
        <CardTitle>Sales Summary</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <AreaChart
          className="h-48"
          data={chartdata}
          index="date"
          yAxisWidth={65}
          showAnimation
          categories={["Sales", "The Pragmatic Engineer"]}
          showLegend={false}
          colors={["sky"]}
          valueFormatter={valueFormatter}
        />
      </CardContent>
    </Card>
  );
}
