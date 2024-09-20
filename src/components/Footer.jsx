// Footer.js
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        bgcolor: 'primary.main',
        py: 1.5,
        mt: 'auto',
        textAlign: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant='body2' color='text.secondary'>
        ©2024 BookTracker
      </Typography>
    </Box>
  );
};

export default Footer;
