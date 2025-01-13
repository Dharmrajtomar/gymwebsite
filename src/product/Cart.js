import React, { useContext, useEffect, useState } from 'react'
// import '../Csscode/Cart.css'
import { BsCartX } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import '../product/csscode/Cart.css'
import CartItem from './Cartitem';
import { Context } from './Context';
import { Link } from 'react-router-dom';

export default function Cart({setShowCart}) {
  const {cartItems, cartSubTotal,setCartSubTotal}= useContext(Context);
  return (
    
    <div className='cart-panel'>
        <div class="opac-layer"></div>
        <div class="cart-content">
            <div class="cart-header">
                <span className='heading'>Shopping Cart</span>
                <span className='close-btn'onClick={()=> setShowCart(false)} >
                    <MdClose/>
                    <span className='text'> close</span>
                </span>

            </div>

            {!cartItems?.length &&   <div class="empty-cart"> 
                  <BsCartX/>
                  <span>No products in the cart.</span>
                  <button className='return-cta'> <Link className='cart-link' to='/'> RETURN TO Home </Link> </button>
              </div>}
              {/* </div> */}
              
              
             {!!cartItems?.length &&  <>
              

              <CartItem/>
              <div class="cart-footer">
                <div class="subtotal">
                  <span className='text'>Subtotal:</span>
                  <span className='text total'>&#8377;{cartSubTotal}</span>
                </div>
                <div class="button">
                  <button className='checkout-cta'>checkout</button>
                </div>
              </div>
              </>}

             </div>
      
         </div>






  )
}
