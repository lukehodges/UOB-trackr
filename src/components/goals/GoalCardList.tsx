import React from "react";

type CardListProp = {
    title?: string;
    children: React.ReactNode;
}

export default function GoalCardList({title, children}: CardListProp) {
    return (
        <section className="w-full">
            <h1 className="text-2xl/7 font-bold text-white sm:text-3xl">
                {title}
            </h1>
            <div className="flex flex-col gap-4 w-full">
                {children}
            </div>
        </section>
    )
}