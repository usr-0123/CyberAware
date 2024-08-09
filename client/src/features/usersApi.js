import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3100/api/" }),
    tagTypes: ["Users"],
    endpoints: (builder) => ({

        getAllUsers: builder.query({
            query: () => "users/all",
            providesTags: ["Users"],
        }),

        getUserByEmail: builder.query({
            query: (Email_address) => `esers/fetchByEmail/${Email_address}`,
            providesTags: ["Users"],
        }),

        getUserById: builder.query({
            query: (userID) => `user/id/${userID}`
        }),

        sendOTP: builder.query({
            query: (Email_address) => ({
                url: `user/sendOtp/${Email_address}`,
                method: "POST",
                body: Users,
            }),
            invalidatesTags: ["Users"],
        }),

        registerUser: builder.mutation({
            query: (Users) => ({
                url: "users/register",
                method: "POST",
                body: Users,
            }),
            invalidatesTags: ["Users"],
        }),

        loginUser: builder.mutation({
            query: (Users) => ({
                url: "users/loginEmployee",
                method: "POST",
                body: Users,
            }),
            invalidatesTags: ["Users"],
        }),

        updateUser: builder.mutation({
            query: (Users) => ({
                url: `users/update/${Users.EmployeeID}`,
                method: "PUT",
                body: Users,
            }),
            invalidatesTags: ["Users"],
        }),

        deleteUser: builder.mutation({
            query: (Email_address) => ({
                url: `users/deleteByEmail/${Email_address}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Users"],
        }),
    }),
});

export const {
    useGetAllUsersQuery, useGetUserByEmailQuery, useGetUserByIdQuery, useSendOTPQuery, useRegisterUserMutation, useLoginUserMutation, useUpdateUserMutation, useDeleteUserMutation
} = userApi;