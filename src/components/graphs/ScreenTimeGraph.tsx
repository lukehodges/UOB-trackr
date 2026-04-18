'use client';
import './Graphs.css';
import React, { useState}from "react";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis , CartesianGrid, Legend, Tooltip} from "recharts";

interface ScreenTimeEntry {
    id?: number;
    userId?: number;
    date: string;
    totalMins: number;
    category: string;
    appName?: string;
    notes?: string;
}

type ScreenTimeGraphProps = {
    rawData?: ScreenTimeEntry[];
};

const ScreenTimeGraphMonth = ({ rawData }: ScreenTimeGraphProps) => {
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

  const formatData = (newData: ScreenTimeEntry[]) => {
    const newDataLength = data.length;
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
    return total;
  }

  };

    const finalData = formatData(data);

    const [hideSocial, setHideSocial] = useState(false);
    const [hideEntertainment, setHideEntertainment] = useState(false);
    const [hideProductivity, setHideProductivity] = useState(false);
    const [hideEducation, setHideEducation] = useState(false);
    const [hideOther, setHideOther] = useState(false);

    const hideCategories = 
    <div className="flex items-center justify-start mb-4">
        <form>
            <label htmlFor = "hideSocial"> Hide social category: </label>
            <input type = "checkbox" id = "hideSocial" name="hideSocial" onChange={(e) => setHideSocial(e.target.checked)}/>
            <label htmlFor = "hideEntertainment"> Hide entertainment category: </label>
            <input type = "checkbox" id = "hideEntertainment" name="hideEntertainment" onChange={(e) => setHideEntertainment(e.target.checked)}/>
            <label htmlFor = "hideProductivity"> Hide productivity category: </label>
            <input type = "checkbox" id = "hideProductivity" name="hideProductivity" onChange={(e) => setHideProductivity(e.target.checked)}/>
            <label htmlFor = "hideEducation"> Hide education category: </label>
            <input type = "checkbox" id = "hideEducation" name="hideEducation" onChange={(e) => setHideEducation(e.target.checked)}/>
            <label htmlFor = "hideOther"> Hide other category: </label>
            <input type = "checkbox" id = "hideOther" name="hideOther" onChange={(e) => setHideOther(e.target.checked)}/>
        </form>

    </div>

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
                <Area type="monotone" dataKey="social" stroke="#da69de" fill="#da69de" stackId="1" hide = {hideSocial}/>
                <Area type="monotone" dataKey="entertainment" stroke="#82ca9d" fill="#82ca9d" stackId="1" hide = {hideEntertainment}/>
                <Area type="monotone" dataKey="productivity" stroke="#ffc658" fill="#ffc658" stackId="1" hide = {hideProductivity}/>
                <Area type="monotone" dataKey="education" stroke="#da5959" fill="#da5959" stackId="1" hide = {hideEducation}/>
                <Area type="monotone" dataKey="other" stroke="#717bc8" fill="#717bc8" stackId="1" hide = {hideOther}/> 
                <Legend />
                <Tooltip />
           </AreaChart>
        </ResponsiveContainer>
    </main>

  

  if (toggled) {
    return ( 
    
    <div className="w-full h-96">
      <div className="flex items-center justify-between mb-4">
        {hideCategories}
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

  else {
    return (
    <div className="w-full h-96">
      <div className="flex items-center justify-between mb-4">
        {hideCategories}
        {toggleMonthYear}
        <form>
            <label htmlFor = "selectMonth"> Select month: </label>
            <input type = "month" id = "selectMonth" name="selectMonth" value = {selectedDate} onChange={(e) => setSelectedDate(e.target.value)}/>
        </form>
      </div>
        {graph}
    </div>
    )
  }
};

export default ScreenTimeGraphMonth;