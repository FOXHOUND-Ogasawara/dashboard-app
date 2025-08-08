import React, { useState } from "react";
import { //タスク1棒グラフ
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  dailySalesData,
  weeklySalesData,
  monthlySalesData,
} from "../data/salesData";
import { Box, Button, ButtonGroup } from "@mui/material";

const SalesChart: React.FC = () => {
  const [mode, setMode] = useState<"daily" | "weekly" | "monthly">("daily");

   // モードに応じたデータを取得
  const getData = () => {
    switch (mode) {
      case "weekly":
        return weeklySalesData;
      case "monthly":
        return monthlySalesData;
      default:
        return dailySalesData;
    }
  };

   return (
     <Box>
      {/* 切り替えボタン */}
      <ButtonGroup sx={{ mb: 2 }}>
        <Button
          variant={mode === "daily" ? "contained" : "outlined"}
          onClick={() => setMode("daily")}
        >
          日
        </Button>
        <Button
          variant={mode === "weekly" ? "contained" : "outlined"}
          onClick={() => setMode("weekly")}
        >
          週
        </Button>
        <Button
          variant={mode === "monthly" ? "contained" : "outlined"}
          onClick={() => setMode("monthly")}
        >
          月
        </Button>
      </ButtonGroup>

      {/* 折れ線グラフ */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={getData()}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"

            name="売上"
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SalesChart;
