import { configureStore } from "@reduxjs/toolkit";
import counter from '../counterSlice'
import  cartReducer  from "../cartSlice";
import todosReducer from '../todoSlice';
import filterReducer from '../filterSlice'
export const store = configureStore({
    reducer:{
        counter:counter,
        cart:cartReducer,
        todos: todosReducer,
        filter: filterReducer,

    }
})