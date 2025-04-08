import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { salesData } from "../data/newSalesData"; 

const SalesLineChart = () => {
  return (
    <LineChart
      width={730}
      height={250}
      data={salesData} 
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="record.revenue.total" stroke="#8884d8" name='売上推移' />
    </LineChart>
  );
};

export default SalesLineChart;
