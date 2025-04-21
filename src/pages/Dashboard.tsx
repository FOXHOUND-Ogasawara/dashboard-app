import { Grid, Paper, Typography } from "@mui/material";
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
