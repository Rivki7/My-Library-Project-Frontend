import api from './api';

export const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => 'book',
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
