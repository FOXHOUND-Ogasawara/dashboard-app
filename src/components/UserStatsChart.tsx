import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { userData } from "../data/userData";

const UserStatsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={userData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="newUsers" fill="#6b6be8" name="新規ユーザー" />
        <Bar dataKey="activeUsers" fill="#76c893" name="アクティブユーザー" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UserStatsChart;
