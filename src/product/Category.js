import React from 'react'
import '../product/csscode/Category.css';
import ct1 from '../product/csscode/pics/ct1.webp'
import ct2 from '../product/csscode/pics/ct2.jpg'
import ct3 from '../product/csscode/pics/ct3.webp'
import ct4 from '../product/csscode/pics/ct4.webp'
import ct5 from '../product/csscode/pics/ct5.webp'
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

export default function Category() {
    const {id} =useParams();
    const {data} = useFetch(`Product/item=*&[filters][cate]`)
    // const navigate =useNavigate();
  return (
   <div class="shop-by-bycategory">
    <div class="categories">
        <div class="category" >
            <img src={ct1} alt=''/>
        </div>
        <div class="category">
            <img src={ct2} alt=''/>
        </div>
        <div class="category">
            <img src={ct3} alt=''/>
        </div>
        <div class="category">
            <img src={ct4} alt=''/>
        </div>
        <div class="category">
            <img src={ct5} alt=''/>
        </div>
    </div>
   </div>
  )
}
