import CloseIcon from "@mui/icons-material/Close";
import {
  Badge,
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { notifications } from "../data/notifications";

const NotificationList: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState<
    (typeof notifications)[0] | null
  >(null);

  const handleOpen = (notification: (typeof notifications)[0]) => {
    setSelectedNotification(notification);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedNotification(null);
  };

  return (
    <>
      <List>
        {notifications.map((notification) => (
          <ListItemButton
            key={notification.id}
            onClick={() => handleOpen(notification)}
          >
            <ListItemText primary={notification.message} />
            {!notification.read && (
              <Badge color="primary" variant="dot">
                {/* 未読の印 */}
              </Badge>
            )}
          </ListItemButton>
        ))}
      </List>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedNotification && (
            <>
              <Typography variant="h6" component="h2" gutterBottom>
                通知詳細
              </Typography>
              <Typography variant="body1">
                {selectedNotification.message}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default NotificationList;
