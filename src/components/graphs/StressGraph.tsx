'use client';
import './Graphs.css';
import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface StressData {
    id?: number;
    userId?: number;
    date: string;
    level: number;
    source?: string;
    notes?: string;
}

type StressGraphProps = {
    rawData?: StressData[];
}

const StressGraph = ({rawData}: StressGraphProps) => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0].slice(0, 7));
    const [toggled, setToggled] = useState(false);

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

  const average = (data: StressData[], total: {level: number, date: string, count: number}[], dataLength: number) => {
    for (let i = 0; i < dataLength; i++) {
      const date = data[i].date;
      const level = data[i].level;
        for (let j = 0; j < total.length; j++) {
            if (total[j].date === date) {
                total[j].level += level;
                total[j].count += 1;
            }
        }
    }
    
    for (let i = 0; i < total.length; i++) {
        if (total[i].count > 0) {
            total[i].level = total[i].level / total[i].count;
        }
    }

    return total;
    };

  const formatData = (newData: StressData[]) => {
        const dataLength = data.length;

        if (selectedDate.length === 4) {
            let total = [{date: `${selectedDate}-01-01`, level: 0, count: 0}, {date: `${selectedDate}-02-01`, level: 0, count: 0}, {date: `${selectedDate}-03-01`, level: 0, count: 0}, {date: `${selectedDate}-04-01`, level: 0, count: 0}, {date: `${selectedDate}-05-01`, level: 0, count: 0}, {date: `${selectedDate}-06-01`, level: 0, count: 0}, {date: `${selectedDate}-07-01`, level: 0, count: 0}, {date: `${selectedDate}-08-01`, level: 0, count: 0}, {date: `${selectedDate}-09-01`, level: 0, count: 0}, {date: `${selectedDate}-10-01`, level: 0, count: 0}, {date: `${selectedDate}-11-01`, level: 0, count: 0}, {date:`${selectedDate}-12-01`, level : 0, count: 0}];
            total = average(data, total, dataLength);
            return total;
        }

        else if (selectedDate.split('-')[1] === "01" || selectedDate.split('-')[1] === "03" || selectedDate.split('-')[1] === "05" || selectedDate.split('-')[1] === "07" || selectedDate.split('-')[1] === "08" || selectedDate.split('-')[1] === "10" || selectedDate.split('-')[1] === "12") {
            let total = [{date: `${selectedDate}-01`, level: 0, count: 0},{date: `${selectedDate}-02`, level: 0, count: 0}, {date: `${selectedDate}-03`, level: 0, count: 0}, {date: `${selectedDate}-04`, level: 0, count: 0}, {date: `${selectedDate}-05`, level: 0, count: 0}, {date: `${selectedDate}-06`, level: 0, count: 0}, {date: `${selectedDate}-07`, level: 0, count: 0}, {date: `${selectedDate}-08`, level: 0, count: 0}, {date: `${selectedDate}-09`, level: 0, count: 0}, {date: `${selectedDate}-10`, level: 0, count: 0}, {date: `${selectedDate}-11`, level: 0, count: 0}, {date:`${selectedDate}-12`, level : 0, count : 0} , {date:`${selectedDate}-13`, level : 0, count : 0} , {date:`${selectedDate}-14`, level : 0, count : 0} , {date:`${selectedDate}-15`, level : 0, count : 0} , {date:`${selectedDate}-16`, level : 0, count : 0} , {date:`${selectedDate}-17`, level : 0, count : 0} , {date:`${selectedDate}-18`, level : 0, count : 0} , {date:`${selectedDate}-19`, level : 0, count : 0} , {date:`${selectedDate}-20`, level : 0, count : 0} , {date:`${selectedDate}-21`, level : 0, count : 0} , {date:`${selectedDate}-22`, level : 0, count : 0} , {date:`${selectedDate}-23`, level : 0, count : 0}, {date:`${selectedDate}-24`, level : 0, count : 0} , {date: `${selectedDate}-25`, level : 0, count : 0} , {date: `${selectedDate}-26`, level : 0, count : 0} , {date: `${selectedDate}-27`, level : 0, count : 0} , {date: `${selectedDate}-28`, level : 0, count : 0} , {date: `${selectedDate}-29`, level : 0, count : 0} , {date: `${selectedDate}-30`, level : 0, count : 0} , {date: `${selectedDate}-31`, level : 0, count : 0}]; 
            total = average(data, total, dataLength);
            return total;
        }
        else if (selectedDate.split('-')[1] === "02" && parseInt(selectedDate.split('-')[0]) % 4 === 0) {
            let total = [{date: `${selectedDate}-01`, level: 0, count: 0}, {date: `${selectedDate}-02`, level: 0, count: 0}, {date: `${selectedDate}-03`, level: 0, count: 0}, {date: `${selectedDate}-04`, level: 0, count: 0}, {date: `${selectedDate}-05`, level: 0, count: 0}, {date: `${selectedDate}-06`, level: 0, count: 0}, {date: `${selectedDate}-07`, level: 0, count: 0}, {date: `${selectedDate}-08`, level: 0, count: 0}, {date: `${selectedDate}-09`, level: 0, count: 0}, {date: `${selectedDate}-10`, level: 0, count: 0}, {date: `${selectedDate}-11`, level: 0, count: 0}, {date:`${selectedDate}-12`, level : 0, count : 0} , {date:`${selectedDate}-13`, level : 0, count : 0} , {date:`${selectedDate}-14`, level : 0, count : 0} , {date:`${selectedDate}-15`, level : 0, count : 0} , {date:`${selectedDate}-16`, level : 0, count : 0} , {date:`${selectedDate}-17`, level : 0, count : 0} , {date:`${selectedDate}-18`, level : 0, count : 0} , {date:`${selectedDate}-19`, level : 0, count : 0} , {date:`${selectedDate}-20`, level : 0, count : 0} , {date:`${selectedDate}-21`, level : 0, count : 0} , {date:`${selectedDate}-22`, level : 0, count : 0} , {date:`${selectedDate}-23`, level : 0, count : 0}, {date:`${selectedDate}-24`, level : 0, count : 0} , {date: `${selectedDate}-25`, level : 0, count : 0} , {date: `${selectedDate}-26`, level : 0, count : 0} , {date: `${selectedDate}-27`, level : 0, count : 0} , {date: `${selectedDate}-28`, level : 0, count : 0} , {date: `${selectedDate}-29`, level : 0, count : 0}];
            total = average(data, total, dataLength);
            return total;
        }

        else if (selectedDate.split('-')[1] === "02") {
            let total = [{date: `${selectedDate}-01`, level: 0, count: 0}, {date: `${selectedDate}-02`, level: 0, count: 0}, {date: `${selectedDate}-03`, level: 0, count: 0}, {date: `${selectedDate}-04`, level: 0, count: 0}, {date: `${selectedDate}-05`, level: 0, count: 0}, {date: `${selectedDate}-06`, level: 0, count: 0}, {date: `${selectedDate}-07`, level: 0, count: 0}, {date: `${selectedDate}-08`, level: 0, count: 0}, {date: `${selectedDate}-09`, level: 0, count: 0}, {date: `${selectedDate}-10`, level: 0, count: 0}, {date: `${selectedDate}-11`, level: 0, count: 0}, {date:`${selectedDate}-12`, level : 0, count : 0} , {date:`${selectedDate}-13`, level : 0, count : 0} , {date:`${selectedDate}-14`, level : 0, count : 0} , {date:`${selectedDate}-15`, level : 0, count : 0} , {date:`${selectedDate}-16`, level : 0, count : 0} , {date:`${selectedDate}-17`, level : 0, count : 0} , {date:`${selectedDate}-18`, level : 0, count : 0} , {date:`${selectedDate}-19`, level : 0, count : 0} , {date:`${selectedDate}-20`, level : 0, count : 0} , {date:`${selectedDate}-21`, level : 0, count : 0} , {date:`${selectedDate}-22`, level : 0, count : 0} , {date:`${selectedDate}-23`, level : 0, count : 0}, {date:`${selectedDate}-24`, level : 0, count : 0} , {date: `${selectedDate}-25`, level : 0, count : 0} , {date: `${selectedDate}-26`, level : 0, count : 0} , {date: `${selectedDate}-27`, level : 0, count : 0} , {date: `${selectedDate}-28`, level : 0, count : 0}];
            total = average(data, total, dataLength);
            return total;
        }

        else if (selectedDate.split('-')[1] === "04" || selectedDate.split('-')[1] === "06" || selectedDate.split('-')[1] === "09" || selectedDate.split('-')[1] === "11") {
        let total = [{date: `${selectedDate}-01`, level: 0, count: 0}, {date: `${selectedDate}-02`, level: 0, count: 0}, {date: `${selectedDate}-03`, level: 0, count: 0}, {date: `${selectedDate}-04`, level: 0, count: 0}, {date: `${selectedDate}-05`, level: 0, count: 0}, {date: `${selectedDate}-06`, level: 0, count: 0}, {date: `${selectedDate}-07`, level: 0, count: 0}, {date: `${selectedDate}-08`, level: 0, count: 0}, {date: `${selectedDate}-09`, level: 0, count: 0}, {date: `${selectedDate}-10`, level: 0, count: 0}, {date: `${selectedDate}-11`, level: 0, count : 0} , {date:`${selectedDate}-12`, level : 0, count : 0} , {date:`${selectedDate}-13`, level : 0, count : 0} , {date:`${selectedDate}-14`, level : 0, count : 0} , {date:`${selectedDate}-15`, level : 0, count : 0} , {date:`${selectedDate}-16`, level : 0, count : 0} , {date:`${selectedDate}-17`, level : 0, count : 0} , {date:`${selectedDate}-18`, level : 0, count : 0} , {date:`${selectedDate}-19`, level : 0, count : 0} , {date:`${selectedDate}-20`, level : 0, count : 0} , {date:`${selectedDate}-21`, level : 0, count : 0} , {date:`${selectedDate}-22`, level : 0, count : 0} , {date:`${selectedDate}-23`, level : 0, count : 0}, {date:`${selectedDate}-24`, level : 0, count : 0} , {date: `${selectedDate}-25`, level : 0, count : 0} , {date: `${selectedDate}-26`, level : 0, count : 0} , {date: `${selectedDate}-27`, level : 0, count : 0} , {date: `${selectedDate}-28`, level : 0, count : 0} , {date: `${selectedDate}-29`, level : 0, count : 0} , {date: `${selectedDate}-30`, level : 0, count : 0}];
        total = average(data, total, dataLength);
        return total;
        }
        return [];
    };

    const finalData = formatData(data);

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
                <YAxis dataKey = "level"/>
                <Area type="monotone" dataKey="level" stroke="#536ac6" fill="#324e9a" stackId="1" />          
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

  else {
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
    </div>
    )
    }
}
export default StressGraph;