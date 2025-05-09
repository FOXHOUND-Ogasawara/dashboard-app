import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Button, ButtonGroup, Typography } from '@mui/material';
import { periodSalesData } from '../data/newSalesData';

const PeriodSalesChart: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const filteredData = periodSalesData.filter((data) => data.period === selectedPeriod);

  return (
    <div style={{ width: '100%', height: 400 }}>
      <Typography variant="h6" gutterBottom>
        期間別売上データ
      </Typography>
      <ButtonGroup variant="contained" color="primary" style={{ marginBottom: '16px' }}>
        <Button onClick={() => setSelectedPeriod('daily')} disabled={selectedPeriod === 'daily'}>
          日別
        </Button>
        <Button onClick={() => setSelectedPeriod('weekly')} disabled={selectedPeriod === 'weekly'}>
          週別
        </Button>
        <Button onClick={() => setSelectedPeriod('monthly')} disabled={selectedPeriod === 'monthly'}>
          月別
        </Button>
      </ButtonGroup>
      <ResponsiveContainer>
        <LineChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" label={{ value: '期間', position: 'insideBottomRight', offset: -5 }} />
          <YAxis label={{ value: '売上', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="linear" dataKey="value" name="売上" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PeriodSalesChart;