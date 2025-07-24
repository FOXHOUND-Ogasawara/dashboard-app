import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import React from "react";
import UserStatsChart from "../components/UserStatsChart";
import SalesChart from "../components/SalesChart";
import CategoryPieChart from "../components/CategoryPieChart";

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
        {/* 売上データ */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              売上データ
            </Typography>
            <SalesChart />
          </Paper>
        </Grid>
        {/* 商品カテゴリ別割合 */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              商品カテゴリ別割合
            </Typography>
            <CategoryPieChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
