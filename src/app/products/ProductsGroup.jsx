import React from "react";
import ProductCard from "./ProductCard";

const ProductsGroup = ({ group }) => {
  return (
    <div>
      <div>{group.category}</div>
      {renderProducts(group.products)}
    </div>
  );
};

const renderProducts = products => {
  return products.map(product => {
    return (
      <ProductCard product={product} key={`product${product.product_id}`} />
    );
  });
};

export default ProductsGroup;
