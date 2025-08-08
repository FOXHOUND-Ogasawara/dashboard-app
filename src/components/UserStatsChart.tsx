import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
  //棒グラフ,要素,X軸,Y軸,グラフの凡例（項目名と色の説明）,
} from 'recharts';
import { userData } from '../data/userData';

const UserStatsChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={userData}>
        <XAxis dataKey="month" />
        <YAxis />
         <Tooltip />
        <Legend />
        <Bar dataKey="newUsers" name="新規ユーザー" fill='#8884d8' /> 
        {/* //fillは色 */}
        <Bar dataKey="activeUsers"   name="アクティブユーザー" fill="#82ca9d"/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UserStatsChart;
