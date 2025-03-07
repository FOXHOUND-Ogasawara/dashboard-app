import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import PlaceholderChart from '../components/PlaceholderChart';
import CategorypieChart from '../components/CategorypieChart';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        ダッシュボード
      </Typography>
      <Grid container spacing={3}>
        {/* サンプルチャート1 */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              サンプルチャート1
            </Typography>
            <PlaceholderChart />
          </Paper>
        </Grid>
        {/* サンプルチャート2 */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              サンプルチャート2
            </Typography>
            <PlaceholderChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              パイチャート
            </Typography>
            <CategorypieChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;