import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialTodo = JSON.parse(localStorage.getItem("todos"))||[];
export const todoSlice = createSlice({
    name:'todo',
    initialState:initialTodo,
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
    editTodo: (state,action)=>{
        const {id, newText} = action.payload;
        const todos = state.find(todo=>todo.id===id);
         if (todos){
            todos.text=newText;
         }
    }
  
}
});
export const {addTodo, toggleCompleted, deleteTodo, editTodo} = todoSlice.actions
export default todoSlice.reducer;
