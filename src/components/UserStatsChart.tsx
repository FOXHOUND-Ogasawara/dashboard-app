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
  const UserStatsChart = () => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={userData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="newUsers" fill="#8884D8" name="新規ユーザー" />
          <Bar dataKey="activeUsers" fill="#82CA9D" name="アクティブユーザー" />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  export default UserStatsChart;