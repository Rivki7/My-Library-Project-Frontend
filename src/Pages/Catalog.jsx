// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getBooks } from '../features/book/bookSlice';
import { useGetBooksQuery } from '../services/booksApi';

const Catalog = () => {
  // const { books, isLoading } = useSelector((store) => store.book);
  const { data: books, isFetching, isError } = useGetBooksQuery();
  // const dispatch = useDispatch();
  console.log('books', books);

  // useEffect(() => {
  //   dispatch(getBooks());
  //   console.log(books);
  // }, []);

  if (isError) {
    return <h1>Error</h1>;
  }
  if (isFetching) {
    return <h1>Loading</h1>;
  }
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
