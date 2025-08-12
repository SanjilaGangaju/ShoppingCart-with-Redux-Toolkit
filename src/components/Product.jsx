import React from 'react'
import { Products } from '../data'
import { useSelector, useDispatch } from 'react-redux'
import {addToCart, selectCartItems} from "../redux/cartSlice"
 import { ToastContainer, toast, Bounce } from 'react-toastify';
const Product = () => {
   const cartItems = useSelector(selectCartItems)
   console.log(cartItems)
  const dispatch = useDispatch();
 
 
  
  const handleAddToCart = (item)=>{
       dispatch(addToCart(item))
       toast('🦄 Item added to cart!', {position: "top-right",
autoClose: 200,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});

  }
  return (
    <div>
      <ToastContainer/>
      <div className="container">
        <div className="row">
      
          {Products.map((item)=>(
            <div key={item.id} className="container col-md-4">
              <div className="card" style={{width: '18rem'}}>
  <img src={item.imgSrc} className="card-img-top" alt="no image"/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description}</p>
    <a href="#" className="btn btn-primary" onClick={()=>handleAddToCart(item)}>Add to Cart</a>
  </div>
</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product