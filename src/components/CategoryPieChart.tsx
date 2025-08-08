import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell,Legend } from 'recharts';

const exdata = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 200 },
  { name: 'Group D', value: 100 },
  { name: 'Group E', value: 50 },
];

const CategoryPieChart = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={exdata} dataKey="value" outerRadius={100} label>
            <Cell fill="red" />
            <Cell fill="yelow" />
            <Cell fill="blue" />
            <Cell fill="green" />
            <Cell fill="pink" />
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryPieChart;