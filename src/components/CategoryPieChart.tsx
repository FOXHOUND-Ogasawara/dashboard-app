import React from "react";
import { Cell, Pie, PieChart, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { categoryData } from "../data/productData";

const COLORS = ["#e91e63", "#9c27b0", "#2196f3", "#009688", "#ffeb3b", "#ff5722"];

const CategoryPieChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      {/* PieChartとPieを使ってカテゴリの比率を描画 */}
      {/* UI要素の追加 */}
      <PieChart>
        <Pie
          data={categoryData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {categoryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CategoryPieChart;