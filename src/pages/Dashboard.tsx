import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import React from "react";
import PlaceholderChart from "../components/PlaceholderChart";

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
      </Grid>
    </div>
  );
};

export default Dashboard;
