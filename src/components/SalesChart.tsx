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
import React, { useState } from "react";
import { ButtonGroup, Button } from "@mui/material";

const SalesChart: React.FC = () => {
  const [viewData, setViewData] = useState<"day" | "week" | "month">("day");

  const getData = () => {
    switch (viewData) {
      case "week":
        return weeklySalesData;
      case "month":
        return monthlySalesData;
      default:
        return dailySalesData;
    }
  };

  const setViewDay = () => {
    setViewData("day");
  };

  const setViewWeek = () => {
    setViewData("week");
  };

  const setViewMonth = () => {
    setViewData("month");
  };

  return (
    <div>
      <ButtonGroup variant="outlined" size="small" sx={{ mb: 2 }}>
        <Button
          onClick={setViewDay}
          variant={viewData === "day" ? "contained" : "outlined"}
        >
          日別
        </Button>
        <Button
          onClick={setViewWeek}
          variant={viewData === "week" ? "contained" : "outlined"}
        >
          週別
        </Button>
        <Button
          onClick={setViewMonth}
          variant={viewData === "month" ? "contained" : "outlined"}
        >
          月別
        </Button>
      </ButtonGroup>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={getData()}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884D8" name="売上" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
