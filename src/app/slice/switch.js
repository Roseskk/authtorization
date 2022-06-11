import {createSlice} from "@reduxjs/toolkit";

export const  switchSlice = createSlice({
    name: 'switcher',
    initialState: {
        value: false,
    },
    reducers: {
        signIn: (state)=>{
            state.value = !state.value
        },
    }
})

export const {signIn} = switchSlice.actions;

export default switchSlice.reducer;