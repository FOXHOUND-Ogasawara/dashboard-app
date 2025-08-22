import React, { useState } from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  dailySalesData,
  weeklySalesData,
  monthlySalesData,
} from "../data/salesData";
import { Button, ButtonGroup } from "@mui/material";

const SalesChart: React.FC = () => {
  const [span, setSpan] = useState("daily");
  const chartData =
    span === "weekly"
      ? weeklySalesData
      : span === "monthly"
      ? monthlySalesData
      : dailySalesData;

  return (
    <>
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button
          onClick={() => setSpan("daily")}
          variant={span === "daily" ? "contained" : "outlined"}
        >
          日別
        </Button>
        <Button
          onClick={() => setSpan("weekly")}
          variant={span === "weekly" ? "contained" : "outlined"}
        >
          週別
        </Button>
        <Button
          onClick={() => setSpan("monthly")}
          variant={span === "monthly" ? "contained" : "outlined"}
        >
          月別
        </Button>
      </ButtonGroup>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="label" />
          <YAxis dataKey="sales" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" name="売上" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default SalesChart;
