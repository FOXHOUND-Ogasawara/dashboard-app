import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { periodSalesData } from "../data/newSalesData";
import { Button, ButtonGroup } from "@mui/material";

const PeriodSalesChart: React.FC = () => {
  const [range, setRange] = useState<"daily" | "weekly" | "monthly">("daily");
  const filteredData = periodSalesData.filter(
    (item) => item.period === range
  );

  return (
    <>
      <ButtonGroup>
        <Button onClick={() => setRange("daily")} variant={range === "daily" ? "contained" : "outlined"}>日別</Button>
        <Button onClick={() => setRange("weekly")} variant={range === "weekly" ? "contained" : "outlined"}>週別</Button>
        <Button onClick={() => setRange("monthly")} variant={range === "monthly" ? "contained" : "outlined"}>月別</Button>
      </ButtonGroup>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={filteredData}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#651fff"
            name="期間売上"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default PeriodSalesChart;