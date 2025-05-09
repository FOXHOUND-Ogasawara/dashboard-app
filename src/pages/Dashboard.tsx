import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import UserStatsChart from '../components/UserStatsChart';
import SalesChart from '../components/SalesChart';
import RevenueSalesChart from '../components/RevenueSalesChart';
import CategorySalesChart from '../components/CategorySalesChart';
import PeriodSalesChart from '../components/PeriodSalesChart';

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
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              売上合計データ
            </Typography>
            <RevenueSalesChart />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              カテゴリー別売上データ
            </Typography>
            <CategorySalesChart />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              期間別売上データ
            </Typography>
            <PeriodSalesChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;