import React, { useState } from 'react'
import { Button, Container, List, ListItem, ListItemText, TextField } from '@mui/material'
import { addTodo } from '../redux/todoSlice'
import { useSelector, useDispatch } from 'react-redux'
const TodoList = () => {
    const [input, setInput] = useState('')
    const todos = useSelector(state=>state.todos)
     const dispatch = useDispatch();
    const handleAdd=()=>{
        if (input.trim()!==""){
            dispatch(addTodo(input))
            StepContext('')
        }
    }
  return (
    <Container>
        <TextField label="New Todo " value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=>{if(e.key=="Enter") handleAdd();}}></TextField>
        <Button onClick={handleAdd}>Add Todo</Button>
        
        <List>
            {todos.map(todo=>(
                <ListItem key={todo.id}>
                    <ListItemText>{todo.text}</ListItemText>
                </ListItem>
            ))}
        </List>

    </Container>
  )
}

export default TodoList