import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";

import { salesData, RevenueSales } from "../data/newSalesData";

// #endregion
const RevenueSalesChart = () => {
  const chartData = salesData.map((item: RevenueSales) => ({
    date: item.record.date,
    total: item.record.revenue.total,
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#8884d8" name="合計" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueSalesChart;
