import React from "react";
import { Products } from "../products";
import Header from "./Header";
import { ShoppingCart } from "../shoppingCart";
const Page = ({ match }) => {
  const { table_id } = match.params;
  return (
    <div className="component-orders">
      <Header table_id={table_id} />
      <Products />
      <ShoppingCart />
    </div>
  );
};

export default Page;
