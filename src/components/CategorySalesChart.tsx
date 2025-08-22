import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { categorySalesData } from "../data/newSalesData";

const CategorySalesChart: React.FC = () => {
  const flatCategorySalesData = categorySalesData.map(
    ({ date, categorySales }) => ({ date, ...categorySales })
  );

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={flatCategorySalesData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="electronics" name="電化製品" fill="#8884d8" />
        <Bar dataKey="clothing" name="衣類" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CategorySalesChart;
