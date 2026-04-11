import type { SleepEntry } from "@/lib/validators";

type EntryCardProps = {
  entry: SleepEntry;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function EntryCard({ entry, onEdit, onDelete }: EntryCardProps) {
  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{formatDate(entry.date)}</p>
        <div className="flex gap-2">
          {onEdit && (
            <button
              onClick={onEdit}
              className="text-sm text-blue-600 hover:underline"
            >
              Edit
            </button>
          )}
          {onDelete && (
            <button
              onClick={onDelete}
              className="text-sm text-red-600 hover:underline"
            >
              Delete
            </button>
          )}
        </div>
      </div>
      <p className="mt-2 text-lg font-semibold text-black">
        {formatTime(entry.bedtime)} → {formatTime(entry.wakeTime)}
      </p>
      <div className="mt-2 flex gap-4 text-sm text-gray-600">
        <span>Quality: {entry.quality}/10</span>
        {entry.notes && <span>· {entry.notes}</span>}
      </div>
    </div>
  );
}
