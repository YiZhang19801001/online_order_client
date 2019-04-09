import React, { useCallback, useState, useEffect } from "react";
import { useMappedState, useDispatch } from "redux-react-hook";
import queryString from "query-string";
import Icon from "./Icon";
import Cart from "./Cart";
import { api } from "../../_helpers";
export default ({ location }) => {
  const { link_id } = queryString.parse(location.search);

  const dispatch = useDispatch();

  const [showCart, setShowCart] = useState(false);

  // render ordered items if existing any
  useEffect(() => {
    const fn = async () => {
      const response = await api.get("/orders", { params: { link_id } });
      dispatch({ type: "getCart", cart: response.data.cart });
    };
    if (link_id) {
      fn();
      setShowCart(true);
    } else {
      dispatch({ type: "getCart", cart: [] });
    }
  }, []);

  // Declare your memoized mapState function
  const mapState = useCallback(
    ({ shoppingCartList, orderedList }) => ({ shoppingCartList, orderedList }),
    []
  );

  // Get data from and subscribe to the store
  const { shoppingCartList, orderedList } = useMappedState(mapState);
  // * try to initial the value for showCart

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
          list={orderedList}
        />
      )}
    </div>
  );
};

const getFlag = list => {
  console.log("get flag function been called with: ", list);

  let flag = false;
  useEffect(() => {
    if (list.length > 0) {
      flag = true;
    }
  }, [list.length]);

  return flag;
};
