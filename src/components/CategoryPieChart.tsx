import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { categoryData } from "../data/productsData";

const CategoryPieChart: React.FC = () => {
  const COLORS = [
    "#00C49F",
    "#0088FE",
    "#FFBB28",
    "#FF8042",
    "#A020F0",
    "#B8860B",
  ];
  return (
    <PieChart width={730} height={250}>
      <Pie
        data={categoryData}
        dataKey="value"
        nameKey="category"
        cx="50%"
        cy="50%"
        outerRadius={50}
        label
      >
        {categoryData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};
export default CategoryPieChart;
