import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import CategoryChart from '../components/CategoryChart';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        ダッシュボード
      </Typography>
      <Grid container spacing={3}>
        {/* 商品カテゴリ別の割合グラフ */}
      <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              商品カテゴリ別の割合グラフ
            </Typography>
            <CategoryChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;