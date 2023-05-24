import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";

// const api_key = `AIzaSyBGiRuZ-YJLoo3fiRHxoWpwZKiZpOXDufw`
const api_key = `AIzaSyBQ_CVy1nc8t2YebofCtvFS135p6tolsJM`
type ParamsType = {
    searchValue:string;
    countVideo:number
    sortVideo:string
}

export const SearchVideo = createAsyncThunk(
    'search/SearchVideo',
    async function (params:ParamsType) {
        const { searchValue, countVideo, sortVideo } = params
        const { data } = await axios.get<ItemType[]>(`https://www.googleapis.com/youtube/v3/search?key=${api_key}&part=snippet,id&order=${sortVideo}&maxResults=${countVideo}&q=${searchValue}`)
        return data as ItemType[]
    }
)

type SortType = {
    name: 'Дата' | 'Рейтинг' | 'Актуальность' | 'Название';
    typeSort: 'date' | 'rating' | 'relevance' | 'title';
}
type VideoIdType = {
    videoId: string
}
type IdType = {
    id: VideoIdType
}
type ItemType = {
    items: IdType[]
}

interface InitialStateType {
    item: ItemType[];
    status: 'loading' | 'success' | 'error',
    searchValue: string;
    sort: SortType;
    countVideo: number
}

const initialState: InitialStateType = {
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
        getSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload
        },
        setSortType(state, action: PayloadAction<SortType>) {
            state.sort = action.payload
        },
        setCountVideo(state, action: PayloadAction<number>) {
            state.countVideo = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(SearchVideo.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(SearchVideo.fulfilled, (state, action) => {
            state.status = 'success'
            state.item = action.payload

        })
        builder.addCase(SearchVideo.rejected, (state) => {
            state.status = 'error'
        })
    }
    // extraReducers: {
    //     [SearchVideo.pending]: (state, action) => {
    //         state.status = 'loading'
    //     },
    //     [SearchVideo.fulfilled]: (state, action) => {
    //         state.status = 'success'
    //         state.item = action.payload

    //     },
    //     [SearchVideo.rejected]: (state, action) => {
    //         state.status = 'error'
    //     },
    // }
})

export const SearchDelector = (state: RootState) => state.search

export const { getSearch, getSearchValue, setSortType, setCountVideo } = SearchSlise.actions
export default SearchSlise.reducer

