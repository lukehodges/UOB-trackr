"use client"

import { useState } from "react";
import type { GoalCard } from "@/lib/validators";

type EntryCardProps = {
  entry: GoalCard;
};

export default function PointsCard({ entry }: EntryCardProps) {
  const [isComplete, setIsComplete] = useState(false);
  return (
    <div className={`flex flex-row justify-between p-4 rounded-xl border shadow-xs w-3/4 ${isComplete ? 'bg-green-900' : 'bg-blue-900'}`}>
      <div className="flex flex-row gap-4">
        <input id="complete" checked={isComplete} onChange={(e) => setIsComplete(e.target.checked)} type="checkbox" className="w-4 h-4 px-4 border border-default-medium rounded-xs "/>
        <p className="text-sm text-gray-500">{entry.goalDesc}</p>
      </div>
        <p className="text-sm text-black-500">{entry.points}</p>
    </div>
  );
}
