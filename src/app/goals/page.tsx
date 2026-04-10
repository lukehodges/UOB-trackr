import GoalCard from "@/components/goals/GoalCard";
import GoalCardList from "@/components/goals/GoalCardList";

const testData = {
    goalDesc: "Goal description",
    points: 50
}

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-row gap-16 items-center justify-between py-8 px-16 bg-white dark:bg-gray-950 sm:items-start">
        <GoalCardList title="Title!">
          <GoalCard entry={testData}/>
          <GoalCard entry={testData}/>
        </GoalCardList>
        <GoalCard entry={testData}/>
      </main>
    </div>
  );
}
