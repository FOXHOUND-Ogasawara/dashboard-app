import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import PlaceholderChart from '../components/PlaceholderChart';
import UserStateChart from '../components/UserStateChart';

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
            <UserStateChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;