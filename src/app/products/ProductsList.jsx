import React from "react";
import ProductsGroup from "./ProductsGroup";
import { useProducts } from "./hooks";

const ProductsList = () => {
  const products = useProducts();
  if (products.length === 0) {
    return <h2>loading...</h2>;
  }
  return products.map(group => {
    return (
      <ProductsGroup group={group} key={`productGroup${group.category}`} />
    );
  });
};

export default ProductsList;
