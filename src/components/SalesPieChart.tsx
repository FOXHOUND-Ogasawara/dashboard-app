import { productSalesData } from "../data/salesData";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const SalesPieChart: React.FC = () => {
  const COLORS = [
    "#0074D9",
    "#FF851B",
    "#2ECC40",
    "#FF4136",
    "#B10DC9",
    "#8B4513",
  ];
  return (
    <PieChart width={730} height={250}>
      <Pie
        data={productSalesData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={50}
        label
      >
        {productSalesData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};
export default SalesPieChart;