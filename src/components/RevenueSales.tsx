import React from "react";
import { salesData } from "../data/newSalesData";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RevenueSales: React.FC = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={salesData}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="record.date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="record.revenue.total"
            stroke="#8884d8"
            name="総売り上げ"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default RevenueSales;
