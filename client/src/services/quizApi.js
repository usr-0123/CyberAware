import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../helpers/token";

// const api = import.meta.env.REACT_APP_BASE_URL

export const quizApi = createApi({
    reducerPath: "quizApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3100/api/",
        prepareHeaders: (headers) => {
            const token = getToken();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers;
        },
    }),
    tagTypes: ["Quiz"],
    endpoints: (builder) => ({

        createNewQuiz: builder.mutation({
            query: (quiz) => ({
                url: 'quiz/create',
                method: "POST",
                body: quiz,
            }),
            invalidatesTags: ["Quiz"],
        }),

        getAllQuiz: builder.query({
            query: () => 'quiz/fetch/all',
            providesTags: ["Quiz"],
        }),

        getQuizByQuizId: builder.query({
            query: (quizId) => `quiz/fetch/quizId/${quizId}`,
            providesTags: ['Quiz'],
        }),

        getQuizbyUserid: builder.query({
            query: (userId) => `quiz/fetch/userId/${userId}`,
            providesTags: ["Quiz"],
        }),

        getQuizByQuestionid: builder.query({
            query: (questionId) => `quiz/fetch/questionId/${questionId}`,
            providesTags: ["Quiz"],
        }),

        getQuizQuestionQuizid: builder.query({
            query: (userId) => `quiz/fetch/quiz/question/${userId}`,
            providesTags: ['Quiz'],
        }),

        updateQuiz: builder.mutation({
            query: ({ quizId, editedvalues }) => ({
                url: `quiz/update/${quizId}`,
                method: 'PATCH',
                body: editedvalues
            }),
            invalidatesTags: ['Quiz'],
        }),

        deleteQuiz: builder.mutation({
            query: (quizId) => ({
                url: `quiz/delete/${quizId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Quiz"],
        }),
    }),

});

export const { useCreateNewQuizMutation, useGetAllQuizQuery, useGetQuizByQuizIdQuery, useGetQuizbyUseridQuery, useGetQuizByQuestionidQuery, useGetQuizQuestionQuizidQuery, useUpdateQuizMutation, useDeleteQuizMutation } = quizApi;