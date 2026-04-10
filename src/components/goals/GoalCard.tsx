import type { GoalCard } from "@/lib/validators";

type EntryCardProps = {
  entry: GoalCard;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function PointsCard({ entry }: EntryCardProps) {
  return (
    <div className="flex flex-row justify-between p-4 rounded-xl border bg-blue-900 shadow-xs w-3/4">
      
        <p className="text-sm text-gray-500">{entry.goalDesc}</p>
        <p className="text-sm text-black-500">{entry.points}</p>

    </div>
  );
}
