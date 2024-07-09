import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { redirect, useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';

const CustomMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: '#4B5563', // Matches the sidebar's bg-zinc-600
    color: 'white',
    width: '200px', // Adjust the width as needed
  },
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#6B7280', // Matches the sidebar's hover:bg-zinc-500
  },
}));

function ResponsiveAppBar() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  

  React.useEffect(() => {
    const checkTokenAndFetchData = async () => {
      const token = localStorage.getItem('token');
  
      if (!token) {
        navigate('/auth/login');
        return;
      }
  
      setIsLoggedIn(true);
    };
  
    checkTokenAndFetchData();
  }, [navigate]);

  
  if (!isLoggedIn) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleChangePassword = () => {
    navigate('/dashboard/profile');
    handleMenuClose();
  };

  if (isLoggedIn === null) {
    // Render nothing or a loading spinner while checking the login status
    return null;
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333333' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="logo" style={{ height: 60, marginRight: '10px' }} />
            <Typography variant="h6" component="a" sx={{ flexGrow: 1 }} href="/dashboard">
              Wawakuna
            </Typography>
          </Box>
          {isLoggedIn && (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                sx={{ marginLeft: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
              <CustomMenu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <CustomMenuItem onClick={handleLogout}>Logout</CustomMenuItem>
                <CustomMenuItem onClick={handleChangePassword}>Change Password</CustomMenuItem>
              </CustomMenu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
