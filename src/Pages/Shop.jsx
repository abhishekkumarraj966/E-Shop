import React from 'react';
import Hero from "../Components/Hero/Hero";
import Popluer from "../Components/Popluer/Popluer";
import Offers from "../Components/Offers/Offers";
import NewColl   from "../Components/NewCollections/NewColl"; 
import NewsLet   from "../Components/NewsLetter/NewsLet"; 
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popluer/>
      <Offers />
      <NewColl />
      <NewsLet/>
    </div>
  );
}

export default Shop;
