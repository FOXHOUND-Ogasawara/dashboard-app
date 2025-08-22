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
import { periodSalesData } from "../data/newSalesData";

import { Button, ButtonGroup } from "@mui/material";

const PeriodSalesChart: React.FC = () => {
  const dailyPeriodSalesData = periodSalesData.filter(
    (data) => data.period === "daily"
  );
  const weeklyPeriodSalesData = periodSalesData.filter(
    (data) => data.period === "weekly"
  );
  const monthlyPeriodSalesData = periodSalesData.filter(
    (data) => data.period === "monthly"
  );

  const [period, setPeriod] = useState("daily");
  let chartData;

  if (period === "weekly") {
    chartData = weeklyPeriodSalesData;
  } else if (period === "monthly") {
    chartData = monthlyPeriodSalesData;
  } else {
    chartData = dailyPeriodSalesData;
  }

  return (
    <>
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button
          onClick={() => setPeriod("daily")}
          variant={period === "daily" ? "contained" : "outlined"}
        >
          日別
        </Button>
        <Button
          onClick={() => setPeriod("weekly")}
          variant={period === "weekly" ? "contained" : "outlined"}
        >
          週別
        </Button>
        <Button
          onClick={() => setPeriod("monthly")}
          variant={period === "monthly" ? "contained" : "outlined"}
        >
          月別
        </Button>
      </ButtonGroup>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="label" />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" name="売上" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default PeriodSalesChart;
