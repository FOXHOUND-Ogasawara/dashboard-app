import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { dailySalesData, weeklySalesData, monthlySalesData } from '../data/salesData';
import { Button, ButtonGroup, Typography } from '@mui/material';

const SalesChart: React.FC = () => {
  const [dataType, setDataType] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  // データを切り替える関数
  const getData = () => {
    switch (dataType) {
      case 'daily':
        return dailySalesData;
      case 'weekly':
        return weeklySalesData;
      case 'monthly':
        return monthlySalesData;
      default:
        return dailySalesData;
    }
  };

  return (
    <div style={{ width: '100%', height: 400 }}>
      <Typography variant="h6" gutterBottom>
        売上データ
      </Typography>
      <ButtonGroup variant="contained" color="primary" style={{ marginBottom: '16px' }}>
        <Button onClick={() => setDataType('daily')} disabled={dataType === 'daily'}>
          日別
        </Button>
        <Button onClick={() => setDataType('weekly')} disabled={dataType === 'weekly'}>
          週別
        </Button>
        <Button onClick={() => setDataType('monthly')} disabled={dataType === 'monthly'}>
          月別
        </Button>
      </ButtonGroup>
      <ResponsiveContainer>
        <LineChart data={getData()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="linear" dataKey="sales" name="売上合計" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;