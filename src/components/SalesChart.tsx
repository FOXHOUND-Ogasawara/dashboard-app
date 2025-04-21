import React, { useState } from "react";
import {
  dailySalesData,
  monthlySalesData,
  SalesData,
  weeklySalesData,
} from "../data/salesData";
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
import { Button } from "@mui/material";

const SalesChart: React.FC = () => {
  const [changeSalesData, setChangeSalesData] =
    useState<SalesData[]>(dailySalesData);

  return (
    <>
      <Button onClick={() => setChangeSalesData(dailySalesData)}>日別</Button>
      <Button onClick={() => setChangeSalesData(weeklySalesData)}>週別</Button>
      <Button onClick={() => setChangeSalesData(monthlySalesData)}>月別</Button>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={730}
          height={250}
          data={changeSalesData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            name="売上合計"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default SalesChart;
