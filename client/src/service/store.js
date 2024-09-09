import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { usersApi } from '../services/usersApi.js'
import { questionsApi } from '../services/questionsApi.js'
import { categoryApi } from '../services/categoriesApi.js';
import { quizApi } from '../services/quizApi.js';

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