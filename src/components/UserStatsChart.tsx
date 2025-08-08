// src/components/UserStatsChart.tsx
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid
} from 'recharts';
import { userData } from '../data/userData';

const UserStatsChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={userData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="newUsers" />
        <Bar dataKey="activeUsers" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UserStatsChart;
