import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import SalesPieChart from '../components/SalesPieChart'; // 商品別売上円グラフコンポーネントをインポート

const Dashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        ダッシュボード
      </Typography>
      <Grid container spacing={3}>
        {/* 商品別売上の円グラフ */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              商品別売上データ
            </Typography>
            <SalesPieChart /> {/* 商品別売上円グラフを表示 */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;