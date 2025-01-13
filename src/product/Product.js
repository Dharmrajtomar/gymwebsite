import React from "react";
import "../product/csscode/Product.css";
import a1 from "../product/csscode/pics/b.jpg";
import a2 from "../product/csscode/pics/background.jpg";
import a3 from "../product/csscode/pics/p1.jpg";
import a4 from "../product/csscode/pics/p2.jpg";
import a5 from "../product/csscode/pics/p3.webp";
import a6 from "../product/csscode/pics/p4.webp";
import a7 from "../product/csscode/pics/p5.webp";
import { Link, useNavigate } from "react-router-dom";

const item = [
  { id: 1, title: "body product", img: a1, price: 344 },
  { id: 2, title: "jumping", img: a2, price: 342 },
  { id: 3, title: "lonchar", img: a3, price: 123 },
  { id: 4, title: "fitness", img: a4, price: 876 },
  { id: 5, title: "oil", img: a5, price: 461 },
  { id: 6, title: "capsule", img: a6, price: 984 },
  { id: 7, title: "monalysis", img: a7, price: 121 },
  { id: 8, title: "neutreens", img: a1, price: 543 },
  { id: 9, title: "proteen", img: a2, price: 652 },
  { id: 10, title: "clostrole item", img: a3, price: 908 },
  { id: 11, title: "fitness product", img: a4, price: 9765 },
  { id: 12, title: "copys", img: a5, price: 123 },
  { id: 13, title: "tofys", img: a6, price: 654 },
  { id: 14, title: "body product", img: a7, price: 153 },
];
export default function Product(id) {
  // const navigate =useNavigate();
  // const handleNavigate=()=>{
  // navigate('/singleproduct')
  // }

  return (
    <div className="product-card">
      {item.map((item) => (
        <div key={item.id} className="product-item1">
          <div className="thumbnail">
            <Link to={`/singleproduct/${item.id}`} className="thumbnail">
              <img className="product-img" src={item.img} alt={item.title} />
            </Link>
          </div>
          <div class="prd-details">
            <span className="name">{item.title}</span>
            <span className="price">&#8377;{item.price}</span>
            <Link to="/"></Link>
          </div>
        </div>
      ))}
    </div>
  );
}
