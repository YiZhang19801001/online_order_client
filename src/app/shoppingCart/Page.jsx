import React, { useCallback, useState } from "react";
import { useMappedState } from "redux-react-hook";
import Icon from "./Icon";
import Cart from "./Cart";
export default () => {
  // Declare your memoized mapState function
  const mapState = useCallback(
    ({ shoppingCartList }) => ({ shoppingCartList }),
    []
  );
  const [showCart, setShowCart] = useState(false);
  // Get data from and subscribe to the store
  const { shoppingCartList } = useMappedState(mapState);

  return (
    <div className="component-shopping-cart">
      <Icon cart={shoppingCartList} setShowCart={setShowCart} />
      {showCart && <Cart cart={shoppingCartList} />}
    </div>
  );
};
