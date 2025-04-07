import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import UserStatsChart from "../components/UserStatsChart";
import ExtraSalesChart from "../components/ExtraSalesChart";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        ダッシュボード
      </Typography>
      <Grid container spacing={3}>
        {/* ユーザー統計情報チャート1 */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6">ユーザー統計情報</Typography>
          <UserStatsChart />
        </Grid>

        {/* 売上推移 */}
        <Box sx={{ marginLeft: "28px" }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">売上推移</Typography>
            <ExtraSalesChart />
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default Dashboard;
