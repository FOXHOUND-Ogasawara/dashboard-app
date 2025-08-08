import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { dailySalesData } from "../data/salesData"; // データファイルのパスは合わせてください

const SalesChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={dailySalesData}>
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" name="売上" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
