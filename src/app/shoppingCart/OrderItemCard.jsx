import React from "react";
import { useDispatch } from "redux-react-hook";
import ControlPanel from "./ControlPanel";

const OrderItemCard = ({ item }) => {
  const { name, quantity, completed, product_id } = item;

  const dispatch = useDispatch();

  const checkOrderItem = () => {
    dispatch({ type: "check", product_id });
  };

  return (
    <div className="order-item">
      <input type="checkbox" checked={completed} onChange={checkOrderItem} />
      <div
        className={`information ${!completed ? "" : "cross"}`}
        onClick={checkOrderItem}
      >
        {name} x {quantity}
      </div>
      <ControlPanel orderItem={item} />
    </div>
  );
};

export default OrderItemCard;
