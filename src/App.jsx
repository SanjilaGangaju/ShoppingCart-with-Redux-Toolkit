import React, { useContext } from 'react'
import Counter from './components/counter'
import Navbar from './components/Navbar'
import Cart from './components/cart'
import Product from './components/Product'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import TodoList from './components/TodoList'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme, lightTheme, darkTheme } from './theme'
import 'react-toastify/dist/ReactToastify.css';
import { darkModeContext } from './context/darkModeContext'
const App = () => {
  const {isdarkOn} = useContext(darkModeContext)
  return (
    // <Router>
    //   <Navbar></Navbar>
    //   <Routes>
    //     <Route path="/" element={<Product></Product>}></Route>
    //     <Route path="/cart" element={<Cart></Cart>}></Route>

    //   </Routes>
      
      
    // </Router>
    <ThemeProvider theme={isdarkOn? darkTheme: lightTheme}>
      <CssBaseline>
        <TodoList></TodoList>
      </CssBaseline>
       
    </ThemeProvider>
   
  )
}

export default App