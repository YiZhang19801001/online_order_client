import React from "react";

const OrderItemCard = ({ item }) => {
  console.log({ item });

  return (
    <div className="order-item">
      {item.name} x {item.quantity}
    </div>
  );
};

export default OrderItemCard;
