import {
    Line,
    LineChart,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { dailySalesData, weeklySalesData, monthlySalesData } from "../data/salesData";
import { useState } from "react";
import { Button } from "@mui/material";

interface SalesDate {
    label: string;
    sales: number;
}



const SalesChart = () => {


    const [displayChart, setDisplayChart] = useState<SalesDate[]>(dailySalesData)
    
    
    const handleClickDaily = () => {
        setDisplayChart(dailySalesData)
    }
    const handleClickWeekly = () => {
        setDisplayChart(weeklySalesData)
    }
    const handleClickMonthly = () => {
        setDisplayChart(monthlySalesData)
    }





    return (
        <div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={displayChart}>
                    <XAxis dataKey="label" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line dataKey="sales" fill="#8884D8" name="売上データ" />
                </LineChart>
            </ResponsiveContainer>

            <Button onClick={handleClickDaily} variant="contained" color="primary">
                日別売上
            </Button>
            <Button onClick={handleClickWeekly} variant="contained" color="primary">
                週別売上
            </Button>
            <Button onClick={handleClickMonthly} variant="contained" color="primary">
                月別売上
            </Button>

        </div>
    );
};
export default SalesChart;