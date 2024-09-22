import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: 'https://localhost:44351/api/' });

const api = createApi({
  baseQuery,
  endpoints: () => ({}),
});

export default api;
