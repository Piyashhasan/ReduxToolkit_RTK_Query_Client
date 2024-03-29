import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://usermanagement-u339.onrender.com/",
  }),
  tagTypes: ["Users"],

  endpoints: (builder) => ({
    // --- get all user ---
    getUsers: builder.query({
      query: () => "/user",
      providesTags: ["Users"],
    }),

    // --- get single user ---
    getSingleUser: builder.query({
      query: (id) => `/user/${id}`,
    }),

    // --- create new user ---
    createUser: builder.mutation({
      query: (data) => ({
        url: "/user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),

    // --- update user ---
    updateUser: builder.mutation({
      query: ({ userId, updatedData }) => ({
        url: `user/${userId}`,
        method: "PATCH",
        body: updatedData,
      }),
      invalidatesTags: ["Users"],
    }),

    // --- delete user ---
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: "DELETE",
        body: userId,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetSingleUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = apiSlice;
