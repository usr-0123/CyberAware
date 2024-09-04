import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../helpers/token";

export const categoryApi = createApi({
    reducerPath: "categoryApi",
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
    tagTypes: ["Categories"],
    endpoints: (builder) => ({

        createNewCategory: builder.mutation({
            query: (category) => ({
                url: "category/create",
                method: "POST",
                body: category,
            }),
            invalidatesTags: ["Categories"],
        }),

        getAllCategories: builder.query({
            query: () => "category/all",
            providesTags: ["Categories"],
        }),

        getCategory: builder.query({
            query: (categoryId) => `category/${categoryId}`,
            providesTags: ["Categories"],
        }),

        updateCategory: builder.mutation({
            query: (categoryId) => ({
                url: `category/update/${categoryId}`,
                method: 'PATCH',
            }),
            invalidatesTags: ["Categories"],
        }),

        deleteCategory: builder.mutation({
            query: (categoryId) => ({
                url: `category/delete/${categoryId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Categories"],
        }),

    }),
});

export const { useCreateNewCategoryMutation, useGetAllCategoriesQuery, useGetCategoryQuery, useUpdateCategoryMutation, useDeleteCategoryMutation } = categoryApi;