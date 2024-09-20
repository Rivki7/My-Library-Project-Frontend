// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getBooks } from '../features/book/bookSlice';
import { Box, CircularProgress } from '@mui/material';
import { useGetBooksQuery } from '../services/booksApi';

const Catalog = () => {
  const { data: books, isFetching, isError } = useGetBooksQuery();

  console.log('books', books);

  if (isError) {
    return <h1>Error</h1>;
  }
  if (isFetching) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
  return (
    <>
      {books.map((book) => {
        return (
          <h1 key={book.id}>
            {book.dateEnter}
            {book.name}
          </h1>
        );
      })}
    </>
  );
};
export default Catalog;
