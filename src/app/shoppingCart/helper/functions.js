export const calculateQuantity = cart => {
  return cart.reduce((sum, orderItem) => {
    return sum + orderItem.quantity;
  }, 0);
};
