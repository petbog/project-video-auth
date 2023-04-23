import { createSlice } from "@reduxjs/toolkit";

// const UserLC = JSON.parse(localStorage.getItem('user'))

// const initialState = {
//     email: null || UserLC.email,
//     token: null || UserLC.token,
//     id: null || UserLC.id,
// }

const initialState = {
    email: null ,
    token: null ,
    id: null ,
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