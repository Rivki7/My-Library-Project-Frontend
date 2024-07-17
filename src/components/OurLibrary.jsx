// import { Container, Typography } from '@mui/material';

// const OurLibrary = () => {
//   return (
//     <Container>
//       <Typography variant='h3'>Our Library</Typography>
//     </Container>
//   );
// };
// export default OurLibrary;

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const AboutLibrary = () => {
  return (
    <Container maxWidth='md'>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Box mb={2}>
          <Typography variant='h4' component='h1' gutterBottom>
            About the Library
          </Typography>
          <Divider />
        </Box>
        <Typography variant='body1' paragraph>
          {/* Your text content goes here */}
          Our library is a vibrant hub of knowledge and community. Readers can
          find a diverse collection of books spanning various genres and
          subjects, catering to all ages and interests. Beyond its extensive
          book collection, our library offers a range of engaging events, from
          author readings to educational workshops. For convenience, we maintain
          a comprehensive catalog that allows patrons to easily search and
          discover the books available in our collection. Whether you&apos;re
          seeking your next great read, looking to attend an enriching event, or
          simply want a quiet place to study, our library is here to serve your
          needs.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutLibrary;
