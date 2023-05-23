import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";


// const api_key = `AIzaSyBGiRuZ-YJLoo3fiRHxoWpwZKiZpOXDufw`
const api_key = `AIzaSyBQ_CVy1nc8t2YebofCtvFS135p6tolsJM`

export const GetViewsCount = createAsyncThunk(
    'views/GetViewsCount',
    async function (params) {
        const { items } = params
        const ids = items.join(',')
        const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${api_key}&part=snippet,statistics&id=${ids}`)
        return data
    }
)

type VievsType={
    items:string[]
}
type ItemsType={
    items:string[]
}
interface initialStateType{
    views:VievsType[];
    items:ItemsType[]
}

const initialState:initialStateType = {
    views: [],
    items: [],
    status: 'loading' || 'success' || 'error',
}

const ViewsSlise = createSlice({
    name: 'views',
    initialState,
    reducers: {
        setViews(state, action) {
            state.items = action.payload
        }
    },
    extraReducers: {
        [GetViewsCount.pending]: (state, action) => {
            state.status = 'loading'
        },
        [GetViewsCount.fulfilled]: (state, action) => {
            state.status = 'success'
            state.views = action.payload

        },
        [GetViewsCount.rejected]: (state, action) => {
            state.status = 'error'
        },
    }
})

export const VieasSelector =(state:RootState)=>state.views

export const { setViews } = ViewsSlise.actions;
export default ViewsSlise.reducer;