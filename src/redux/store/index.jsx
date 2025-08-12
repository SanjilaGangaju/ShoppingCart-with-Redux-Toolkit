import { configureStore } from "@reduxjs/toolkit";
import counter from '../counterSlice'
import  cartReducer  from "../cartSlice";
import todosReducer from '../todoSlice'
export const store = configureStore({
    reducer:{
        counter:counter,
        cart:cartReducer,
        todos: todosReducer,

    }
})