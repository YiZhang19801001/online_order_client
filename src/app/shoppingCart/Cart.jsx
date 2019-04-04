import React from "react";
import OrderItemCard from "./OrderItemCard";

export default ({ cart }) => {
  return (
    <div className="cart">
      <div className="content">
        {cart.map(orderItem => {
          return (
            <OrderItemCard
              item={orderItem}
              key={`orderItem${orderItem.product_id}`}
            />
          );
        })}
      </div>
    </div>
  );
};
