import React from 'react';
import { Bar, BarChart,  Legend,  ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { userData } from '../data/userData';


const UserStateChart: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart  data={userData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="newUsers" fill="#8884d8" />
                <Bar dataKey="activeUsers" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    )

}

export default UserStateChart;