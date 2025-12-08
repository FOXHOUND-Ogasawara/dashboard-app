import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";

import {
  dailySalesData,
  weeklySalesData,
  monthlySalesData,
} from "../data/salesData";

import { useState } from "react";

import { Button, ButtonGroup } from "@mui/material";

// #endregion
const SalesChart = () => {
  //取得データの選択状態
  const [mode, setMode] = useState("daily");

  //ボタン切り替え処理
  const data =
    mode === "weekly"
      ? weeklySalesData
      : mode === "monthly"
      ? monthlySalesData
      : dailySalesData;

  return (
    <>
      {/* ▼ 切り替えボタン */}

      <div style={{ marginBottom: "20px" }}>
        <ButtonGroup variant="outlined" color="primary">
          <Button
            variant={mode === "daily" ? "contained" : "outlined"}
            onClick={() => setMode("daily")}
          >
            日別
          </Button>
          <Button
            variant={mode === "weekly" ? "contained" : "outlined"}
            onClick={() => setMode("weekly")}
          >
            週別
          </Button>
          <Button
            variant={mode === "monthly" ? "contained" : "outlined"}
            onClick={() => setMode("monthly")}
          >
            月別
          </Button>
        </ButtonGroup>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" name="売上" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default SalesChart;
