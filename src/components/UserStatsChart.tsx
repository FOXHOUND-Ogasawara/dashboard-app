import React from "react";
import { userData } from "../data/userData";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UserStatsChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart width={730} height={250} data={userData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="newUsers" fill="#8884d8" name={"新規ユーザー"} />
        <Bar dataKey="activeUsers" fill="#82ca9d" name={"アクティブユーザー"} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UserStatsChart;
