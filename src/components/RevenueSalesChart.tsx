import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { salesData } from"../data/newSalesData"; // 型定義のインポート


const RevenueSalesChart: React.FC<> = () => {
  // グラフ用のデータ整形
  const formattedData = salesData.map((entry) => ({
    date: entry.record.date,
    total: entry.record.revenue.total,
  }));

  return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>{/*描画に使用する配列データ*/}
          <CartesianGrid strokeDasharray="3 3" />{/*グリッド線を破線で描写*/}
          <XAxis dataKey="date" />{/*newSalesDataのdateプロパティをX軸に表示*/}
          <YAxis />{/*Y軸の設定*/}
          <Tooltip />
          <Line type="monotone" dataKey="total" stroke="#8884d8"/>{/*実際の折れ線を描写する要素。dataKeyは縦軸*/}
        </LineChart>
      </ResponsiveContainer>
  );
};

export default RevenueSalesChart;
