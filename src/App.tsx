import { Box, CssBaseline, ThemeProvider, Toolbar, createTheme } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import Products from './pages/Products';// 商品一覧ページ

const drawerWidth = 240;

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode],
  );

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header onThemeChange={handleThemeChange} darkMode={darkMode} />
        <Box sx={{ display: 'flex' }}>
          <SideMenu drawerWidth={drawerWidth} />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/products" element={<Products />} />{/* 商品一覧ページ */}
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;