import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import PlaceholderChart from '../components/PlaceholderChart';

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
            <PlaceholderChart title="チャート1" />
          </Paper>
        </Grid>
        {/* サンプルチャート2 */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              サンプルチャート2
            </Typography>
            <PlaceholderChart title="チャート2" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;