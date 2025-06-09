import React from "react";
// recharts,userDataのimport
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

const UserStatsChart=()=> {

  return (
    <div style={{width:'100%,height:300'}}>
        {/* レスポンシブ対応 */}
        <ResponsiveContainer>
            {/* バーグラフの作成 */}
      <BarChart data={userData}>
        <XAxis dataKey="month"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        {/* 二本のバーを並べる設定 */}
        <Bar dataKey="newUsers" fill="#8884d8" name="新規ユーザー" />
        <Bar dataKey="activeUsers" fill="#82ca9d" name="アクティブユーザー"/>
      </BarChart>
      </ResponsiveContainer>
      </div>

  );
}

export default UserStatsChart;
