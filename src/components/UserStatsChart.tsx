// ①使う機能をここでimport
//   userData.ts を import
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import{userData}from'../data/userData'

function UserStatsChart() {
  // ③ 処理を書く（例：ボタンを押したとき）

  return (
    <div style={{width:'100%,height:300'}}>
      <BarChart data={userData}>
        <XAxis dataKey="month"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey="newUsers" fill="#8884d8" name="新規ユーザー" />
        <Bar dataKey="activeUsers" fill="#82ca9d" name="アクティブユーザー"/>
      </BarChart>
      </div>

  );
}

export default UserStatsChart;
