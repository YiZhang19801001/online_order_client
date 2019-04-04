import React from "react";
import ProductCard from "./ProductCard";
import { Element } from "react-scroll";

const ProductsGroup = ({ products, category }) => {
  return (
    <Element
      className="product-group"
      key={`productGroup${category}`}
      name={`nav${category}`}
    >
      <h3>{category}</h3>
      {renderProducts(products)}
    </Element>
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
