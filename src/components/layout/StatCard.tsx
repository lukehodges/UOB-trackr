import React from "react";

type TrendData = {
  direction: "up" | "down" | "flat";
  percentage: number;
};

type StatCardProps = {
  title: string;
  value: string;
  trend?: TrendData;
};

const trendStyles = {
  up: "text-green-600 dark:text-green-400",
  down: "text-red-600 dark:text-red-400",
  flat: "text-zinc-500 dark:text-zinc-400",
};

const trendArrows = {
  up: "↑",
  down: "↓",
  flat: "→",
};

export default function StatCard({ title, value, trend }: StatCardProps) {
  return (
    <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl transition-all duration-300 hover:shadow-primary/5">
      <p className="text-sm font-medium tracking-wide text-zinc-500 dark:text-zinc-400">{title}</p>
      <p className="mt-1 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">{value}</p>
      {trend && (
        <span
          className={`mt-2 inline-block text-sm ${trendStyles[trend.direction]}`}
        >
          {trendArrows[trend.direction]} {trend.percentage}%
        </span>
      )}
    </div>
  );
}
