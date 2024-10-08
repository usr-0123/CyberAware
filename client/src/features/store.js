import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { usersApi } from './api/usersApi.js'
import { questionsApi } from './api/questionsApi.js'
import { quizApi } from './api/quizApi.js';
import { categoryApi } from './api/categoriesApi.js';

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [questionsApi.reducerPath]: questionsApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [quizApi.reducerPath]: quizApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(
            usersApi.middleware,
            questionsApi.middleware,
            categoryApi.middleware,
            quizApi.middleware,
        )
});

setupListeners(store.dispatch);