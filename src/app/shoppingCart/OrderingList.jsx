import React, { useState } from "react";
import OrderItemCard from "./OrderItemCard";
import Header from "./Header";
import { calculateQuantity } from "./helper";

export default ({ cart }) => {
  const labels = { ordering_list_title: `未确认菜品` }; //!fake data
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className={`cart-list`}>
      <Header
        className={`header ${showDetails ? "detail" : ""}`}
        title={labels.ordering_list_title}
        toggle={() => {
          setShowDetails(!showDetails);
        }}
        quantity={calculateQuantity(cart)}
      />
      {showDetails &&
        cart.map(orderItem => {
          return (
            <OrderItemCard
              item={orderItem}
              key={`orderItem${orderItem.product_id}`}
            />
          );
        })}
    </div>
  );
};
