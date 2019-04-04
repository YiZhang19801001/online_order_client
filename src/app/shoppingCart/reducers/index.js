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
        return [...newState, { ...action.product, quantity: 1 }];
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
    default:
      return state;
  }
};
