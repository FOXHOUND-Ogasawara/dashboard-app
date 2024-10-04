import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { placeholderData } from '../data/placeholderData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA00FF'];

const PlaceholderChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={placeholderData}
          dataKey="value"
          nameKey="category"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {placeholderData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PlaceholderChart;