import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Toolbar,
  Box,
  Typography,
  Divider,
} from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';

const drawerWidth = 240;

const navItems = [
  {
    label: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/dashboard',
  },
  {
    label: 'Articles',
    icon: <ArticleIcon />,
    path: '/dashboard/articles',
  },
  {
    label: 'Reports',
    icon: <BarChartIcon />,
    path: '/dashboard/reports',
  },
  {
    label: 'Users',
    icon: <PeopleIcon />,
    path: '/dashboard/users',
  },
];

const DashLayout = () => {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#f9f9f9',
            borderRight: '1px solid #ddd',
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Panel
          </Typography>
        </Toolbar>
        <Divider />
        <List sx={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item.path}
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                width: '100%', // Makes buttons full-width
                minHeight: 48, // Changed from height to minHeight for better spacing
                '&.Mui-selected': {
                  backgroundColor: '#e3f2fd',
                  borderRight: '3px solid #1976d2',
                  '&:hover': {
                    backgroundColor: '#bbdefb',
                  },
                },
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <ListItemIcon 
                sx={{ 
                  color: location.pathname === item.path ? '#1976d2' : 'inherit',
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.label}
                sx={{
                  '& .MuiTypography-root': {
                    fontWeight: location.pathname === item.path ? 600 : 400,
                    color: location.pathname === item.path ? '#1976d2' : 'inherit',
                  }
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3,
          backgroundColor: '#fafafa',
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashLayout;