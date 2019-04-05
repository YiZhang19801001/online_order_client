import { cusSorting } from "../../../_helpers";

export default (state = [], action) => {
  let newState = [];

  switch (action.type) {
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
