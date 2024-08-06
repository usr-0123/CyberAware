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
            query: (Email_address) => `employee/fetchByEmail/${Email_address}`,
            providesTags: ["Employee"],
        }),

        getUserById: builder.query({
            query: (userID) => `user/id/:userID`
        }),

        registerUser: builder.mutation({
            query: (employee) => ({
                url: "employee/register",
                method: "POST",
                body: employee,
            }),
            invalidatesTags: ["Employee"],
        }),

        loginUser: builder.mutation({
            query: (employee) => ({
                url: "employee/loginEmployee",
                method: "POST",
                body: employee,
            }),
            invalidatesTags: ["Employee"],
        }),

        updateUser: builder.mutation({
            query: (employee) => ({
                url: `employees/update/${employee.EmployeeID}`,
                method: "PUT",
                body: employee,
            }),
            invalidatesTags: ["Employee"],
        }),

        deleteUser: builder.mutation({
            query: (Email_address) => ({
                url: `employee/deleteByEmail/${Email_address}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Employee"],
        }),
    }),
})