import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { productSalesData } from '../data/salesData'; // 商品別売上データをインポート

// カラーパレット
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384', '#36A2EB'];

const SalesPieChart: React.FC = () => {
  return (
     // グラフをレスポンシブ対応させるコンテナ
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
         {/* 円グラフのデータと設定 */}
        <Pie
          data={productSalesData}// 表示するデータ
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {/* 各セクションの色を設定 */}
          {productSalesData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip /> {/* ツールチップを表示 */}
        <Legend /> {/* 凡例を表示 */}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SalesPieChart;