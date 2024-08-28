import { configureStore } from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query/react'
import { usersApi } from '../services/usersApi.js'

export const store = configureStore({
    reducer:{
        [usersApi.reducerPath]:usersApi.reducer,
    },

    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
    .concat(
        usersApi.middleware,
    )
})

setupListeners(store.dispatch)