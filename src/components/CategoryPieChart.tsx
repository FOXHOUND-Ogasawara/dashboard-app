import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { categoryData } from "../data/productsData";

const CategoryPieChart:React.FC=()=>{
    return(
        <PieChart width={730} height={250}>
  <Pie data={categoryData} dataKey="value" nameKey="category" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
</PieChart>
    )
}
export default CategoryPieChart;