import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function ResponsiveAppBar() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const navigate = useNavigate();


  React.useEffect(() => {
    // Check if the user is logged in by checking for a token
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Remove the token from localStorage and update the state
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/')
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333333' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="logo" style={{ height: 60, marginRight: '10px' }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Control Parental
            </Typography>
          </Box>
          {isLoggedIn && (
            <Button color="inherit" onClick={handleLogout} sx={{ marginLeft: 'auto' }}>
              Logout
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
