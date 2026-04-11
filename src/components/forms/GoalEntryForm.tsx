import React from "react";

export default function GoalEntryForm() {

    async function addGoal(formData: FormData) {
        "use server"
        const desc = formData.get("DescriptionInput")
        const points = formData.get("PointsInput")
        // await (updateDatabase())
    }
    return (
        <form action={addGoal} className="flex flex-col p-16 gap-4">
            
            <label className="w-1/4 bg-blue-900 p-8">
                <h1 className="py-1">Goal Description</h1>
                <input name="DescriptionInput" className="bg-gray-800 px-1"/>
            </label>
            <label className="w-1/4 bg-blue-900 p-8">
                <h1 className="py-1">Points</h1>
                <input name="PointsInput" className="bg-gray-800 px-1"/>
            </label>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-1/8">Submit</button>
        </form>
        
    )
}