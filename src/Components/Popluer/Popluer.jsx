import React from 'react'
import "./pop.css";
import dataP from "../Assets/data"
import Item from "../Item/Item"
const Popluer = () => {
  return (
    <div className="populer">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {dataP.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popluer