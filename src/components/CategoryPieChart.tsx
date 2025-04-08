import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { categoryData } from "../data/productData";

// 円グラフの各セグメントの色を定義
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
  "#FF4567",
];

// 商品カテゴリ別割合を表示するための円グラフを作成するコンポーネント
const CategoryPieChart: React.FC = () => {
  return (
    <div style={{ width: "100%", height: 450 }}>
        <h2>商品カテゴリ別割合</h2>     {/* タイトルを追加 */} 
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={categoryData} // データを指定
            dataKey="value" // 円グラフの値
            nameKey="category" // 円グラフの名前
            cx="50%" // 円グラフのX座標
            cy="50%" // 円グラフのY座標
            outerRadius={150} // 円グラフの半径
            fill="#8884d8" // デフォルトの色
            label // 各セグメントにラベルを表示
          >
            {categoryData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]} // セグメントごとに色を設定
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryPieChart;
