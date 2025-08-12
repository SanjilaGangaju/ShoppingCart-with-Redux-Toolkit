import React from 'react'
import { useSelector } from 'react-redux'
import {selectCartItems, selectCartTotalPrice} from "../redux/cartSlice"
import { Link } from 'react-router-dom';
const Navbar = () => {
  
     const cartItems = useSelector(selectCartItems);
     const totalPrice = useSelector(selectCartTotalPrice);
     console.log(cartItems)
  return (
    <div className='nav_bar'>
        <div className="left">Redux-Toolkit</div>
         <div className="middle">Cart items Total Price = {totalPrice}</div>
         <Link to='/cart' className="right">Cart {cartItems.length}</Link>
    </div>
  )
}

export default Navbar