import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import SalesPieChart from '../components/SalesPieChart'; // 商品別売上円グラフコンポーネントをインポート
import UserStatsChart from "../components/UserStatsChart";
import ExtraSalesChart from "../components/ExtraSalesChart";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        ダッシュボード
      </Typography>
      <Grid container spacing={3}>
        {/* 商品別売上の円グラフ */}
        <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              商品別売上データ
            </Typography>
            <SalesPieChart /> {/* 商品別売上円グラフを表示 */}
        </Grid>
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
