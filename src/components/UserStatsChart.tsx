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
} from "recharts";

const UserStatsChart: React.FC = () => {
  return (
    <BarChart width={730} height={250} data={userData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="newUsers" fill="#8884d8" name={"新規ユーザー"} />
      <Bar dataKey="activeUsers" fill="#82ca9d" name={"アクティブユーザー"} />
    </BarChart>
  );
};

export default UserStatsChart;
