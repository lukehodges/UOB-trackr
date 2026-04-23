'use client';
import { text } from 'drizzle-orm/sqlite-core/columns/text';
import './Graphs.css';
import React, { useState}from "react";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis , CartesianGrid, Legend, Tooltip} from "recharts";

interface ScreenTimeEntry {
    id: string;
    userId: string;
    date: string;
    totalMins: number;
    category: string;
    appName: string | null;
    notes: string | null;
}

type ScreenTimeGraphProps = {
    rawData?: ScreenTimeEntry[];
};

const ScreenTimeGraph = ({ rawData }: ScreenTimeGraphProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0].slice(0, 7));
  const [toggled, setToggled] = useState(false);

  let ScreenTimeAdvice = false;

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

  const formatData = (newData: ScreenTimeEntry[]) => {
    const newDataLength = data.length;
    const day = parseInt(selectedDate.split('-')[2]);
    const month = parseInt(selectedDate.split('-')[1]);
    const year = parseInt(selectedDate.split('-')[0]);
    if (selectedDate.length === 4) {
    let total = [{date: `${selectedDate}-01-01`,totalMins: 0,social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date: `${selectedDate}-02-01`, totalMins: 0,social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date: `${selectedDate}-03-01`, totalMins: 0,social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date: `${selectedDate}-04-01`, totalMins: 0,social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date: `${selectedDate}-05-01`, totalMins: 0,social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date: `${selectedDate}-06-01`, totalMins: 0,social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date: `${selectedDate}-07-01`, totalMins: 0,social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date: `${selectedDate}-08-01`, totalMins: 0,social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date: `${selectedDate}-09-01`, totalMins: 0,social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date: `${selectedDate}-10-01`, totalMins: 0,social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date: `${selectedDate}-11-01`, totalMins: 0,social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date: `${selectedDate}-12-01`, totalMins: 0,social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}];
    for (let i = 0; i < newDataLength; i++) {
            const date = data[i].date;
            const month = parseInt(date.split('-')[1]);
            total[month - 1].totalMins += data[i].totalMins;
            if (data[i].category === "social") {
                total[month - 1].social += data[i].totalMins;
            }
            else if (data[i].category === "entertainment") {
                total[month - 1].entertainment += data[i].totalMins;
            }
            else if (data[i].category === "productivity") {
                total[month - 1].productivity += data[i].totalMins;
            }
            else if (data[i].category === "education") {
                total[month - 1].education += data[i].totalMins;
            }
            else if (data[i].category === "other") {
                total[month - 1].other += data[i].totalMins;
            }
        }

        return total;
    }
    else if (selectedDate.split('-')[1] === "01" || selectedDate.split('-')[1] === "03" || selectedDate.split('-')[1] === "05" || selectedDate.split('-')[1] === "07" || selectedDate.split('-')[1] === "08" || selectedDate.split('-')[1] === "10" || selectedDate.split('-')[1] === "12") {
      let total = [{date: `${selectedDate}-01`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date: `${selectedDate}-02`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date: `${selectedDate}-03`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date: `${selectedDate}-04`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date: `${selectedDate}-05`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date: `${selectedDate}-06`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date: `${selectedDate}-07`, totalMins: 0,social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date: `${selectedDate}-08`, totalMins: 0,social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date: `${selectedDate}-09`, totalMins: 0,social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-10`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-11`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-12`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-13`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-14`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-15`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-16`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-17`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-18`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0},{date:`${selectedDate}-19`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-20`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-21`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-22`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-23`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-24`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-25`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-26`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-27`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-28`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-29`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-30`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-31`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}];
      for (let i = 0; i < newDataLength; i++) {
        const date = data[i].date;
        const day = parseInt(date.split('-')[2]);
        total[day - 1].totalMins += data[i].totalMins;
        if (data[i].category === "social") {
            total[day - 1].social += data[i].totalMins;
        }
        else if (data[i].category === "entertainment") {
            total[day - 1].entertainment += data[i].totalMins;
        }
        else if (data[i].category === "productivity") {
            total[day - 1].productivity += data[i].totalMins;
        }
        else if (data[i].category === "education") {
            total[day - 1].education += data[i].totalMins;
        }
        else if (data[i].category === "other") {
            total[day - 1].other += data[i].totalMins;
        }
      }
      return total;
    }

        else if (selectedDate.split('-')[1] === "02" && (parseInt(selectedDate.split('-')[0]) % 4 === 0)) {
      let total = [{date: `${selectedDate}-01`, totalMins:0, social:0, entertainment:0, productivity:0, education:0, other:0}, {date: `${selectedDate}-02`, totalMins:0, social:0, entertainment:0, productivity:0, education:0, other:0}, {date: `${selectedDate}-03`, totalMins:0, social:0, entertainment:0, productivity:0, education:0, other:0}, {date: `${selectedDate}-04`, totalMins:0, social:0, entertainment:0, productivity:0, education:0, other:0}, {date: `${selectedDate}-05`, totalMins:0, social:0, entertainment:0, productivity:0, education:0, other:0}, {date: `${selectedDate}-06`, totalMins: 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0},{date:`${selectedDate}-07`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0},{date:`${selectedDate}-08`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0},{date:`${selectedDate}-09`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0},{date:`${selectedDate}-10`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-11`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-12`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-13`, totalMins : 0,social : 0 , entertainment : 0 , productivity :0 , education :0 , other :0}, {date:`${selectedDate}-14`, totalMins :0,social :0 , entertainment :0 , productivity :0 , education :0 , other :20}, {date:`${selectedDate}-15`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-16`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-17`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-18`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0},{date:`${selectedDate}-19`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-20`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-21`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-22`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-23`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-24`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-25`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-26`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-27`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-28`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-29`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}];
      for (let i = 0; i < newDataLength; i++) {
        const date = data[i].date;
        const day = parseInt(date.split('-')[2]);
        total[day - 1].totalMins += data[i].totalMins;
        if (data[i].category === "social") {
            total[day - 1].social += data[i].totalMins;
        } 
        else if (data[i].category === "entertainment") {
            total[day - 1].entertainment += data[i].totalMins;
        }
        else if (data[i].category === "productivity") {
            total[day - 1].productivity += data[i].totalMins;
        }
        else if (data[i].category === "education") {
            total[day - 1].education += data[i].totalMins;
        }
        else if (data[i].category === "other") {
            total[day - 1].other += data[i].totalMins
    }
  }
  return total;
    }

    else if (selectedDate.split('-')[1] === "02") {
      let total = [{date: `${selectedDate}-01`, totalMins:0, social:0, entertainment:0, productivity:0, education:0, other:0}, {date: `${selectedDate}-02`, totalMins:0, social:0, entertainment:0, productivity:0, education:0, other:0}, {date: `${selectedDate}-03`, totalMins:0, social:0, entertainment:0, productivity:0, education:0, other:0}, {date: `${selectedDate}-04`, totalMins:0, social:0, entertainment:0, productivity:0, education:0, other:0}, {date: `${selectedDate}-05`, totalMins:0, social:0, entertainment:0, productivity:0, education:0, other:0}, {date: `${selectedDate}-06`, totalMins: 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0},{date:`${selectedDate}-07`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0},{date:`${selectedDate}-08`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0},{date:`${selectedDate}-09`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0},{date:`${selectedDate}-10`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-11`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-12`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-13`, totalMins : 0,social : 0 , entertainment : 0 , productivity :0 , education :0 , other :0}, {date:`${selectedDate}-14`, totalMins :0,social :0 , entertainment :0 , productivity :0 , education :0 , other :20}, {date:`${selectedDate}-15`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-16`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-17`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-18`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0},{date:`${selectedDate}-19`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-20`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-21`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-22`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-23`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-24`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-25`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-26`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-27`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-28`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}];
      for (let i = 0; i < newDataLength; i++) {
        const date = data[i].date;
        const day = parseInt(date.split('-')[2]);
        total[day - 1].totalMins += data[i].totalMins;
        if (data[i].category === "social") {
            total[day - 1].social += data[i].totalMins;
        } 
        else if (data[i].category === "entertainment") {
            total[day - 1].entertainment += data[i].totalMins;
        }
        else if (data[i].category === "productivity") {
            total[day - 1].productivity += data[i].totalMins;
        }
        else if (data[i].category === "education") {
            total[day - 1].education += data[i].totalMins;
        }
        else if (data[i].category === "other") {
            total[day - 1].other += data[i].totalMins
    }
  }
  return total;
    }
    else if (selectedDate.split('-')[1] === "04" || selectedDate.split('-')[1] === "06" || selectedDate.split('-')[1] === "09" || selectedDate.split('-')[1] === "11") {
      let total = [{date: `${selectedDate}-01`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date: `${selectedDate}-02`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date: `${selectedDate}-03`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date: `${selectedDate}-04`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date: `${selectedDate}-05`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date: `${selectedDate}-06`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date: `${selectedDate}-07`, totalMins: 0,social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date: `${selectedDate}-08`, totalMins: 0,social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date: `${selectedDate}-09`, totalMins: 0,social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-10`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-11`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-12`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-13`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-14`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-15`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-16`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-17`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0}, {date:`${selectedDate}-18`, totalMins : 0,social : 0 , entertainment : 0 , productivity : 0 , education : 0 , other : 0},{date:`${selectedDate}-19`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-20`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-21`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-22`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-23`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-24`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-25`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-26`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}, {date:`${selectedDate}-27`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-28`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-29`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0},{date:`${selectedDate}-30`, totalMins: 0, social: 0, entertainment: 0, productivity: 0, education: 0, other: 0}];
      for (let i = 0; i < newDataLength; i++) {
        const date = data[i].date;
        const day = parseInt(date.split('-')[2]);
        total[day - 1].totalMins += data[i].totalMins;
        if (data[i].category === "social") {
            total[day - 1].social += data[i].totalMins;
        }
        else if (data[i].category === "entertainment") {
            total[day - 1].entertainment += data[i].totalMins;
        }
        else if (data[i].category === "productivity") {
            total[day - 1].productivity += data[i].totalMins;
        }
        else if (data[i].category === "education") {
            total[day - 1].education += data[i].totalMins;
        }
        else if (data[i].category === "other") {
            total[day - 1].other += data[i].totalMins;
        }

    }

    let totalMins = 0;
    let numDays = 0;
    let avg = 0;

    for (let i = 0; i < total.length; i++){
        totalMins += total[i].totalMins;
        numDays++;
    }

    if (numDays === 0){
    }
    else{
        avg = totalMins / numDays;
        if (avg > 60*4){
            ScreenTimeAdvice = true;
        }
        else{
        }
    }


    return total;
  }

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
    
    const graph = 
    <main className = "mx-auto w-full h-96">
        <ResponsiveContainer minWidth={0} minHeight={0} width={800} height={300}>
            
            <AreaChart width={800} height={300} data={finalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickFormatter={formatXAxis}/>
                <YAxis dataKey = "totalMins"/>
                <Area type="monotone" dataKey="totalMins" stroke="#da5959" fill="#da5959" stackId="1"/>
                <Legend />
                <Tooltip />
           </AreaChart>
        </ResponsiveContainer>
    </main>

  

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
        {graph}
    </div>
    )
  }

  else if (ScreenTimeAdvice){
    return (
    <div className="w-full h-96">
      <div className="flex items-center justify-between mb-4">
        {toggleMonthYear}
        <form>
            <label htmlFor = "selectMonth"> Select month: </label>
            <input type = "month" id = "selectMonth" name="selectMonth" value = {selectedDate} onChange={(e) => setSelectedDate(e.target.value)}/>
        </form>
      </div>
      {graph}
            <div className="w-full h-96">
                <p>You have been on your phone for more then 4 hours per day, you should take a break</p>
            </div>
        
        
    </div>
    )
  }
  else{
    return(
    <div className="w-full h-96">
      <div className="flex items-center justify-between mb-4">
        {toggleMonthYear}
        <form>
            <label htmlFor = "selectMonth"> Select month: </label>
            <input type = "month" id = "selectMonth" name="selectMonth" value = {selectedDate} onChange={(e) => setSelectedDate(e.target.value)}/>
        </form>
      </div>
      {graph}
            <div >
                <p>You have been on your phone for less then 4 hours per day, keep up the good work!</p>
            </div>
        
        
    </div>
    )
  }
};

export default ScreenTimeGraph;

