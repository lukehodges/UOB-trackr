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
  up: "text-green-600",
  down: "text-red-600",
  flat: "text-gray-500",
};

const trendArrows = {
  up: "↑",
  down: "↓",
  flat: "→",
};

export default function StatCard({ title, value, trend }: StatCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-1 text-3xl font-bold text-black">{value}</p>
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
