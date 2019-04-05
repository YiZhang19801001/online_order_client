import React, { useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import OrderItemCard from "./OrderItemCard";
import ConfirmFooter from "./ConfirmFooter";
import { api } from "../../_helpers";
export default ({ cart, close, link_id }) => {
  const dispatch = useDispatch();
  // const mapState = useCallback(state=>state.link_id,[]);
  // const state = useMappedState(mapState);
  const submitShoppingCart = async () => {
    const response = await api.post("orders", { cart, link_id });
    dispatch({ type: "getCart", cart: response.data.cart });
    close();
  };
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
        <ConfirmFooter onSubmit={submitShoppingCart} />
      </div>
    </div>
  );
};
