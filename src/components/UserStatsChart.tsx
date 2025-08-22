import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { userData } from "../data/userData";

const UserStatsChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={userData}>
        <XAxis dataKey="month" />
        <YAxis dataKey="activeUsers" />
        <Tooltip />
        <Legend />
        <Bar dataKey="newUsers" name="新規ユーザー" fill="#8884d8" />
        <Bar dataKey="activeUsers" name="アクティブユーザー" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UserStatsChart;
