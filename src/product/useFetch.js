import { useEffect, useState } from "react"
import Product from "./Product"



const useFetch =(endpoint) =>{
    const [data , setData]=useState(null)
    const [loading, setLoading]= useState(true);
    const [error, setError]= useState(null);
    // const [setProduct]=useState('');
//     useEffect(() => {
//       const fetchProductData = async () => {
//     try {
//         const response = await fetch(`/api/products/${Product}`);
//         const productData = await response.json();
//         setProduct(productData);
//       } catch (err) {
//         console.error("Error fetching product data:", err);
//       }
//     };
//     fetchProductData();
//   }, []);
    
    useEffect(()=>{
        const fetchData =async ()=>{
            try{
                const response = await fetch(endpoint);
        const result = await response.json();
        setData(result);
        setLoading(false); 
    } catch (err) {
        setError(err);
        setLoading(false);
      }
        };
        fetchData();
    },[endpoint]);
    return {data, loading, error};
    useEffect( async () =>{
        item ()
    },[endpoint])
    const item =async () => {
        const res =await item(endpoint)
        setData(res)
    }
    return data
}
export default useFetch;