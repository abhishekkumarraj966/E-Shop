import React from "react";
import "./Cartitems.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

export const Cartitems = () => {
  const { getTotalCartAmount,all_product, cardItems, removFromCard } = useContext(ShopContext);

  return (
    <div className="Cartitems">
      <div className="cartitems-fromat-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product && Array.isArray(all_product) ? (
        all_product.map((e) => {
          // Ensure that e is defined and has necessary properties
          if (
            e &&
            e.id &&
            cardItems &&
            cardItems[e.id] !== undefined &&
            cardItems[e.id] > 0
          ) {
            return (
              <div key={e.id} className="">
                <div className="cartitems-fromat cartitems-fromat-main">
                  <img src={e.image} alt="" className="carticon-product-icon" />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="cartitems-quantity">
                    {cardItems[e.id]}
                  </button>
                  <p>${e.new_price * cardItems[e.id]}</p>
                  <img
                    className="cartitems-remove-icon"
                    src={remove_icon}
                    onClick={() => {
                      removFromCard(e.id);
                    }}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          } else {
            return null;
          }
        })
      ) : (
        <p>No products in the cart.</p>
      )}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals </h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtatal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>if you  have a promo code Enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
