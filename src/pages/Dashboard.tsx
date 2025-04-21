import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import UserStatsChart from '../components/UserStatsChart';
import SalesChart from '../components/SalesChart';

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
              
            </Typography>
            <UserStatsChart />
          </Paper>
        </Grid>


        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <SalesChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;