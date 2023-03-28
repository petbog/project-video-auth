import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api_key=`AIzaSyCGiFK20c7bVUk9E18qBdY5FIZ3YSR43b4`

export const SearchVideo=createAsyncThunk(
    'search/SearchVideo',
    async function(){
        const {data} = await axios.get(`https://www.googleapis.com/youtube/v3?key=${api_key}&part=snippet,id&order=date&maxResults=10 `)

        return data
    }
)


const initialState = {
    items: [],
}

const SearchSlise = createSlice({
    name: 'search',
    initialState,
    reducers: {
        getSearch(state, action) {
            state.items = action.payload
        },
    }
})
export const { getSearch } = SearchSlise.actions
export default SearchSlise.reducer

