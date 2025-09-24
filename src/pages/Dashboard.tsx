import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import React from "react";
import CategoryPieChart from "../components/CategoryPieChart";
import SalesPieChart from "../components/SalesPieChart";

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
              商品カテゴリ別割合の円グラフ
            </Typography>
            <CategoryPieChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              商品別の売上⾦額の円グラフ作成
            </Typography>
            <SalesPieChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
