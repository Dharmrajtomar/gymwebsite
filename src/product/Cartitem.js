import React, { useContext } from "react";
import i from "../product/csscode/pics/nbgitem1.png";
import { MdClose } from "react-icons/md";
import "../product/csscode/Cartitem.css";
import { Context } from "./Context";

export default function CartItem() {
  const { cartItems, handleAddToCart, handleRemoveFromCart,handleCartProductQuantity} = useContext(Context);
  

  //  this lin change me

  // export default function CartItem({ item, handleRemoveFromCart, handleCartProductQuantity }) {
  // const { CartItems, handleRemoveFromCart, handleCartProductQuantity } =
    // useContext(Context);

  return (
    
    <div className="cart-products">
     {cartItems.map((item) => (
        <div key={item.id} class="cart-product">
          <img src={item.img} alt={item.title} className="img-container"/>
          {/* <div class="img-container">
            <img src={i} alt="" />
          </div> */}
          <div class="prod-details">
            <span className="name">{item.title}</span>
            <MdClose
              className="close-btn"
              onClick={() => handleRemoveFromCart(item)}
            />
            <div class="quantity-buttons">
              <span onClick={() => handleCartProductQuantity("dec", item)}>
                -
              </span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProductQuantity("inc", item)}>
                +
              </span>
            </div>
            <div class="text"></div>
            <span>{item.attributes.quantity}</span>
            <span>x</span>
            <span className="highlight">
              &#8377;{item.price * item.attributes.quantity}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
