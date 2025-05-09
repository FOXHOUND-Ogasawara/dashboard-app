import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { userData } from '../data/userData';

const UserStatsChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <h2>ユーザー統計情報</h2>
      <ResponsiveContainer>
        <BarChart data={userData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="newUsers" name="新規ユーザー数" fill="#8884d8" />
          <Bar dataKey="activeUsers" name="アクティブユーザー数" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserStatsChart;