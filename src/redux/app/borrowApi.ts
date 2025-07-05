import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const borrowApi = createApi({
    reducerPath: "borrowApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://assignment-3-library-management-chi.vercel.app/api/borrow" }),
    tagTypes: ["borrows"],
    endpoints: (builder) => ({
        getAllBorrows: builder.query({
            query: () => "/",
            providesTags: ["borrows"],
        }),
        addBorrow: builder.mutation({
            query: (data) => ({
                url: "/",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["borrows"],
        }),
    }),
});

export const { useGetAllBorrowsQuery, useAddBorrowMutation } = borrowApi;