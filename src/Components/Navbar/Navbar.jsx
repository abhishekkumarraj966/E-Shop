import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";
import logo from "../Assets/logo.png";
import card from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const{getTotalCartItems}=useContext(ShopContext);

  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src={logo} alt="navlogo"/>
        <p>E-SHOP</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{textDecoration:'none'}} to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{textDecoration:'none'}} to="/mens">Men</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link style={{textDecoration:'none'}}  to="/women">Women</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{textDecoration:'none'}}  to="/kids">Kids</Link>
            {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-logo-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/card">
          <img src={card} alt="card logo" />
        </Link>
        <div className="nav-card-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
