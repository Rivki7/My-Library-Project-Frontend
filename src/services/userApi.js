import api from './api';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: 'user/addUser',
        method: 'POST',
        body: data,
      }),
    }),
    signIn: builder.mutation({
      query: (data) => ({
        url: 'user/login',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = userApi;
