import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import '../product/csscode/Search.css'
import { useNavigate } from 'react-router-dom';
import useFetch from './useFetch';
export default function Search({setShowSearch}) {
    const [query, setQuery] =useState(' ')
    const navigate = useNavigate()
   

    
    const {data, loading, error }=useFetch(`./SingleProduct/products?populate=*&filters[title][$contains]=${query}`);
    const  onChange =(e)=>{
      setQuery(e.target.value);
    };
    const handleItemClick = (productId) => {
      navigate(`/product/${productId}`);
      setShowSearch(false);
    };
  
    if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error fetching data</div>;
    
  return (
    <div className='search-modal'>
       <div class="form-field">
        {/* <input type="text" autoFocus placeholder='search for products'value={query} onChange={onchange} /> */}
        <input type="text" autoFocus placeholder='search for products' value={query} onChange={onChange} />

        <MdClose onClick={()=>setShowSearch(false)}/>
       </div>
       <div class="search-result-content">
        <div class="search-results">

          {data && data.item && data.item.length>0 ?(
              data.item.map(item =>(
            <div key={item.id} class="search-result-item" onClick={()=> handleItemClick(item.id)} >
            <div class="img-container">
             <img src={item.img} alt={item.title}/>
            </div>
            <div class="prod-details">
                <span className='name'> {item.title}</span>
                <span className='desc'>{item.desc}</span>
               
               
            </div>
        </div>

          ))
        ):(
          <div>No product found</div>
        )
        }
            
       </div>
    </div>
    </div>
  );
}

