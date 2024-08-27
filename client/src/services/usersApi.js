import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3100/api/" }),
    tagTypes: ["Users"],
    endpoints: (builder) => ({

        getAllUsers: builder.query({
            query: () => "users/all",
            providesTags: ["Users"],
        }),

        getUserByEmail: builder.query({
            query: (Email_address) => `users/fetchByEmail/${Email_address}`,
            providesTags: ["Users"],
        }),

        getUserById: builder.query({
            query: (userID) => `user/id/${userID}`
        }),

        sendOTP: builder.mutation({
            query: (Users) => ({
                url: `user/sendOtp/email`,
                method: "POST",
                body: Users,
            }),
            invalidatesTags: ["Users"],
        }),

        resetPassword: builder.mutation({
            query: (Users) => ({
                url: "user/reset",
                method: "PATCH",
                body: Users,
            }),
            invalidatesTags: ["Users"],
        }),

        getOTP:builder.mutation({
            query: (users) => ({
                url: 'users/getOtp',
                method: "POST",
                body: users,
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
                url: "/user/login",
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
    useGetAllUsersQuery, useGetUserByEmailQuery, useGetUserByIdQuery, useGetOTPMutation, useSendOTPMutation, useResetPasswordMutation, useRegisterUserMutation, useLoginUserMutation, useUpdateUserMutation, useDeleteUserMutation
} = usersApi;