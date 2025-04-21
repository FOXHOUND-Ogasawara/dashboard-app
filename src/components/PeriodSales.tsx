import React, { useState } from "react";
import { periodSalesData } from "../data/newSalesData";
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

const PeriodSales: React.FC = () => {
  const [periodData, setPeriodData] = useState<"daily" | "weekly" | "monthly">(
    "daily"
  );

  const filterData = periodSalesData.filter(
    (timeData) => timeData.period === periodData
  );

  return (
    <>
      <Button onClick={() => setPeriodData("daily")}>日別</Button>
      <Button onClick={() => setPeriodData("weekly")}>週別</Button>
      <Button onClick={() => setPeriodData("monthly")}>月別</Button>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={filterData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" name="売上" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default PeriodSales;
