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
          
        },
        toggleCompleted:{
            reducer(state, action){
                const todo = state.find(t=>t.id == action.payload);
                if(todo){
                    todo.completed = !todo.completed;
                }
            }
        },
        

    }
})
export const {addTodo, toggleCompleted} = todoSlice.actions
export default todoSlice.reducer;
