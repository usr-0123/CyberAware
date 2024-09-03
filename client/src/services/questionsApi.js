import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../helpers/token";

export const questionsApi = createApi({
    reducerPath: "questionsApi",
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
    tagTypes: ["Questions"],
    endpoints: (builder) => ({

        createNewQuestion: builder.mutation({
            query: (questions) => ({
                url: 'question/create',
                method: "POST",
                body: questions,
            }),
            invalidatesTags: ["Questions"],
        }),

        getAllQuestions: builder.query({
            query: () => 'question/all',
            providesTags: ["Questions"],
        }),

        getQuestionByQuestionId: builder.query({
            query: (questionId) => `question/${questionId}`,
            providesTags: ["Questions"],
        }),

        getAllQuestionsCategory: builder.query({
            query: () => 'question/category',
            providesTags: ["Questions"],
        }),

        getQuestionCategoryByQuestionId: builder.query({
            query: (questionId) => `question/category/id/${questionId}`,
            providesTags: ["Questions"],
        }),

        updateQuestion: builder.mutation({
            query: (questionId) => ({
                url: `question/update/${questionId}`,
                method: "PATCH",
                body: question,
            }),
            invalidatesTags: ["Questions"],
        }),

        deleteQuestion: builder.mutation({
            query: (questionId) => ({
                url: `question/delete/${questionId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Questions"],
        }),
    }),
});

export const { useCreateNewQuestionMutation, useGetAllQuestionsQuery, useGetAllQuestionsCategoryQuery, useGetQuestionByQuestionIdQuery, useGetQuestionCategoryByQuestionIdQuery, useUpdateQuestionMutation, useDeleteQuestionMutation } = questionsApi;