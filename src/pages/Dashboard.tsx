import SalesChart from '../components/SalesChart';
import UserStatsChart from '../components/UserStatsChart';

const Dashboard = () => {
  return (
    <div>
      <h2>ダッシュボード</h2>
      <UserStatsChart />
      <SalesChart />
    </div>
  );
};

export default Dashboard;