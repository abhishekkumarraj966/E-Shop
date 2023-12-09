import React from 'react';
import './Cartitems.css';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

export const Cartitems = () => {
  const { all_product, cartItems, removeFromCard } = useContext(ShopContext);

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
          if (e && e.id && cartItems && cartItems[e.id] !== undefined && cartItems[e.id] > 0) {
            return (
              <div key={e.id} className="">
                <div className="cartitems-fromat">
                  <img src={e.image} alt="" className="carticon-product-icon" />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="cartitems-quantity">{cartItems[e.id]}</button>
                  <p>{e.new_price * cartItems[e.id]}</p>
                  <img
                    src={remove_icon}
                    onClick={() => {
                      removeFromCard(e.id);
                    }}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          } else {
            return null; // Skip rendering if necessary properties are not available
          }
        })
      ) : (
        <p>No products in the cart.</p>
      )}
    </div>
  );
};

export default Cartitems;
