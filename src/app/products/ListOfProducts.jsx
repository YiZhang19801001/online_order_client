import React, { useEffect } from "react";
import ProductsGroup from "./ProductsGroup";

export default ({ products, toggleHeader }) => {
  let preScrollPosition = 0;

  useEffect(() => {
    const dom = document.querySelector("#product-list");
    dom.addEventListener("scroll", () => {
      if (preScrollPosition > dom.scrollTop) {
        console.log("up");
        toggleHeader(true);
      } else {
        toggleHeader(false);
        console.log("down");
      }
      preScrollPosition = dom.scrollTop;
    });
  }, []);

  return (
    <div className="products-list" id="product-list">
      {renderProducts(products)}
    </div>
  );
};

const renderProducts = products => {
  return products.map(group => {
    return (
      <ProductsGroup
        {...group}
        key={`productGroup${group.category}`}
        onScroll={() => {
          console.log("onScroll worked");
        }}
      />
    );
  });
};
