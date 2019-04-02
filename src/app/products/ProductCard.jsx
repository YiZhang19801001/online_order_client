import React from "react";

const ProductCard = ({ product }) => {
  const { product_id, name, image, price } = product;
  return (
    <div key={`product${product_id}`}>
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>${price}</p>
    </div>
  );
};

export default ProductCard;
