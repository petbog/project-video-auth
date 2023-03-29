import { configureStore } from "@reduxjs/toolkit";
import user from './slise/UserSlice'
import search from './slise/SearchSlise'

export const store = configureStore({
    reducer: {
        user,
        search,
    }
})