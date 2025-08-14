import React from 'react'
import Counter from './components/counter'
import Navbar from './components/Navbar'
import Cart from './components/cart'
import Product from './components/Product'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import TodoList from './components/TodoList'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
 
  return (
    // <Router>
    //   <Navbar></Navbar>
    //   <Routes>
    //     <Route path="/" element={<Product></Product>}></Route>
    //     <Route path="/cart" element={<Cart></Cart>}></Route>

    //   </Routes>
      
      
    // </Router>
    <ThemeProvider theme={theme}>
       <TodoList></TodoList>
    </ThemeProvider>
   
  )
}

export default App