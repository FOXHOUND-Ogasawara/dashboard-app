import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import UserStatsChart from '../components/UserStatsChart';
import SalesChart from '../components/SalesChart';
import SalesepieChart from '../components/SalesPiechart';
import CategorypieChart from '../components/CategorypieChart';

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
              ユーザー統計
            </Typography>
            <UserStatsChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              売上データ
            </Typography>
            <SalesChart/>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
             商品別売上金額
            </Typography>
            <SalesepieChart/>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              パイチャート
            </Typography>
            <CategorypieChart/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;