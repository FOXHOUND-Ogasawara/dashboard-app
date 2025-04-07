import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { userData } from "../data/userData"; // userData をインポート

const UserStatsChart = () => {
  return (
    <BarChart width={730} height={250} data={userData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" /> 
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="newUsers" fill="#8884d8" /> {/* 新規ユーザー */}
      <Bar dataKey="activeUsers" fill="#82ca9d" /> {/* アクティブユーザー */}
    </BarChart>
  );
};

export default UserStatsChart;
