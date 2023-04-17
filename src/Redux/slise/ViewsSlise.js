import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const api_key = `AIzaSyBGiRuZ-YJLoo3fiRHxoWpwZKiZpOXDufw`

export const GetViewsCount = createAsyncThunk(
    'views/GetViewsCount',
    async function (params) {
        const { views } = params
        const ids = views.join(',')
        const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${api_key}&part=snippet&id=${ids}`)
        return data
    }
)


const initialState = {
    views: [],
    status: 'loading' || 'success' || 'error',
}

const ViewsSlise = createSlice({
    name: 'views',
    initialState,
    reducers: {
        setViews(state, action) {
            state.views= action.payload
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


export const { setViews } = ViewsSlise.actions;
export default ViewsSlise.reducer;