"use client"

import React from "react";
import GoalEntryForm from "@/components/forms/GoalEntryForm";
import { trpc } from "@/shared/trpc";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [goalDesc, setGoalDesc] = useState("");
  const [points, setPoints] = useState(0);

  const createGoal = trpc.goals.create.useMutation({
    onSuccess(data) {
      router.push("/goals");
    },
    onError(err) {
      console.log("ERROR!");
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    createGoal.mutate({ goalDesc, points });
  }

  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
        <form onSubmit={handleSubmit} className="w-full max-w-sm p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-lg space-y-4">
        <h1 className="text-2xl font-bold text-center">Create Goal</h1>
        <div>
          <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">
            Email
          </label>
            <input
            type="email"
            value={goalDesc}
            onChange={(e) => setGoalDesc(e.target.value)}
            required
            className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">
            Points
          </label>
          <input
            type="number"
            value={points}
            onChange={(e) => setPoints(e.target.valueAsNumber)}
            required
            className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
        </div>
        </form>
    </div>
  );
}
