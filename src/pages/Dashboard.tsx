import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import UserStatsChart from '../components/UserStatsChart'; // UserStatsChartをインポート
import SalesChart from '../components/SalesChart'; // SalesChartをインポート

const Dashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        ダッシュボード
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              ユーザー統計情報
            </Typography>
            <UserStatsChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              売上データ
            </Typography>
            <SalesChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;