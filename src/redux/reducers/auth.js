import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: ''
    },
    reducers: {
        saveUser: (state, action) => {
            state.user = action.payload
        }
    }
})
export const { saveUser } = authSlice.actions

export default authSlice.reducer