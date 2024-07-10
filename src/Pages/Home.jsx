import { Button } from '@mui/material';
import { OurLibrary, QuoteCarousel } from '../components';

const Home = () => {
  return (
    <>
      <QuoteCarousel />
      <OurLibrary />
      <Button variant='outlined'>Home</Button>
    </>
  );
};
export default Home;
