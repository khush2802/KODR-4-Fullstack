import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router';

const Product = () => {
     console.log("prod componennt rendered");

     let data = useLoaderData();
     console.log(data);
     
  return (
    <div>
      <h1>Products Page</h1>
    </div>
  )
}

export default Product
