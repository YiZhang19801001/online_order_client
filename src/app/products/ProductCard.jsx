import React from "react";
import ControlPanel from "./ControlPanel";

const ProductCard = ({ product }) => {
  const { name, image, price } = product;
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="information">
        <div className="name">{name}</div>
        <div className="price-control">
          <div className="price">${price}</div>
          <ControlPanel quantity={0} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
