import React from "react";
import "./productDisplay.css";
import stricon from"../Assets/star_icon.png";
import str_dull_icon from"../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;
   const {addToCard}=useContext(ShopContext)
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
            <img  className="ProductDisplay-main-img" src={product?.image} alt="" />
        </div>
      </div>
      <div className="ProductDisplay-right">
        <h1>{product?.name}</h1>
        <div className="ProductDisplay-right-start">
            <img src={stricon} alt="" />
            <img src={stricon} alt="" />
            <img src={stricon} alt="" />
            <img src={stricon} alt="" />
            <img src={str_dull_icon} alt="" />
            <p>(205)</p>
        </div>
        <div className="ProductDisplay-right-prices">
          <div className="ProductDisplay-right-prices-old">${product.old_price}</div>
          <div className="ProductDisplay-right-prices-new">${product.new_price}</div>
        </div>
        <div className="ProductDisplay-right-description">
        A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
        </div>
        <div className="ProductDisplay-right-size">
          <h1>Select Size</h1>
          <div className="ProductDisplay-right-sizes">
              <div className="">S</div>
              <div className="">M</div>
              <div className="">L</div>
              <div className="">XL</div>
              <div className="">XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCard(product.id)}}>ADD TO CART</button>
        <p className="ProductDisplay-right-category"><span>Category :</span>Women , T-Shirt, Crop Top</p>
        <p className="ProductDisplay-right-category"><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
