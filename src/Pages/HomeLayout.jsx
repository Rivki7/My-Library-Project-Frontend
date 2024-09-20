import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';
import { Box } from '@mui/material';

const HomeLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative',
        paddingBottom: '60px',
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};
export default HomeLayout;
