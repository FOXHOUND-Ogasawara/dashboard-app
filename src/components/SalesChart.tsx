import React, { useState } from "react";
// salesDate.tsのモックデータをインポート（タスク2）
// SalesChart.tsxでのグラフ構成を確認（タスク2）
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from "recharts";
// 日別、週別、月別の売上合計をインポート（タスク2）
import { dailySalesData, weeklySalesData, monthlySalesData } from "../data/salesData";
// 日別、週別、月別切り替えボタンのMUIをインポート
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

// Rechartsで折れ線グラフを実装（タスク2）
const SalesChart: React.FC = () => {
  
  // 表示データの状態管理（タスク2）
  const [range, setRange] = useState<"daily" | "weekly" | "monthly">("daily");
    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newRange: "daily" | "weekly" | "monthly" | null
    ) => {
      if (newRange !== null) {
      // 選択されているデータのグラフ表示
        setRange(newRange);
      };
  };

  // 日別、週別、月別売上合計の切り替え
  const getChartData = () => {
    switch (range) {
      case "daily":
      default:
        return dailySalesData;
      case "weekly":
        return weeklySalesData;
      case "monthly":
        return monthlySalesData;
    }
  };

  // MUIを利用して、切り替えUIを作成
  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={range}
        exclusive
        onChange={handleChange}
        sx={{ marginBottom: 2 }}
      >
        <ToggleButton value="daily">日別</ToggleButton>
        <ToggleButton value="weekly">週別</ToggleButton>
        <ToggleButton value="monthly">月別</ToggleButton>
      </ToggleButtonGroup>
      {/* SalesChart.tsxでのグラフ構成で実装（タスク2） */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={getChartData()}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#0088FE"
            name="売上"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default SalesChart;