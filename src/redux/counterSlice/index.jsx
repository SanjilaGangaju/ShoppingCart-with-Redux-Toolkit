import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name:'counter',
    initialState:10,
    reducers:{
        increaseby1: (state)=>state+1,
        decreaseby1: (state)=>state-1,                    
    }
})
export const {increaseby1, decreaseby1} = counterSlice.actions
export default counterSlice.reducer