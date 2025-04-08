import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import SalesChart from "../components/SalesChart";
import CategoryPieChart from "../components/CategoryPieChart";
import SalesPieChart from "../components/SalesPieChart"; // 商品別売上円グラフコンポーネントをインポート
import UserStatsChart from "../components/UserStatsChart";
import ExtraSalesChart from "../components/ExtraSalesChart";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        ダッシュボード
      </Typography>
      <Grid container spacing={3}>
        
        {/*売上推移グラフ*/}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <SalesChart />
          </Paper>
        </Grid>

        {/*商品カテゴリ別割合グラフ*/}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <CategoryPieChart />
          </Paper>
        </Grid>

        {/* 商品別売上の円グラフ */}
        <Grid item xs={12} md={6} sx={{ marginTop: "48px" }}>
          <Typography variant="h6" gutterBottom>
            商品別売上データ
          </Typography>
          <Paper sx={{ p: 2, width: "530px", height: "340px" }}>
            <SalesPieChart /> {/* 商品別売上円グラフを表示 */}
          </Paper>
        </Grid>

        {/* ユーザー統計情報チャート1 */}
        <Box>
          <Grid item xs={12} md={6} sx={{ margin: "28px" }}>
            <Typography variant="h6">ユーザー統計情報</Typography>
            <Paper sx={{ p: 4, width: "800px", height: "300px" }}>
              <UserStatsChart />
            </Paper>
          </Grid>
        </Box>

        {/* 売上推移 */}
        <Grid item xs={12} md={8}>
          <Typography variant="h6">売上推移</Typography>
          <Paper sx={{ p: 4, width: "800px", height: "300px" }}>
            <ExtraSalesChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
