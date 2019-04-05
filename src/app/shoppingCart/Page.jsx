import React, { useCallback, useState, useEffect } from "react";
import { useMappedState, useDispatch } from "redux-react-hook";
import queryString from "query-string";
import Icon from "./Icon";
import Cart from "./Cart";
import { api } from "../../_helpers";
export default ({ location }) => {
  const { link_id } = queryString.parse(location.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const fn = async () => {
      const response = await api.get("/orders", { params: { link_id } });
      dispatch({ type: "getCart", cart: response.data.cart });
    };
    if (link_id) {
      fn();
    } else {
      dispatch({ type: "getCart", cart: [] });
    }
  }, []);
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
      {showCart && (
        <Cart
          cart={shoppingCartList}
          close={() => {
            setShowCart(false);
          }}
          link_id={link_id}
        />
      )}
    </div>
  );
};
