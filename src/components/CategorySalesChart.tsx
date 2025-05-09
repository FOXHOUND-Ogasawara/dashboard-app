import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { categorySalesData } from '../data/newSalesData';

const CategorySalesChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <h2>カテゴリー別売上データ</h2>
      <ResponsiveContainer>
        <BarChart data={categorySalesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" label={{ value: '日付', position: 'insideBottomRight', offset: -5 }} />
          <YAxis label={{ value: '売上', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="categorySales.electronics" name="電子機器" fill="#8884d8" />
          <Bar dataKey="categorySales.clothing" name="衣料品" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategorySalesChart;