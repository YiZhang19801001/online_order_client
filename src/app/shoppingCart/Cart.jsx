import React from "react";

import OrderItemCard from "./OrderItemCard";

export default ({ cart, close }) => {
  return (
    <div className="cart" onClick={close}>
      <div
        className="content"
        onClick={e => {
          e.stopPropagation();
        }}
      >
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
