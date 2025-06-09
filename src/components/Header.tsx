import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
import React from "react";

interface HeaderProps {
  onThemeChange: () => void;
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onThemeChange, darkMode }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1201 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ダッシュボードアプリ
        </Typography>
        <Switch checked={darkMode} onChange={onThemeChange} color="default" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
