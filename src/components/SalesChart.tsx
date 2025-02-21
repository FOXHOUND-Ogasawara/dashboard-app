import React, { useState } from 'react';
import { CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip, LineChart, Line } from 'recharts';
import { dailySalesData, weeklySalesData, monthlySalesData } from '../data/salesData';
import { Box, Button } from '@mui/material';


const salesDataChart: React.FC = () => {

    const[salesDatas, setSalesDatas] = useState(dailySalesData);

    const handleChangeData = (period) => {
        if( period === "daily"){
            setSalesDatas(dailySalesData);
        }
        else if( period === "weekly"){
            setSalesDatas(weeklySalesData);
        }
        else if( period === "monthly"){
            setSalesDatas(monthlySalesData);
        }
    }
    
    return (
        <>
            <Box>
                <Button onClick={() => handleChangeData("daily")}>日</Button>
                <Button onClick={() => handleChangeData("weekly")}>週</Button>
                <Button onClick={() => handleChangeData("monthly")}>月</Button>
            </Box>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart    
                    data={salesDatas}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="label" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
export default salesDataChart;