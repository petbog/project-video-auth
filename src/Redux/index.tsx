import { configureStore } from "@reduxjs/toolkit";
import user from './slise/UserSlice'
import search from './slise/SearchSlise'
import views from './slise/ViewsSlise'

export const store = configureStore({
    reducer: {
        user,
        search,
        views,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch