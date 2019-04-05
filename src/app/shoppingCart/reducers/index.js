import { cusSorting } from "../../../_helpers";

export const shoppingCartList = (state = [], action) => {
  let newState = [];
  switch (action.type) {
    case "add":
      let isExisting = false;
      newState = state.map(orderItem => {
        if (orderItem.product_id === action.product.product_id) {
          isExisting = true;
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        } else {
          return orderItem;
        }
      });
      if (!isExisting) {
        return [
          ...newState,
          { ...action.product, quantity: 1, completed: false }
        ];
      }
      return newState;

    case "decrease":
      newState = state.map(orderItem => {
        if (orderItem.product_id === action.product.product_id) {
          return { ...orderItem, quantity: orderItem.quantity - 1 };
        } else {
          return orderItem;
        }
      });
      newState = newState.filter(orderItem => orderItem.quantity !== 0);
      return newState;
    case "increase":
      newState = state.map(orderItem => {
        if (orderItem.product_id === action.product.product_id) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        } else {
          return orderItem;
        }
      });
      return newState;
    case "check":
      newState = state.map(orderItem => {
        if (orderItem.order_product_id === action.order_product_id) {
          return { ...orderItem, completed: !orderItem.completed };
        } else {
          return orderItem;
        }
      });

      return cusSorting("completed", 1, newState);
    case "getCart":
      return action.cart;
    default:
      return state;
  }
};
