import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import React from "react";
import UserStatsChart from "../components/UserStatsChart";
import SalesChart from "../components/SalesChart";
import RevonueSalesChart from "../components/RevenueSalesChart";
import CategorySalesChart from "../components/CategorySalesChart";
import PeriodSalesChart from "../components/PeriodSalesChart";
import CategoryPieChart from "../components/CategoryPieChart";
import SalesPieChart from "../components/SalesPieChart";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        ダッシュボード
      </Typography>
      <Grid container spacing={3}>
        {/* ユーザー統計チャート */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              ユーザー統計
            </Typography>
            <UserStatsChart />
          </Paper>
        </Grid>
        {/* 売上データチャート */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              売上データ
            </Typography>
            <SalesChart />
          </Paper>
        </Grid>
        {/* 商品カテゴリ別の割合 */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              商品カテゴリ別の割合
            </Typography>
            <CategoryPieChart />
          </Paper>
        </Grid>
        {/* 商品別の売上金額 */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              商品別の売上金額
            </Typography>
            <SalesPieChart />
          </Paper>
        </Grid>
        {/* 追加実装 売上データチャート*/}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              追加実装 売上データ
            </Typography>
            <RevonueSalesChart />
          </Paper>
        </Grid>
        {/* 追加実装 カテゴリ別売上データチャート*/}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              追加実装 カテゴリ売上データ
            </Typography>
            <CategorySalesChart />
          </Paper>
        </Grid>
        {/* 追加実装 売上データチャート*/}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              追加実装 売上データ
            </Typography>
            <PeriodSalesChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
