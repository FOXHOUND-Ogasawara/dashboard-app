import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import React from "react";
import PlaceholderChart from "../components/PlaceholderChart";
import UserStatsChart from "../components/UserStatsChart";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        ダッシュボード
      </Typography>
      <Grid container spacing={3}>
        {/* ユーザー統計情報 */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              ユーザー統計
            </Typography>
            <UserStatsChart />
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
