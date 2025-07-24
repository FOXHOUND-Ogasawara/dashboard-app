import { categorySalesData } from "../data/newSalesData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const CategorySalesChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={categorySalesData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="categorySales.electronics" fill="#ffea00" barSize={30} name="電気用品" />
        <Bar dataKey="categorySales.clothing" fill="#76ff03" barSize={30} name="衣類" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CategorySalesChart;