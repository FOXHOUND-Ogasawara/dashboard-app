import React from "react";
import { categorySalesData } from "../data/newSalesData";
import {
    BarChart,
    Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CategorySales: React.FC = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
            <BarChart width={730} height={250} data={categorySalesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="categorySales.electronics" fill="#8884d8" name={"家電"} />
              <Bar dataKey="categorySales.electronics" fill="#82ca9d" name={"衣料品"} />
            </BarChart>
          </ResponsiveContainer>
    </>
  );
};

export default CategorySales;
