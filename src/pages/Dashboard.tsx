import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import SalesChart from '../components/SalesChart';
import CategoryPieChart from "../components/CategoryPieChart";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        ダッシュボード
      </Typography>
      <Grid container spacing={3}>
        {/*売上推移グラフ*/}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <SalesChart />
          </Paper>
        </Grid>
        {/*商品カテゴリ別割合グラフ*/}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <CategoryPieChart />
          </Paper>
        </Grid>
      </Grid>
      
    </div>
  );
};

export default Dashboard;