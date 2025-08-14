import React, { useEffect, useState } from 'react'
import { AppBar, Button, ButtonGroup, Checkbox, Container, List, ListItem, ListItemText, Paper, TextField, Toolbar, Typography } from '@mui/material'
import { addTodo, toggleCompleted, deleteTodo, editTodo} from '../redux/todoSlice'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../redux/filterSlice'
import {motion, AnimatePresence} from "framer-motion";
import { ToastContainer, toast, Slide } from 'react-toastify';
const TodoList = () => {
    const MotionButton = motion(Button)
     const notify = () => toast.error('Todo Deleted', {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Slide,
});
   const notifyAdd = () => toast.success('Todo Added', {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Slide,
});
    const [input, setInput] = useState('')
    const filter = useSelector(state=>state.filter)
    const todos = useSelector(state=>state.todos)
    const [editingId, seteditingId]= useState(null);
    const [editText, seteditText] = useState("");
     useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
    const filteredTodos = todos.filter(todo=>{
        if (filter==='active') return !todo.completed;
        if (filter==='completed') return todo.completed;

        return true;
    });
     const dispatch = useDispatch();
    const handleAdd=()=>{
        if (input.trim()!==""){
            
            dispatch(addTodo(input));
           
            notifyAdd();
           
        
        }
        setInput("");
    }
    const handleEdit=(id, text)=>{
        seteditingId(id);
        seteditText(text);
    }
    const handleEditAdd=()=>{
        console.log(editingId, editText)
        dispatch(editTodo({id:editingId, newText:editText}))
        seteditText(null);
        seteditingId(null);


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
              
              <MotionButton whileHover={{scale:1.05}}   whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }} variant="contained"  color="primary" onClick={handleAdd}>Add</MotionButton>

        </div>
         {/* Task List*/}
       
        <List>
            <AnimatePresence>
            {filteredTodos.map(todo=>(
                <motion.li
  key={todo.id}
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 20 }}
  transition={{ duration: 0.3 }}
  style={{ listStyle: "none" }}
>
      <ListItem key={todo.id} >
                    <Checkbox checked={todo.completed} onChange={()=>dispatch(toggleCompleted(todo.id))}></Checkbox>
                     {todo.id==editingId?(<>
                      <div style={{display:"flex", gap:10}}>
                        <TextField  variant="outlined"  fullWidth value={editText} onChange={(e)=>seteditText(e.target.value)} onKeyDown={(e)=>{if(e.key==="Enter") handleEditAdd();}}></TextField>

                        <Button onClick={() => seteditingId(null)}>Cancel</Button>

                          <Button variant="contained"  color="warning" onClick={()=>handleEditAdd} >Save</Button>
 
                      </div>
 
                     </>):
                      (<><ListItemText primary={todo.text} sx={{textDecoration: todo.completed?"line-through": "none"}}></ListItemText>
                       <div style={{display:"flex", gap:10}}>
                         <Button variant="contained" color="error" onClick={()=>{
                        dispatch(deleteTodo(todo.id));
                        notify() }}>Delete Todo</Button>
                          <Button variant="contained"  color="warning" onClick={()=>handleEdit(todo.id, todo.text)} >Edit</Button>
 
                      </div>
                    </>
                    )}
                   
                   
                   
                </ListItem>
</motion.li>
              
            ))}
               <ToastContainer position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Slide}
/>
</AnimatePresence>
      
  </List>
            
        </Paper>
       

    </Container>
    </>
 
  )
}

export default TodoList