import React, { useContext, useState } from "react";
import "../product/csscode/SingleProduct.css";
import p5 from "../product/csscode/pics/p5.webp";
import { FaCartPlus, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { Context } from "./Context";

import a1 from "../product/csscode/pics/b.jpg";
import a2 from "../product/csscode/pics/background.jpg";
import a3 from "../product/csscode/pics/p1.jpg";
import a4 from "../product/csscode/pics/p2.jpg";
import a5 from "../product/csscode/pics/p3.webp";
import a6 from "../product/csscode/pics/p4.webp";
import a7 from "../product/csscode/pics/p5.webp";
import Product from "./Product";
import Newsletter from "./Newsletter";
import PFooter from "./PFooter";

const products = [
  {
    id: 1,
    title: "body product",
    img: a1,
    price: 344,
    description: "A great product for your body care.",
    attributes : {
      quantity : []
    }
  },
  {
    id: 2,
    title: "jumping",
    img: a2,
    price: 342,
    description: "A great product for your body care.",
    attributes : {
      quantity : []
    }
  },
  {
    id: 3,
    title: "lonchar",
    img: a3,
    price: 123,
    description: "A great product for your body care.",
     attributes : {
      quantity : []
    }
  },
  {
    id: 4,
    title: "fitness",
    img: a4,
    price: 876,
    description: "A great product for your body care.",
     attributes : {
      quantity : []
    }
  },
  {
    id: 5,
    title: "oil",
    img: a5,
    price: 461,
    description: "A great product for your body care.",
    attributes : {
      quantity : []
    }
  },
  {
    id: 6,
    title: "capsule",
    img: a6,
    price: 984,
    description: "A great product for your body care.",
    attributes : {
      quantity : []
    }
  },
  {
    id: 7,
    title: "monalysis",
    img: a7,
    price: 121,
    description: "A great product for your body care.",
     attributes : {
      quantity : []
    }
  },
  {
    id: 8,
    title: "neutreens",
    img: a1,
    price: 543,
    description: "A great product for your body care.",
     attributes : {
      quantity : []
    }
  },
  {
    id: 9,
    title: "proteen",
    img: a2,
    price: 652,
    description: "A great product for your body care.",
    attributes : {
      quantity : []
    }
  },
  {
    id: 10,
    title: "clostrole item",
    img: a3,
    price: 908,
    description: "A great product for your body care.",
     attributes : {
      quantity : []
    }
  },
  {
    id: 11,
    title: "fitness product",
    img: a4,
    price: 9765,
    description: "A great product for your body care.",
     attributes : {
      quantity : []
    }
  },
  {
    id: 12,
    title: "copys",
    img: a5,
    price: 123,
    description: "A great product for your body care.",
    attributes : {
      quantity : []
    }
  },
  {
    id: 13,
    title: "tofys",
    img: a6,
    price: 654,
    description: "A great product for your body care.",
     attributes : {
      quantity : []
    }
  },
  {
    id: 14,
    title: "body product",
    img: a7,
    price: 153,
    description: "A great product for your body care.",
     attributes : {
      quantity : []
    }
  },
]
export default function SingleProduct() {
  const { id } = useParams();
  // const {handleAddToCart}=useContext(Context);
  const [quantity, setQuantity] = useState(1);
  const [cartItem , setCartItem] = useState([]);
  const {handleAddToCart} = useContext(Context)
  // const {cartItems, setCartItems}= useContext(Context)



  // const { handleAddToCart } = useContext(Context);
  // const { handleAddToCart } =useContext(Context);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;
  // const { data } useFetcher()

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
    console.log(quantity);
  };
  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

 

  // const handleAdd =() => {
  //   handleAddToCart(product,quantity);
  // };

  //   const handleCartProductQuantity= ( type , product) => {
  //     let items =[...cartItems];
  //     let index =items.findIndex((p)=>p.id === product.id);
  //     if (index !== -1) {
  //     if (type === 'inc'){
  //         items[index].attributes.quantity += 1;
  //     } else if(type ==='dec' ){
  //         // if(items[index].attributes.quantity=== 1) return;
  //         if (items[index].attributes.quantity > 1) {
  //         items[index].attributes.quantity -= 1;

  //     }
  // }
  // // setCartItems(items);
  // }
  // };
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={product.img} alt={product.name} />
          </div>
          <div class="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8377;{product.price}</span>
            <span className="desc">{product.description}</span>

            <div class="cart-buttons">
              <div class="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product, quantity)}
              >
                {" "}
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:
                {/* <span>Hand Dumble</span> */}
                <span>{product.category}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebook size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedin size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="sin-relay"></div>
    </div>
  );
}
