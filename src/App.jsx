import React from 'react'
import Counter from './components/counter'
import Navbar from './components/Navbar'
import Cart from './components/cart'
import Product from './components/Product'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
const App = () => {
 
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Product></Product>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>

      </Routes>
      
      
    </Router>
  )
}

export default App