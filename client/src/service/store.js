import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { usersApi } from '../services/usersApi.js'
import { questionsApi } from '../services/questionsApi.js'

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [questionsApi.reducerPath]: questionsApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(
            usersApi.middleware,
            questionsApi.middleware,
        )
});

setupListeners(store.dispatch);