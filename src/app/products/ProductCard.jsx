import React, { useCallback } from "react";
import { useMappedState } from "redux-react-hook";

import ControlPanel from "./ControlPanel";

const ProductCard = ({ product }) => {
  const { name, image, price } = product;

  const mapState = useCallback(
    ({ shoppingCartList }) => ({ shoppingCartList }),
    []
  );

  // Get data from and subscribe to the store
  const { shoppingCartList } = useMappedState(mapState);

  const calculateQuantity = () => {
    return shoppingCartList.reduce((sum, orderItem) => {
      if (orderItem.product_id === product.product_id) {
        return sum + orderItem.quantity;
      }
      return sum;
    }, 0);
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="information">
        <div className="name">{name}</div>
        <div className="price-control">
          <div className="price">${price}</div>
          <ControlPanel quantity={calculateQuantity()} product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
