import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { salesData } from '../data/newSalesData';

const RevenueSalesChart: React.FC = () => {
  const formattedData = salesData.map((item) => ({
    date: item.record.date,
    total: item.record.revenue.total,
  }));

  return (
    <div style={{ width: '100%', height: 400 }}>
      <h2>売上データ</h2>
      <ResponsiveContainer>
        <LineChart data={formattedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" label={{ value: '日付', position: 'insideBottomRight', offset: -5 }} />
          <YAxis label={{ value: '売上合計', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Line type="linear" dataKey="total" name="売上合計" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueSalesChart;