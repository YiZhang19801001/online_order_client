export const products = (state = [], action) => {
  switch (action.type) {
    case "getProducts":
      return action.products;

    default:
      return state;
  }
};
