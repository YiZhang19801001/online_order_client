import React from "react";
import { useDispatch } from "redux-react-hook";

const OrderItemCard = ({ item }) => {
  const { name, quantity, completed, product_id } = item;

  const dispatch = useDispatch();

  const checkOrderItem = () => {
    dispatch({ type: "check", product_id });
  };

  return (
    <div className="order-item" onClick={checkOrderItem}>
      <input type="checkbox" checked={completed} />
      <div className={`information ${!completed ? "" : "cross"}`}>
        {name} x {quantity}
      </div>
    </div>
  );
};

export default OrderItemCard;
