import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './features/book/bookSlice';
import { booksApi } from './services/booksApi';
import userSlice from './features/user/userSlice';
import { userApi } from './services/userApi';

export const store = configureStore({
  reducer: {
    book: bookSlice,
    user: userSlice,
    [booksApi.reducerPath]: booksApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(booksApi.middleware)
      .concat(userApi.middleware),

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware.concat(booksApi.middleware),
});
