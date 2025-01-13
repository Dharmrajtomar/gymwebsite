import React, { useContext, useEffect, useState } from 'react'
import '../product/csscode/PHeader.css'
import { Link, useNavigate } from 'react-router-dom'
import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import Cart from './Cart';
import Banner from './Banner';
import Newsletter from './Newsletter';
import PFooter from './PFooter';
import Category from './Category';
import Product from './Product';
import SingleProduct from './SingleProduct';
import { Context } from './Context';
import Search from './Search';


export default function PHeader() {

    const [scrolled, setScrolled]=useState(false);
    const [showCart, setShowCart]=useState(false);
    const {cartCount} =useContext(Context);
    const [showSearch, setShowSearch]=useState(false);
    // const {cartCount} =useContext(Context);
    const navigate = useNavigate();
    const handleScroll= () => {
        const offset=window.scrollY;
        if (offset > 100){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }
     
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)

    },[]);

  return (
    <>
         <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
        <div class="header-content">
            <ul className='left'>
                <li onClick={()=> navigate("/")} >home </li>
                <li>about</li>
                <li>categories</li>
            </ul>
            <div class="center" onClick={()=> navigate("/")} > PRINCE-PRODUCT</div>
            <div class="right">
                <TbSearch  onClick={()=>setShowSearch(true)}/>
                <AiOutlineHeart />
                <span className='cart-icon' onClick={()=>setShowCart(true)}>
                    <CgShoppingCart />
                    {/* <span>{cartCount}</span> */}
                  {!!cartCount && <span>{cartCount}</span> }

                </span>
            </div>
        </div>
    </header>
    {showCart && <Cart setShowCart={setShowCart}/>}
    
   { showSearch && <Search setShowSearch={setShowSearch}/>} 
      </>
  )
}
