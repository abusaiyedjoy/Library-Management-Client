import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://assignment-3-library-management-chi.vercel.app/api/books" }),
  tagTypes: ["books", "edit-book"],

  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/",
      providesTags: ["books"],
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["books", "edit-book"],
    }),

    deleteBook: builder.mutation({
      query: (_id) => ({
        url: `/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    getBookById: builder.query({
      query: (_id) => `/${_id}`,
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetBookByIdQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = baseApi;
