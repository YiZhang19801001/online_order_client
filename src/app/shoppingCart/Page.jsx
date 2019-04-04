import React, { useCallback } from "react";
import { useMappedState } from "redux-react-hook";

export default () => {
  // Declare your memoized mapState function
  const mapState = useCallback(
    ({ shoppingCartList }) => ({ shoppingCartList }),
    []
  );

  // Get data from and subscribe to the store
  const { shoppingCartList } = useMappedState(mapState);
  console.log({ shoppingCartList });

  return <div className="component-shopping-cart">shoppingCartList</div>;
};
