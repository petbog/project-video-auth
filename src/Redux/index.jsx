import { configureStore } from "@reduxjs/toolkit";
import userReduser from './slise/UserSlice'

export const store = configureStore({
    reducer: {
        user: userReduser,
    }
})