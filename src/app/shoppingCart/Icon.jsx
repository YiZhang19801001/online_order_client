import React from "react";
import { calculateQuantity } from "./helper";
export default ({ cart, setShowCart }) => {
  return (
    <div className="icon-wrapper">
      <i
        className="material-icons"
        onClick={() => {
          setShowCart(true);
        }}
      >
        shopping_cart
      </i>

      <span>{calculateQuantity(cart)}</span>
    </div>
  );
};
