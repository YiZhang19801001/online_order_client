import React from "react";

const ProductCard = ({ product }) => {
  const { name, image, price } = product;
  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>${price}</p>
    </div>
  );
};

export default ProductCard;
