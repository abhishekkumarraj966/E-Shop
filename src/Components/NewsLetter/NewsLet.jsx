import React from "react";
import "./newslet.css";
const NewsLet = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive offers on Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email Id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLet;
