import React from "react";

import { useSelector } from "react-redux";
import MenuListItem from "./MenuListItem";
const CardDetails = () => {
  const list = useSelector((state) => state.cartReducer.carts);
  return (
    <div>
      <div className="row ">
        <h1>Your Cart</h1>
      </div>
      {list.map((item) => (
        <MenuListItem {...item} />
      ))}
    </div>
  );
};

export default CardDetails;
