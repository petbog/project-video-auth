import { configureStore } from "@reduxjs/toolkit";
import user from './slise/UserSlice'
import search from './slise/SearchSlise'
import views from './slise/ViewsSlise'
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        user,
        search,
        views,
    }
})
//типизация selector
export type RootState = ReturnType<typeof store.getState>

//типизация dispatch
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 