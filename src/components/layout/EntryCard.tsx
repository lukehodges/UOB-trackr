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
    <div className="p-5 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl transition-all duration-300 hover:shadow-primary/5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{formatDate(entry.date)}</p>
        <div className="flex gap-2">
          {onEdit && (
            <button
              onClick={onEdit}
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Edit
            </button>
          )}
          {onDelete && (
            <button
              onClick={onDelete}
              className="text-sm text-red-600 dark:text-red-400 hover:underline"
            >
              Delete
            </button>
          )}
        </div>
      </div>
      <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        {formatTime(entry.bedtime)} → {formatTime(entry.wakeTime)}
      </p>
      <div className="mt-2 flex gap-4 text-sm text-zinc-600 dark:text-zinc-400">
        <span>Quality: {entry.quality}/10</span>
        {entry.notes && <span>· {entry.notes}</span>}
      </div>
    </div>
  );
}
