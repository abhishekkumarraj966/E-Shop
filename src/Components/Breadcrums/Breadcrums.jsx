import React from 'react'
import"./breadcrums.css";
import arrIcon from "../Assets/breadcrum_arrow.png"
const Breadcrums = ({product}) => {

  return (
    <div className="Breadcrums">
<<<<<<< HEAD
        HOME <img src={arrIcon} alt="" />
        SHOP <img src={arrIcon} alt="" />
        {product?.category} 
        <img src={arrIcon} alt="" />
        {product.name}
=======
        HOME <img src={arrIcon} alt="" />SHOP <img src={arrIcon} alt="" />{product?.category} <img src={arrIcon} alt="" />{product?.name}
>>>>>>> decb525ae0c53a5f7c835991f91a4b5604ab2f23
    </div>
  )
}

export default Breadcrums