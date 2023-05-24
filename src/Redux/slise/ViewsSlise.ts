import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";


// const api_key = `AIzaSyBGiRuZ-YJLoo3fiRHxoWpwZKiZpOXDufw`
const api_key = `AIzaSyBQ_CVy1nc8t2YebofCtvFS135p6tolsJM`
type paramsType = {
    items: string[]
}

export const GetViewsCount = createAsyncThunk(
    'views/GetViewsCount',
    async function (params: paramsType) {
        const { items } = params
        const ids = items.join(',')
        const { data } = await axios.get<VievsType[]>(`https://www.googleapis.com/youtube/v3/videos?key=${api_key}&part=snippet,statistics&id=${ids}`)
        return data as VievsType[]
    }
)

type snippetType = {
    title: string;
    channelTitle: string;

}
type statisticsType = {
    viewCount: string
}
type vievsDetailType = {
    id: string;
    snippet: snippetType;
    statistics: statisticsType
}

type VievsType = {
    items: vievsDetailType[]
}
type ItemsType = {
    items: string[]
}

export enum Status {
    Loading = 'loading',
    Succsess = 'success',
    Error = 'error',
}

interface initialStateType {
    views: VievsType[];
    items: ItemsType[];
    status: Status,
}

const initialState: initialStateType = {
    views: [],
    items: [],
    status: Status.Loading ,
}

const ViewsSlise = createSlice({
    name: 'views',
    initialState,
    reducers: {
        setViews(state, action) {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetViewsCount.pending, (state) => {
            state.status = Status.Loading
        })
        builder.addCase(GetViewsCount.fulfilled, (state, action) => {
            state.status = Status.Succsess
            state.views = action.payload

        })
        builder.addCase(GetViewsCount.rejected, (state) => {
            state.status = Status.Error
        })

    }
    // extraReducers: {
    //     [GetViewsCount.pending]: (state, action) => {
    //         state.status = 'loading'
    //     },
    //     [GetViewsCount.fulfilled]: (state, action) => {
    //         state.status = 'success'
    //         state.views = action.payload

    //     },
    //     [GetViewsCount.rejected]: (state, action) => {
    //         state.status = 'error'
    //     },
    // }
})

export const VieasSelector = (state: RootState) => state.views

export const { setViews } = ViewsSlise.actions;
export default ViewsSlise.reducer;