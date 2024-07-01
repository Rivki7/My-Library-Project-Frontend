import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: 'https://localhost:7007/api/' });

const api = createApi({
  baseQuery,
  endpoints: () => ({}),
});

export default api;
