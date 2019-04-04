import React from "react";
import { Products } from "../products";
import Header from "./Header";
const Page = ({ match }) => {
  const { table_id } = match.params;
  return (
    <div className="component-orders">
      <Header table_id={table_id} />
      <Products />
    </div>
  );
};

export default Page;
