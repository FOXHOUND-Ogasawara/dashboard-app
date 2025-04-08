import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { dailySalesData, weeklySalesData, monthlySalesData  } from "../data/salesData";

const SalesChart = () => {
    const [dataType, setDataType] = useState<string>("daily"); // 現在のデータタイプ（日別、週別、月別）を管理する状態
  
    // データタイプに応じて適切なデータを返す関数
    const getData = () => {
      switch (dataType) {
        case "daily":
          return dailySalesData; // 日別データを返す
        case "weekly":
          return weeklySalesData; // 週別データを返す
        case "monthly":
          return monthlySalesData; // 月別データを返す
        default:
          return dailySalesData; // デフォルトで日別データを返す
      }
    };
  

  return (
    <div style={{ width: "100%", height: 400 }}> {/* グラフのサイズを指定 */}
      <h2>売上データ</h2> {/* タイトルを追加 */}
      <div>
        {/* データタイプを選択するボタンを追加 */}
        <button onClick={() => setDataType("daily")}>日別</button>
        <button onClick={() => setDataType("weekly")}>週別</button>
        <button onClick={() => setDataType("monthly")}>月別</button>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={getData()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}> {/* 折れ線グラフの設定 */}
          <CartesianGrid strokeDasharray="3 3" /> {/* 背景のグリッド線 */}
          <XAxis dataKey= "label" /> {/* X軸の設定 */}
          <YAxis /> {/* Y軸の設定 */}
          <Tooltip />
          <Legend /> {/* 凡例の表示 */}
          <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} /> {/* 折れ線の設定 */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;