import React, { useCallback } from "react";

import { useMappedState } from "redux-react-hook";
import { useProducts } from "./hooks";
import CategoryCard from "./CategoryCard";
import ListOfProducts from "./ListOfProducts";

const ProductsList = ({ toggleHeader }) => {
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
      <ListOfProducts products={products} toggleHeader={toggleHeader} />
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

export default ProductsList;
