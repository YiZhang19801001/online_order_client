import React, { useState } from "react";
import OrderItemCard from "./OrderItemCard";
import Header from "./Header";
import { calculateQuantity } from "./helper";
export default ({ list }) => {
  const labels = { ordered_list_title: `已点菜品` }; //!fake data
  const [showDetails, setShowDetails] = useState(true);
  return (
    <div className={`ordered-list`}>
      <Header
        className={`header ${showDetails ? "detail" : ""}`}
        title={labels.ordered_list_title}
        toggle={() => {
          setShowDetails(!showDetails);
        }}
        quantity={calculateQuantity(list)}
      />

      {showDetails &&
        list.map(orderItem => {
          return (
            <OrderItemCard
              item={orderItem}
              key={`orderItem${orderItem.order_product_id}`}
            />
          );
        })}
    </div>
  );
};
