import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
}


const UserSlise = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state, action) {
            state.email = null;
            state.token = null;
            state.id = null;
        }
    }
})

export const { setUser, removeUser } = UserSlise.actions;
export default UserSlise.reducer;