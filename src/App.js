import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Card from "./Pages/Card";
import LoginSignup from "./Pages/LoginSignup";

import Shop from "./Pages/Shop";
import Footer from "./Components/Footer/Footer";
import men_benner from './Components/Assets/banner_mens.png'
import women_benner from './Components/Assets/banner_women.png'
import kide_benner from './Components/Assets/banner_kids.png'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Shop />} />
          <Route path="/mens" element={<ShopCategory  banner={men_benner} category="mens" />} />
          <Route path="/women" element={<ShopCategory banner={women_benner} category="women" />} />
          <Route path="/kids" element={<ShopCategory  banner={kide_benner}category="kids" />} />


          <Route path="/product" element={<Product />} />
          <Route path='/product:/Id' element={<Product />} />

          <Route path="/product/:id" element={<Product />} />

          <Route path="/card" element={<Card />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
