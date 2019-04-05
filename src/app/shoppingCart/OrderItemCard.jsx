import React from "react";
import { useDispatch } from "redux-react-hook";
import ControlPanel from "./ControlPanel";

const OrderItemCard = ({ item }) => {
  const { name, quantity, completed, order_product_id } = item;

  const dispatch = useDispatch();

  const checkOrderItem = () => {
    if (!order_product_id) {
      return;
    }
    dispatch({ type: "check", order_product_id });
  };

  return (
    <div className="order-item">
      {order_product_id && (
        <input type="checkbox" checked={completed} onChange={checkOrderItem} />
      )}
      <div
        className={`information ${!completed ? "" : "cross"}`}
        onClick={checkOrderItem}
      >
        {name} x {quantity}
      </div>
      {!order_product_id && <ControlPanel orderItem={item} />}
    </div>
  );
};

export default OrderItemCard;
