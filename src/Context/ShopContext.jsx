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
        // console.log(cardItems);
    }
    const removFromCard=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cardItems) {
            if (cardItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cardItems[item];
            }
        }
        console.log(totalAmount);
        return totalAmount; 
    }
    
    const getTotalCartItems=()=>{
        let tatalItem=0;
        for(const item in cardItems){
            if(cardItems[item]>0){
                tatalItem+=cardItems[item]
            }
        }
        return tatalItem;
    }

    const contextValue={getTotalCartItems,getTotalCartAmount, all_product,cardItems,addToCard,removFromCard};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;