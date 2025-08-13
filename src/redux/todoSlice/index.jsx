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
                  console.log('State before mutation:', JSON.parse(JSON.stringify(state)));
                const todo = state.find(t=>t.id == action.payload);
                if(todo){
                    todo.completed = !todo.completed;
                }
                 console.log('State after mutation:', JSON.parse(JSON.stringify(state)));

            }
        },
        deleteTodo(state,action){
            
          
                return state.filter(todo=>todo.id !== action.payload);

        

    },
  
}
});
export const {addTodo, toggleCompleted, deleteTodo} = todoSlice.actions
export default todoSlice.reducer;
