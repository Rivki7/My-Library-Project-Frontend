// Op
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Container, Paper } from '@mui/material';
const openingHours = {
  monday: '9 AM - 5 PM',
  tuesday: '9 AM - 5 PM',
  wednesday: '9 AM - 5 PM',
  thursday: '9 AM - 5 PM',
  friday: '9 AM - 1 PM',
  saturday: 'Closed',
  sunday: '9 AM - 5 PM',
};

const OpeningHours = () => {
  return (
    <Container maxWidth='md'>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Box mt={4}>
          <Typography variant='h5' component='h2' gutterBottom>
            Opening Hours
          </Typography>
          <Divider />
          {Object.entries(openingHours).length > 0 ? (
            Object.entries(openingHours).map(([day, hours]) => (
              <Typography key={day} variant='body1'>
                {`${day.charAt(0).toUpperCase() + day.slice(1)}: ${hours}`}
              </Typography>
            ))
          ) : (
            <Typography variant='body1'>Loading...</Typography>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default OpeningHours;
