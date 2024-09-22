import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Drawer,
  Box,
  Button,
} from '@mui/material';
import { AutoStoriesOutlined, Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import { logoutUser } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Catalog', path: '/catalog' },
  { name: 'New Books', path: '/newOnShelf' },
  { name: 'Contact', path: '/contact' },
];

const ResponsiveAppBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  console.log(user);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} role='presentation'>
      <Toolbar>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          Your Logo
        </Typography>
        <IconButton
          color='inherit'
          aria-label='close drawer'
          edge='end'
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {navigationLinks.map((item) => (
          <ListItem
            key={item.name}
            button
            component={NavLink}
            to={item.path}
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component='nav' position='static'>
        <Toolbar>
          <IconButton
            color='inherit'
            edge='start'
            aria-label='menu'
            sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <Box
              sx={{ display: 'flex', alignItems: 'center', padding: '0 8px' }}
            >
              <AutoStoriesOutlined sx={{ mr: 1 }} />
              Book Tracker
            </Box>
          </Typography>

          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            <Box
              sx={{ display: 'flex', alignItems: 'center', padding: '0 8px' }}
            >
              <AutoStoriesOutlined sx={{ mr: 1 }} />
              Book Tracker
            </Box>
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navigationLinks.map((item) => (
              <Button
                key={item.name}
                component={NavLink}
                to={item.path}
                sx={{ color: 'white', mx: 1 }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <Button
            variant='contained'
            color='primary'
            href='/signin'
            sx={{ ml: { xs: 'auto', md: 2 } }}
            onClick={() => {
              if (user) {
                dispatch(logoutUser());
              }
            }}
          >
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {user ? 'Sign Out' : 'Sign In'}
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <LoginIcon />
            </Box>
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: 250, boxSizing: 'border-box' },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default ResponsiveAppBar;
