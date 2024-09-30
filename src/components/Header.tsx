import { AppBar, Switch, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1201 }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        ダッシュボードアプリ
      </Typography>
      <Switch />
    </Toolbar>
    </AppBar>
  );
}

export default Header;