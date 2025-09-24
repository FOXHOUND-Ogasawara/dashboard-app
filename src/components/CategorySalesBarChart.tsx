import { categorySalesData } from "../data/newSalesData";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CategorySalesBarChart = () => {
      const formattedData = categorySalesData.map((item) => ({
    date: item.date,
    electronics: item.categorySales.electronics,
    clothing: item.categorySales.clothing,
  }));
  return (
    <BarChart width={730} height={250} data={formattedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="electronics" name="家電" fill="#8884d8" />
      <Bar dataKey="clothing" name="衣服" fill="#82ca9d" />
    </BarChart>
  );
};

export default CategorySalesBarChart;