import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { dailySalesData, weeklySalesData, monthlySalesData  } from "../data/salesData";

const SalesChart = () => {
  const [dataType, setDataType] = useState<string>("daily");

  const getData = () => {
    switch (dataType) {
      case "daily":
        return dailySalesData;
      case "weekly":
        return weeklySalesData;
      case "monthly":
        return monthlySalesData;
      default:
        return dailySalesData;
    }
  };

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2>売上データ</h2>
      <div>
        <button onClick={() => setDataType("daily")}>日別</button>
        <button onClick={() => setDataType("weekly")}>週別</button>
        <button onClick={() => setDataType("monthly")}>月別</button>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={getData()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey= "label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;