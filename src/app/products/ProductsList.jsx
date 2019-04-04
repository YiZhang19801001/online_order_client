import React, { useCallback } from "react";
import ProductsGroup from "./ProductsGroup";
import ProductCard from "./ProductCard";
import { useMappedState } from "redux-react-hook";
import { useProducts } from "./hooks";
import { Element } from "react-scroll";
import CategoryCard from "./CategoryCard";

const ProductsList = () => {
  useProducts();

  // Declare your memoized mapState function
  const mapState = useCallback(({ products }) => ({ products }), []);

  // Get data from and subscribe to the store
  const { products } = useMappedState(mapState);

  if (products.length === 0) {
    return <h2>loading...</h2>;
  }
  return (
    <>
      <div className="categories-list">{renderCategories(products)}</div>
      <div className="products-list" id="product-list">
        {renderProducts(products)}
      </div>
    </>
  );
};

const renderCategories = products => {
  return products.map(category => {
    return (
      <CategoryCard
        key={`categoryListItem${category.category}`}
        {...category}
      />
    );
  });
};

const renderProducts = products => {
  return products.map(group => {
    return <ProductsGroup {...group} key={`productGroup${group.category}`} />;
  });
};

export default ProductsList;
