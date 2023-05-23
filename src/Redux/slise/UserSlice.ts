import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";


interface initialStateType {
    email: string;
    token: string;
    id: string;
}
const initialState: initialStateType = {
    email: '',
    token: '',
    id: '',
}
const UserSlise = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<initialStateType>) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        setUserLC(state, action: PayloadAction<initialStateType>) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = '';
            state.token = '';
            state.id = '';
        }
    }
})


export const UserSelector = (state: RootState) => state.user



export const { setUser, removeUser, setUserLC } = UserSlise.actions;
export default UserSlise.reducer;