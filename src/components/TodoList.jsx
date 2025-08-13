import React, { useState } from 'react'
import { AppBar, Button, ButtonGroup, Checkbox, Container, List, ListItem, ListItemText, Paper, TextField, Toolbar, Typography } from '@mui/material'
import { addTodo, toggleCompleted, deleteTodo} from '../redux/todoSlice'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../redux/filterSlice'
const TodoList = () => {
    const [input, setInput] = useState('')
    const filter = useSelector(state=>state.filter)
    const todos = useSelector(state=>state.todos)

    const filteredTodos = todos.filter(todo=>{
        if (filter==='active') return !todo.completed;
        if (filter==='completed') return todo.completed;

        return true;
    });
     const dispatch = useDispatch();
    const handleAdd=()=>{
        if (input.trim()!==""){
            dispatch(addTodo(input))
        
        }
        setInput("");
    }
  return (
    <>
    {/* Header */}
       <AppBar>
          <Toolbar>
            <Typography variant="h6">My To-Do List</Typography>
          </Toolbar>
       </AppBar>

       {/* Main Content */}
       <Container maxWidth="sm" style={{marginTop:"5rem"}}>
        <Paper style={{ padding:"1rem"}}>
         
        <div style={{display:"flex", gap:"1rem", alignItems:"center", justifyContent:"center", marginBottom:"1rem"}}>
            <ButtonGroup>
             <Button  variant={filter==='completed' ? "contained":"outlined"}onClick={()=>dispatch(setFilter("completed"))}>Completed</Button>
             <Button  variant={filter ==='active' ? "contained": "outlined"} onClick={()=>dispatch(setFilter("active"))}>Active</Button>
             <Button variant ={filter==='all'?"contained": "outlined"} onClick={()=>dispatch(setFilter('all'))}>All</Button>
            </ButtonGroup>
        </div>
        <div style={{display:"flex", alignItems:"center", gap:"1rem", marginBottom:"1rem"}}>
              <TextField  variant="outlined"  fullWidth label="New Todo " value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=>{if(e.key==="Enter") handleAdd();}}></TextField>
              <Button variant="contained"  color="primary" onClick={handleAdd}>Add</Button>
        </div>
         {/* Task List*/}
       
        <List>
            {filteredTodos.map(todo=>(
                <ListItem key={todo.id} >
                    <Checkbox checked={todo.completed} onChange={()=>dispatch(toggleCompleted(todo.id))}></Checkbox>

                    <ListItemText primary={todo.text} sx={{textDecoration: todo.completed?"line-through": "none"}}>
                    </ListItemText>
                    <Button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete Todo</Button>

                </ListItem>
            ))}
        </List>
            
        </Paper>
       

    </Container>
    </>
 
  )
}

export default TodoList