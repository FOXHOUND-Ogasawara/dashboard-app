import React, { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer
} from "recharts";
import { dailySalesData, weeklySalesData, monthlySalesData } from "../data/salesData";

const SalesChart = () => {
  const [mode, setMode] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  const getData = () => {
    switch (mode) {
      case 'weekly': return weeklySalesData;
      case 'monthly': return monthlySalesData;
      default: return dailySalesData;
    }
  };

  return (
    <div>
      {/* ボタンで実行 */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {['daily', 'weekly', 'monthly'].map((item) => (
          <button
            key={item}
            onClick={() => setMode(item as 'daily' | 'weekly' | 'monthly')}
            style={{
              padding: "8px 16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: mode === item ? "#1976d2" : "#fff",
              color: mode === item ? "#fff" : "#000",
              cursor: "pointer"
            }}
          >
            {item === 'daily' ? '日別' : item === 'weekly' ? '週別' : '月別'}
          </button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={getData()}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
