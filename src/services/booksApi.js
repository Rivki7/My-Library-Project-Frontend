import api from './api';

export const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => 'titles',
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
