import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { productSalesData } from "../data/salesData"; // ここから読み込み

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA00FF"];

const SalesPieChart = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={productSalesData}
            dataKey="value"
            outerRadius={100}
            label={({ value }) => value} // 商品名は表示せず、数値だけラベル
          >
            {productSalesData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesPieChart;
