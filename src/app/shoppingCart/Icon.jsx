import React from "react";

export default ({ cart, setShowCart }) => {
  const calculateQuantity = () => {
    return cart.reduce((sum, orderItem) => {
      return sum + orderItem.quantity;
    }, 0);
  };
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

      <span>{calculateQuantity()}</span>
    </div>
  );
};
