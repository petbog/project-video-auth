import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";

// const api_key = `AIzaSyBGiRuZ-YJLoo3fiRHxoWpwZKiZpOXDufw`
const api_key = `AIzaSyBQ_CVy1nc8t2YebofCtvFS135p6tolsJM`

export const SearchVideo = createAsyncThunk(
    'search/SearchVideo',
    async function (params) {
        const { searchValue, countVideo, sortVideo } = params
        const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${api_key}&part=snippet,id&order=${sortVideo}&maxResults=${countVideo}&q=${searchValue}`)
        return data
    }
)




const initialState = {
    item: [],
    status: 'loading' || 'success' || 'error',
    searchValue: 'Котики',
    sort: {
        name: 'Актуальность',
        typeSort: 'relevance'
    },
    countVideo: 10
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
        },
        setSortType(state, action) {
            state.sort = action.payload
        },
        setCountVideo(state, action) {
            state.countVideo = action.payload
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

export const SearchDelector =(state:RootState)=> state.search

export const { getSearch, getSearchValue, setSortType, setCountVideo } = SearchSlise.actions
export default SearchSlise.reducer

