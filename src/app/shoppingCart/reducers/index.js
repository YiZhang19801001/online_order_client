export const shoppingCartList = (state = [], action) => {
  switch (action.type) {
    case "add":
      let isExisting = false;
      let newState = state.map(orderItem => {
        if (orderItem.product_id === action.product.product_id) {
          isExisting = true;
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        } else {
          return orderItem;
        }
      });
      if (!isExisting) {
        return [...newState, { ...action.product, quantity: 1 }];
      }
      return newState;

    case "decrease":
      break;
    case "increase":
      break;
    default:
      return state;
  }
};
