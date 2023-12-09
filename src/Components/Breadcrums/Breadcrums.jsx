import React from 'react'
import"./breadcrums.css";
import arrIcon from "../Assets/breadcrum_arrow.png"
const Breadcrums = (props) => {
    const{product}=props;
  return (
    <div className="Breadcrums">
        HOME <img src={arrIcon} alt="" />
        SHOP <img src={arrIcon} alt="" />
        {product?.category} 
        <img src={arrIcon} alt="" />
        {product.name}
    </div>
  )
}

export default Breadcrums