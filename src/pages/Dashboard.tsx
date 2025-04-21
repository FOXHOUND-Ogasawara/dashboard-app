import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import UserStatsChart from "../components/UserStatsChart";
import SalesChart from "../components/SalesChart";
import RevenueSales from "../components/RevenueSales";
import CategorySales from "../components/CategorySales";
import PeriodSales from "../components/PeriodSales";
import CategoryPieChart from "../components/CategoryPieChart";
import SalesPieChart from "../components/SalesPieChart";

const Dashboard = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        ダッシュボード
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom></Typography>
            <UserStatsChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <SalesChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <RevenueSales />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <CategorySales />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <PeriodSales />
            <Typography variant="h6" gutterBottom>
              商品カテゴリ別の割合
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
      </Grid>
    </div>
  );
};

export default Dashboard;
