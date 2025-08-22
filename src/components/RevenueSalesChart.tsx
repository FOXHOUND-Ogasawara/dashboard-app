import React from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { salesData } from "../data/newSalesData";

const RevenueSalesChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={salesData}>
        <XAxis dataKey="record.date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="record.revenue.total"
          name="収益"
          stroke="#8884d8"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueSalesChart;
