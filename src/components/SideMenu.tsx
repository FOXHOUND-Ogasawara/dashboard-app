import { Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';

interface SideMenuProps {
  drawerWidth: number;
}

const SideMenu = ({drawerWidth}: SideMenuProps) => {
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
        <ListItem>
          <ListItemText primary="ダッシュボード" />
        </ListItem>
        <ListItem>
          <ListItemText primary="通知センター" />
        </ListItem>
        <ListItem>
          <ListItemText primary="設定" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideMenu;