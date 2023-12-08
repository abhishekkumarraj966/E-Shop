import React from "react";
import "./newcoll.css";
import new_colec from "../Assets/new_collections";
import Item from "../Item/Item";
const NewColl = () => {
  return (
    <div className="new-collection">
      <h1>NEW COLLECTIONS</h1>
      <he />
      <div className="collection">
        {new_colec.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewColl;
