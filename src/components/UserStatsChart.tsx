import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { userData } from "../data/userData";

const UserStatsChart = () => {
  return (
    <BarChart width={730} height={250} data={userData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="newUsers" name="新規ユーザー" fill="#8884d8" />
      <Bar dataKey="activeUsers" name="アクティブユーザー" fill="#82ca9d" />
    </BarChart>
  );
};

export default UserStatsChart;
