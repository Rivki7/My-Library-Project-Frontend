import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './features/book/bookSlice';
import { booksApi } from './services/booksApi';

export const store = configureStore({
  reducer: {
    book: bookSlice,
    [booksApi.reducerPath]: booksApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware.concat(booksApi.middleware),
});
