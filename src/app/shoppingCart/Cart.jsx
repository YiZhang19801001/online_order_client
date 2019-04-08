import React from "react";
import { useDispatch } from "redux-react-hook";
import ConfirmFooter from "./ConfirmFooter";
import OrderingList from "./OrderingList";
import OrderedList from "./OrderedList";
import { api } from "../../_helpers";

export default ({ cart, close, link_id, list }) => {
  const dispatch = useDispatch();

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
        <div className="body">
          <OrderingList cart={cart} />
          <OrderedList list={list} />
        </div>

        <ConfirmFooter onSubmit={submitShoppingCart} />
      </div>
    </div>
  );
};
