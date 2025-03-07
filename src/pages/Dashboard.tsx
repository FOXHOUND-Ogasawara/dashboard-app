import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import SalesepieChart from '../components/SalesPiechart';

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
              商品別の売上金額
            </Typography>
            <SalesepieChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;