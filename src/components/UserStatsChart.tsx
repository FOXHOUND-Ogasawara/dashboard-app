// userData.tsのモックデータをインポート（タスク1）
// UserStatsChart.tsxでのグラフ構成を確認（タスク1）
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { userData } from "../data/userData";

// Rechartsで棒グラフを実装（タスク1）
const UserStatsChart: React.FC = () => {
  return (
    // UserStatsChart.tsxでのグラフ構成で実装（タスク1）
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={userData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="newUsers" fill="#0088FE" barSize={30} name="新規ユーザー" />
        <Bar dataKey="activeUsers" fill="#00C49F" barSize={30} name="アクティブユーザー" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UserStatsChart;