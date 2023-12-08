import { useContext } from 'react';
import React from 'react'
import { useParams } from 'react-router';
import{ShopContext} from "../Context/ShopContext"
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const { all_product } = useContext(ShopContext);
 const {productId}=useParams();
 const product=all_product.find((e)=>e.id===Number(productId));
  return (
  <div className="">
    <Breadcrums product={product}/>
    <ProductDisplay product={product}/>
  </div>
  )
}

export default Product