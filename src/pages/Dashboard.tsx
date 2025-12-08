import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import React from "react";
import UserStatsChart from "../components/UserStatsChart";
import SalesChart from "../components/SalesChart";
import RevenueSalesChart from "../components/RevenueSalesChart";
import SalesPieChart from "../components/SalesPieChart";
import CategoryPieChart from "../components/CategoryPieChart";

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
              ユーザー統計
            </Typography>
            <UserStatsChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              売上データ
            </Typography>
            <SalesChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              カテゴリ別の割合
            </Typography>
            <CategoryPieChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              商品別の売上金額
            </Typography>
            <SalesPieChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              売上合計データ
            </Typography>
            <RevenueSalesChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
