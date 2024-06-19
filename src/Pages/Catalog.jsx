import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../features/book/bookSlice';

const Catalog = () => {
  const { books, isLoading } = useSelector((store) => store.book);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
    console.log(books);
  }, []);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      {books.map((book) => {
        return <h1 key={book.id}>{book.dateEnter}</h1>;
      })}
    </>
  );
};
export default Catalog;
