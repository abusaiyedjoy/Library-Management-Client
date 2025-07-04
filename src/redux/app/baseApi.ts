import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/books' }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
        query: () => "/",
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
    })
  }),
});

export const { useGetAllBooksQuery, useAddBookMutation } = baseApi;