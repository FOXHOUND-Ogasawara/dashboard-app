import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import PlaceholderChart from "../components/PlaceholderChart";
import SalesPieChart from "../components/SalesPieChart";
import RevenueSalesChart from "../components/RevenueSalesChart";

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
              商品別の売上金額
            </Typography>
            <SalesPieChart />
          </Paper>
        </Grid>
        {/* サンプルチャート2 */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              折れ線グラフ
            </Typography>
            <RevenueSalesChart data={[]} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
