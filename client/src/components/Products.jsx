import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Products = ({category, n, page, minPrice, maxPrice}) => {
    const [prod, setProd] = useState([]);
    useEffect(()=>{
        // console.log(minPrice);
        axios.get(`http://localhost:3000/categories/${category}/products?n=${n}&minPrice=${minPrice}&maxPrice=${maxPrice}`).
        then(res=>{
            setProd(res.data);}).catch(err =>{console.log(err)});
        // setProd(res);
        // console.log(prod);
    }, [])
  return (
    <div className='flex flex-wrap w-screen m-8'>
        {prod.map(element => <Product productName={element.productName} price={element.price} rating={element.rating} discount={element.discount} availability={element.availability}/>)}
    </div>
  )
}


const Product = ({productName, price, rating, discount, availability})=>{
    return(
        <div className=" grid col-span-1 m-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-white">
            <h4>Product name: {productName}</h4>
            <h4>Price: {price}</h4>
            <h4>Rating: {rating}</h4>
            <h4>Discount: {discount}</h4>
            <h4>Availability: {availability}</h4>
        </div>
    )
}
export default Products;