import React from "react";
import { useDispatch } from "redux-react-hook";
import OrderItemCard from "./OrderItemCard";
import ConfirmFooter from "./ConfirmFooter";
import { api } from "../../_helpers";
export default ({ cart, close, link_id, list }) => {
  const dispatch = useDispatch();

  const submitShoppingCart = async () => {
    const response = await api.post("orders", { cart, link_id });
    dispatch({ type: "getCart", cart: response.data.cart });
    close();
  };

  const renderCart = () => {
    return (
      <div className="cart-list">
        {cart.map(orderItem => {
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

  const renderOrderedList = () => {
    return (
      <div className="ordered-list">
        {list.map(orderItem => {
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

  return (
    <div className="cart" onClick={close}>
      <div
        className="content"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {renderCart()}
        {renderOrderedList()}

        <ConfirmFooter onSubmit={submitShoppingCart} />
      </div>
    </div>
  );
};
