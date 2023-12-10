import React from 'react'
import "./footer.css";
import footer from'../Assets/logo_big.png'
import insta from '../Assets/instagram_icon.png'
import pint from '../Assets/pintester_icon.png'
import whap from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer} alt="" />
            <p>T-BAJAR</p>
        </div>
        <ul className="footer-link">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={insta}alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pint}alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whap}alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 -All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer