import React from "react";
import ProductCard from "./ProductCard";

const ProductsGroup = ({ group }) => {
  return (
    <div key={`productGroup${group.category}`}>
      <div>{group.category}</div>
      {renderProducts(group.products)}
    </div>
  );
};

const renderProducts = products => {
  return products.map(product => {
    return <ProductCard product={product} />;
  });
};

export default ProductsGroup;
