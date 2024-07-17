import { Button } from '@mui/material';
import { OpeningHours, OurLibrary, QuoteCarousel } from '../components';

const Home = () => {
  return (
    <>
      <QuoteCarousel />
      <OurLibrary />
      <OpeningHours />
      <Button variant='outlined'>Home</Button>
    </>
  );
};
export default Home;
