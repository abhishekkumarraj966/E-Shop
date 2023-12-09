import React, {createContext, useState} from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext=createContext(null);

const getDefoultCard=()=>{
    let card={};
    for (let index = 0; index < all_product.length+1; index++) {
        card[index]=0;            
    }
    return card;

}

const ShopContextProvider=(props)=>{
    const [cardItems,setCartItems]=useState(getDefoultCard());
   
    const addToCard=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cardItems);
    }
    const removFromCard=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const contextValue={ all_product,cardItems,addToCard,removFromCard};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;