import React from "react";
import "./productDisplay.css";
import stricon from"../Assets/star_icon.png";
import str_dull_icon from"../Assets/star_dull_icon.png";
const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="ProductDisplay">
      <div className="ProductDisplay-left">
        <div className="ProductDisplay-img-list">
          <img src={product?.image} alt="" />
          <img src={product?.image} alt="" />
          <img src={product?.image} alt="" />
          <img src={product?.image} alt="" />
        </div>
        <div className="ProductDisplay-img">
            <img  className=".ProductDisplay-main-img" src={product?.image} alt="" />
        </div>
      </div>
      <div className="ProductDisplay-right">
        <h1>{product?.className}</h1>
        <div className="ProductDisplay-right-start">
            <img src={stricon} alt="" />
            <img src={stricon} alt="" />
            <img src={stricon} alt="" />
            <img src={stricon} alt="" />
            <img src={str_dull_icon} alt="" />
            <p>(205)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
