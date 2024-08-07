import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemIcon,
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

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Catalog', path: '/catalog' },
  { name: 'New Books', path: '/newonshelf' },
  { name: 'Contact', path: '/contact' },
];

const ResponsiveAppBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

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
            <ListItemIcon>{/* Add appropriate icons here */}</ListItemIcon>
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
          >
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>Sign In</Box>
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

// import { AutoStoriesOutlined } from '@mui/icons-material';
// import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
// import { Link, NavLink } from 'react-router-dom';
// const Navbar = () => {
//   return (
//     <>
//       <AppBar position='static'>
//         <Container maxWidth='xl'>
//           <Toolbar disableGutters>
//             <AutoStoriesOutlined />
//             <Typography
//               variant='h6'
//               noWrap
//               component='a'
//               href='#app-bar-with-responsive-menu'
//               sx={{
//                 mr: 2,
//                 display: { xs: 'none', md: 'flex' },
//                 fontFamily: 'monospace',
//                 fontWeight: 700,
//                 color: 'inherit',
//                 textDecoration: 'none',
//               }}
//             >
//               Book Tracker
//             </Typography>
//           </Toolbar>
//         </Container>
//       </AppBar>
//       <nav>
//         <Link to={'/'}>
//           <img src='./../assets\logo.jpeg' />
//         </Link>
//         <div>
//           <NavLink to={'/'}>Home</NavLink>
//           <NavLink to={'/events'}>Events</NavLink>
//           <NavLink to={'/catalog'}>Catalog</NavLink>
//           <NavLink to={'/newonshelf'}>New books</NavLink>
//           <NavLink to={'/contact'}>Contact</NavLink>
//         </div>
//         <Button variant='contained'>
//           <a href='/signin'>Sing in</a>
//         </Button>
//         <Button variant='contained'>
//           <a href='/signup'>sign up</a>
//         </Button>
//       </nav>
//     </>
//   );
// };
// export default Navbar;
