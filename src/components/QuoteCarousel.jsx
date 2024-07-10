import { useState, useEffect } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import quotes from '../data/quotes';
import { useMediaQuery } from '@mui/material';

const CarouselContainer = styled('div')({
  width: '100%',
  minHeight: '50vh',
  overflow: 'hidden',
  position: 'relative',
});
const CarouselBackground = styled(Box)({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});
const CarouselItem = styled(Paper)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.common.white,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(4),
  textAlign: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  transition: 'opacity 1s ease-in-out',
}));

function QuoteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer>
      {quotes.map((quote, index) => (
        <CarouselItem
          key={index}
          style={{
            backgroundImage: quote.backgroundImage,
            opacity: currentIndex === index ? 1 : 0,
            zIndex: -10,
          }}
        >
          <Typography
            variant={isSmallScreen ? 'h5' : 'h3'}
            component='h1'
            style={{
              zIndex: 1,
            }}
          >
            &quot;{quote.text}&quot;
          </Typography>
          <Typography
            variant={isSmallScreen ? 'body1' : 'h6'}
            component='h2'
            style={{
              zIndex: 1,
            }}
          >
            - {quote.author}
          </Typography>
          <CarouselBackground />
        </CarouselItem>
      ))}
    </CarouselContainer>
  );
}

export default QuoteCarousel;
