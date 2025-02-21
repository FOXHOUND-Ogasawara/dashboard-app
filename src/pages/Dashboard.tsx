import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import CategoryChart from "../components/CategoryChart";
import SalesPieChart from "../components/SalesPieChart";
import UserStateChart from '../components/UserStateChart';
import SalesChart from '../components/SalesChart';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        ダッシュボード
      </Typography>
      <Grid container spacing={3}>
        {/* 商品カテゴリ別の割合グラフ */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              商品カテゴリ別の割合グラフ
            </Typography>
            <CategoryChart />
          </Paper>
        </Grid>
        {/* 商品別の売上⾦額の円グラフ */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              商品別の売上⾦額の円グラフ
            </Typography>
            <SalesPieChart />
          </Paper>
        </Grid>
        {/* ユーザー統計情報のグラフ */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              ユーザー統計情報
            </Typography>
            <UserStateChart />
          </Paper>
        </Grid>
        {/* 売上データの折れ線グラフ */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              売上データ
            </Typography>
            <SalesChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
