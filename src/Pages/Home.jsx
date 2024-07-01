import { Button } from '@mui/material';
import { OurLibrary, SentencesSlider } from '../components';

const Home = () => {
  return (
    <>
      <SentencesSlider />
      <OurLibrary />
      <Button variant='outlined'>Home</Button>
    </>
  );
};
export default Home;
