import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { salesData } from "../data/newSalesData";

const RevenueSalesChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={salesData}>
        <XAxis dataKey="record.date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="record.revenue.total"
          stroke="#00e676"
          name="合計収益"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default RevenueSalesChart;