import { configureStore } from "@reduxjs/toolkit";
import counter from '../counterSlice'
import  cartReducer  from "../cartSlice";
export const store = configureStore({
    reducer:{
        counter:counter,
        cart:cartReducer,

    }
})