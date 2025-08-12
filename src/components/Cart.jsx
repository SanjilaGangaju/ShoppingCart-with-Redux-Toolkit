import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {clearCart, selectCartItems} from "../redux/cartSlice"
 import { ToastContainer, toast, Bounce } from 'react-toastify';
const Cart = () => {
const dispatch = useDispatch()
 const cartItems = useSelector(selectCartItems);

  return (
    <div>
      <ToastContainer></ToastContainer>
      {cartItems.length==0&&(<><div>No items added to cart</div></>)}
      {cartItems.map(item=>( <div  key={item.id} className="card mb-3" style={{width: "540px"}}>

  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        <button>Buy Now</button>
      </div>
    </div>
  </div>
</div>))}
          {cartItems.length!=0&&(<>
                   <button onClick={()=>{dispatch(clearCart())
                    toast('🦄 cart cleared!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
                   }} className="btn btn-warning">Clear Cart</button>

          </>)}
    </div>
  )
}

export default Cart