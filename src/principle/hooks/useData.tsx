import { useEffect, useState,useCallback } from 'react';
import axios from 'axios'

export const ApiData = () => {
const [products, setProducts] = useState([])

const getProduct = useCallback(async() => {
    try {
        const {data} = await axios.get("https://fakestoreapi.com/products");
        setProducts(data)
    } catch (error) {
        console.log(error)
    }
}, []);

useEffect(()=>{
    getProduct();
},[getProduct]);

  return {products}
}
