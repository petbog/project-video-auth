import { createSlice } from "@reduxjs/toolkit";

// const UserLC = JSON.parse(localStorage.getItem('user'))


// const initialState = {
//     email: null || UserLC.email ,
//     token: null || UserLC.token  ,
//     id: null || UserLC.id  ,
// }

const initialState = {
    email: '' ,
    token: '' ,
    id: '' ,
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
        setUserLC(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state, action) {
            state.email = '';
            state.token = '';
            state.id = '';
        }
    }
})

export const { setUser, removeUser,setUserLC } = UserSlise.actions;
export default UserSlise.reducer;