import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  dailySalesData,
  weeklySalesData,
  monthlySalesData,
} from "../data/salesData";
import { Button } from "@mui/material";
import { useState } from "react";
type ViewType = "daily" | "weekly" | "monthly";

const SalesChart = () => {
  const [view, setView] = useState<ViewType>("daily");

  const getChartData = () => {
    switch (view) {
      case "daily":
        return dailySalesData;
      case "weekly":
        return weeklySalesData;
      case "monthly":
        return monthlySalesData;
      default:
        return dailySalesData;
    }
  };

  return (
    <>
      <Button
        variant={view === "daily" ? "contained" : "outlined"}
        onClick={() => setView("daily")}
      >
        日別
      </Button>
      <Button
        variant={view === "weekly" ? "contained" : "outlined"}
        onClick={() => setView("weekly")}
      >
        週別
      </Button>
      <Button
        variant={view === "monthly" ? "contained" : "outlined"}
        onClick={() => setView("monthly")}
      >
        月別
      </Button>
      <LineChart
        width={730}
        height={250}
        data={getChartData()}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" name="売上" stroke="#8884d8" />
      </LineChart>
    </>
  );
};

export default SalesChart;
