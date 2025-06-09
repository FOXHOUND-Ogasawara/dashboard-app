import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { products } from '../data/productData'; //  モックデータをインポート


// カラーパターンを定義
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EF4", "#F48EA2"];

const SalesPieChart = () => {
  //  商品名と価格を使ってデータを作成
  const salesData = products.map((product) => ({
    name: product.name,
    value: product.price,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={salesData}       //  データをグラフに渡す
          dataKey="value"        //  数値のキー（円グラフのサイズに使用）
          nameKey="name"         //  ラベルのキー（商品名）
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {/* 各データに色を割り当てる */}
          {salesData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />   {/* カーソルを当てると情報が出る */}
        <Legend />    {/*  凡例を表示 */}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SalesPieChart;
