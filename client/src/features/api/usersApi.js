import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../helpers/token";

export const usersApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3100/api/",
        prepareHeaders: (headers) => {
            const token = getToken();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["Users"],
    endpoints: (builder) => ({

        getAllUsers: builder.query({
            query: () => 'users/all',
            providesTags: ["Users"],
            method: "GET",
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

        getOTP: builder.mutation({
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
            query: ({ userID, editedValues }) => ({
                url: `user/update/${userID}`,
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'userID': userID
                },
                body: editedValues
            }),
            invalidatesTags: ["Users"],
        }),

        deleteUser: builder.mutation({
            query: (userID) => ({
                url: `user/delete/${userID}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Users"],
        }),
    }),
});

export const {
    useGetAllUsersQuery, useGetUserByEmailQuery, useGetUserByIdQuery, useGetOTPMutation, useSendOTPMutation, useResetPasswordMutation, useRegisterUserMutation, useLoginUserMutation, useUpdateUserMutation, useDeleteUserMutation
} = usersApi;