import React from "react";
import ProductsList from "./ProductsList";
const Page = ({ toggleHeader }) => {
  return (
    <div className="component-products">
      <ProductsList toggleHeader={toggleHeader} />
    </div>
  );
};

export default Page;
