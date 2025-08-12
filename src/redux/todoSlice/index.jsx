import { createSlice, nanoid } from '@reduxjs/toolkit';


export const todoSlice = createSlice({
    name:'todo',
    initialState:[],
    reducers:{
        addTodo: {
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(text){
                return {
                    payload:{
                        id:nanoid(),
                        text,
                        completed: false,

                    }
                }
            }
          
        }

    }
})
export const {addTodo} = todoSlice.actions
export default todoSlice.reducer;
