import { Container, Box, Typography } from '@mui/material';
import { AutoStoriesOutlined } from '@mui/icons-material';

const withLayout = (WrappedComponent) => {
  const ComponentWithLayout = (props) => (
    <Container maxWidth='sm'>
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 8px',
            fontWeight: 'bold',
            py: 3,
            mb: 2,
          }}
        >
          <AutoStoriesOutlined sx={{ mr: 1 }} color='primary' />
          <Typography variant='h6' noWrap component='div' color='primary'>
            Book Tracker
          </Typography>
        </Box>
        <WrappedComponent {...props} />
      </Box>
    </Container>
  );

  ComponentWithLayout.displayName = `WithLayout(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return ComponentWithLayout;
};

export default withLayout;
