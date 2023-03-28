import { configureStore } from "@reduxjs/toolkit";
import userReduser from './slise/UserSlice'
import SearchReduser from './slise/SearchSlise'

export const store = configureStore({
    reducer: {
        user: userReduser,
        search: SearchReduser,
    }
})