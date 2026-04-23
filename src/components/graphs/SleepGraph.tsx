'use client';
import './Graphs.css';
import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { multipleOf } from 'zod';
import { da } from 'zod/locales';

interface SleepData {
    id: string;
    date: string | Date; 
    bedtime: string | Date;
    wakeTime: string | Date;
    quality: number;
    notes: string | null;
    userId: string;
    cycles?: any;
}

interface FormattedSleepData {
    date: string;
    totalMins: number;
    light: number;
    deep: number;
    rem: number;
    quality: number;
}

type SleepGraphProps = {
    rawData?: SleepData[];
};

const SleepGraph = ({ rawData }: SleepGraphProps) => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0].slice(0, 7));
    const [toggled, setToggled] = useState(false);
    const [toggleTotal, setToggleTotal] = useState(false);
    const [toggleDay, setToggleDay] = useState(false);

    let data = rawData?.filter((entry) => entry.date.startsWith(selectedDate)) || [];

    const formatXAxis = (date: string) => {
    if (date.length === 7) {
      return date.split('-')[2];
    }
    
    if (selectedDate.length === 4) {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      return months[parseInt(date.split('-')[1]) - 1];
    }

    else {
      return date.split('-')[2];
    }
  };

    const addTime = (data: SleepData[], total: FormattedSleepData[], dataLength: number) => {
        for (let i = 0; i < dataLength; i++) {
            const bedTime = new Date(data[i].bedtime);
            const wakeTime = new Date(data[i].wakeTime)
            const bedDate = new Date(data[i].bedtime).toISOString().split("T")[0];
            const wakeDate = new Date(data[i].wakeTime).toISOString().split("T")[0];
            const date = new Date(data[i].date).toISOString().split("T")[0];

            const month = parseInt(date.split('-')[1]);
            const day = parseInt(date.split('-')[2]);

            let totalMins = (wakeTime.getTime() - bedTime.getTime()) / 60000;

            if (totalMins < 0){
                totalMins = totalMins * -1;
            }

            if (bedDate === wakeDate) {
                if (selectedDate.length === 4) {
                    total[month - 1].totalMins += totalMins;
                }
                else{
                    total[day - 1].totalMins += totalMins;
                }
            }

            else{
                if (selectedDate.length === 4) {
                    total[month - 1].totalMins += totalMins;
                }
                else{
                    total[day - 1].totalMins += totalMins;

                }
            }

            }

        return total;
    };

    const formatData = (newData: SleepData[]) => {
        const dataLength = data.length;

        if (selectedDate.length === 4) {
            let total = [{date: `${selectedDate}-01-01`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-02-01`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-03-01`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-04-01`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-05-01`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-06-01`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0},{date: `${selectedDate}-07-01`, totalMins: 0,light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-08-01`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-09-01`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-10-01`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-11-01`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-12-01`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}];
            total = addTime(data, total, dataLength);
            return total;
        }

        else if (selectedDate.split('-')[1] === "01" || selectedDate.split('-')[1] === "03" || selectedDate.split('-')[1] === "05" || selectedDate.split('-')[1] === "07" || selectedDate.split('-')[1] === "08" || selectedDate.split('-')[1] === "10" || selectedDate.split('-')[1] === "12") {
        let total = [{date: `${selectedDate}-01`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-02`, totalMins: 0, light: 0, deep: 0, rem: 0,  quality: 0}, {date: `${selectedDate}-03`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-04`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-05`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-06`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-07`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-08`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-09`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-10`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-11`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date:`${selectedDate}-12`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-13`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-14`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-15`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-16`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-17`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-18`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-19`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-20`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-21`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-22`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-23`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0}, {date:`${selectedDate}-24`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-25`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-26`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-27`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-28`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-29`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-30`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0}, {date: `${selectedDate}-31`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}];
        total = addTime(data, total, dataLength);
            
            return total;
        }
        else if (selectedDate.split('-')[1] === "02" && parseInt(selectedDate.split('-')[0]) % 4 === 0) {
            let total = [{date: `${selectedDate}-01`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-02`, totalMins: 0, light: 0, deep: 0, rem: 0,  quality: 0}, {date: `${selectedDate}-03`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-04`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-05`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-06`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-07`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-08`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-09`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-10`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-11`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date:`${selectedDate}-12`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-13`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-14`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-15`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-16`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-17`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-18`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-19`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-20`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-21`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-22`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-23`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0}, {date:`${selectedDate}-24`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-25`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-26`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-27`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-28`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0}, {date: `${selectedDate}-29`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0}];
            total = addTime(data, total, dataLength);
            return total;
        }

        else if (selectedDate.split('-')[1] === "02") {
            let total = [{date: `${selectedDate}-01`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-02`, totalMins: 0, light: 0, deep: 0, rem: 0,  quality: 0}, {date: `${selectedDate}-03`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-04`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-05`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-06`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-07`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-08`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-09`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-10`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-11`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date:`${selectedDate}-12`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-13`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-14`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-15`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-16`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-17`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-18`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-19`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-20`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-21`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-22`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-23`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0}, {date:`${selectedDate}-24`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-25`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-26`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-27`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-28`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0}];
            total = addTime(data, total, dataLength);
            return total;
        }

        else if (selectedDate.split('-')[1] === "04" || selectedDate.split('-')[1] === "06" || selectedDate.split('-')[1] === "09" || selectedDate.split('-')[1] === "11") {
        let total = [{date: `${selectedDate}-01`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-02`, totalMins: 0, light: 0, deep: 0, rem: 0,  quality: 0}, {date: `${selectedDate}-03`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-04`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-05`, totalMins: 0, light: 0, deep: 0, rem: 0, quality: 0}, {date: `${selectedDate}-06`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-07`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-08`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-09`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-10`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date: `${selectedDate}-11`, totalMins: 0, light: 0, deep: 0, rem : 0, quality: 0}, {date:`${selectedDate}-12`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-13`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-14`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-15`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-16`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-17`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-18`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-19`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-20`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-21`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-22`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date:`${selectedDate}-23`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0}, {date:`${selectedDate}-24`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-25`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-26`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-27`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-28`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-29`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0} , {date: `${selectedDate}-30`, totalMins : 0 , light : 0 , deep : 0 , rem : 0, quality: 0}];
            total = addTime(data, total, dataLength);
            return total;
        }
        return [];
    };

    const finalData = formatData(data);

    let total = 0;
    let numDays = 0;
    let avg = 0;
    let SleepAdvice = "none";

    for (let i = 0; i < finalData.length; i++) {
        if (finalData[i].totalMins > 0){
        total += finalData[i].totalMins;
        numDays += 1;
        }
    }

    if (numDays > 0) {
        avg = total / numDays;
        if (avg > 10*60){
            SleepAdvice = "10";
        }
        else if (avg >7*60){
            SleepAdvice = "6";
        }
        else{
            SleepAdvice = "4";
        }
    }



    const toggleMonthYear = 
        <div className="w-full h-96"> 
            <div className="flex items-center justify-between mb-4">
                <div className='w-full h-96'>
                    <button className = "toggle-button" onClick={() => setToggled(!toggled)}> 
                    {toggled ? "Switch to Month View" : "Switch to Year View"}
                    </button>
                </div>
            </div>
        </div>

    const MultiSleepGraph = 
    <ResponsiveContainer minWidth={0} minHeight={0} width={800} height={300}>
        <AreaChart width={800} height={300} data={finalData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={formatXAxis} minTickGap={10} domain = {["auto", "auto"]}/>
            <YAxis dataKey = "totalMins"/>
            <Area type="monotone" dataKey="totalMins" stroke="#2764aa" fill="#2764aa" stackId="1"/>           
            <Legend />
            <Tooltip />
       </AreaChart>
    </ResponsiveContainer>

  if (toggled) {
    return ( 
    
    <div className="w-full h-96">
      <div className="flex items-center justify-between mb-4">
        {toggleMonthYear}
        <form>
            <label htmlFor = "selectYear"> Select year: </label>
            <input type = "number" id = "selectYear" name="selectYear" value = {selectedDate} min = "2000" max = "2027" onChange={(e) => setSelectedDate(e.target.value)}/>
        </form>
      </div>
    {MultiSleepGraph}
    </div>
    )
  }

  else if (SleepAdvice === "10"){
    return (
    <div className="w-full h-96">
      <div className="flex items-center justify-between mb-4">
        {toggleMonthYear}
        <form>
            <label htmlFor = "selectMonth"> Select month: </label>
            <input type = "month" id = "selectMonth" name="selectMonth" value = {selectedDate} onChange={(e) => setSelectedDate(e.target.value)}/>
        </form>
      </div>
        {MultiSleepGraph}
        <div>
            <p>You must be very well rested!</p>
        </div>
    </div>
    )
    }

    else if (SleepAdvice === "6"){
    return (
    <div className="w-full h-96">
      <div className="flex items-center justify-between mb-4">
        {toggleMonthYear}
        <form>
            <label htmlFor = "selectMonth"> Select month: </label>
            <input type = "month" id = "selectMonth" name="selectMonth" value = {selectedDate} onChange={(e) => setSelectedDate(e.target.value)}/>
        </form>
      </div>
        {MultiSleepGraph}
        <div>
            <p>You have a healthy sleep schedule</p>
        </div>
    </div>
    )
    }

    else{
    return (
    <div className="w-full h-96">
      <div className="flex items-center justify-between mb-4">
        {toggleMonthYear}
        <form>
            <label htmlFor = "selectMonth"> Select month: </label>
            <input type = "month" id = "selectMonth" name="selectMonth" value = {selectedDate} onChange={(e) => setSelectedDate(e.target.value)}/>
        </form>
      </div>
        {MultiSleepGraph}
        <div>
            <p>You should get more sleep</p>
        </div>
    </div>
    )
    }
    
}
export default SleepGraph;
