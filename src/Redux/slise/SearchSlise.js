import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api_key = `AIzaSyBGiRuZ-YJLoo3fiRHxoWpwZKiZpOXDufw`

export const SearchVideo = createAsyncThunk(
    'search/SearchVideo',
    async function (params) {
        const { searchValue } = params
        const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${api_key}&part=snippet,id&order=rating&maxResults=10&q=${searchValue}`)
        return data
    }
)

const initialState = {
    item: [],
    status: 'loading' || 'success' || 'error',
    searchValue: '',
}

const SearchSlise = createSlice({
    name: 'search',
    initialState,
    reducers: {
        getSearch(state, action) {
            state.item = action.payload
        },
        getSearchValue(state, action) {
            state.searchValue = action.payload
        }
    },
    extraReducers: {
        [SearchVideo.pending]: (state, action) => {
            state.status = 'loading'
        },
        [SearchVideo.fulfilled]: (state, action) => {
            state.status = 'success'
            state.item = action.payload

        },
        [SearchVideo.rejected]: (state, action) => {
            state.status = 'error'
        },
    }
})
export const { getSearch, getSearchValue } = SearchSlise.actions
export default SearchSlise.reducer

