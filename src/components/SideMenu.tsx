import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface SideMenuProps {
  drawerWidth: number;
}

const SideMenu: React.FC<SideMenuProps> = ({ drawerWidth }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: { width: drawerWidth },
      }}
    >
      <Toolbar />
      <List>
        <ListItemButton component={Link} to="/">
          <ListItemText primary="ダッシュボード" />
        </ListItemButton>
        <ListItemButton component={Link} to="/notifications">
          <ListItemText primary="通知センター" />
        </ListItemButton>
        <ListItemButton component={Link} to="/settings">
          <ListItemText primary="設定" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default SideMenu;
