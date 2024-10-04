import { Paper, Typography } from '@mui/material';
import React from 'react';
import NotificationList from '../components/NotificationList';

const Notifications: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        通知センター
      </Typography>
      <Paper sx={{ p: 2 }}>
        <NotificationList />
      </Paper>
    </div>
  );
};

export default Notifications;