import React from "react";
import StatCard from "@/components/layout/StatCard";

type CardListProp = {
    title?: string;
    children?: React.ReactNode;
}


export default function GoalCardList({title, children}: CardListProp) {
    return (
        <section className="w-full">
        <div className="flex flex-row justify-between">
            <h1 className="px-2 text-2xl/7 font-bold text-white sm:text-7xl">
                <u>{title}</u>
            </h1>
            <StatCard title={"Total Points"} value={"-1"}/>
        </div>
            <div className="flex flex-col py-4 gap-4 w-full">
                {children}
            </div>
        </section>
    )
}