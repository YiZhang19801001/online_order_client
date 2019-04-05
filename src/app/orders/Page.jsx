import React from "react";
import { Products } from "../products";
import Header from "./Header";
const Page = props => {
  const { table_id } = props.match.params;
  return (
    <div className="component-orders">
      <Header table_id={table_id} {...props} />
      <Products />
    </div>
  );
};

export default Page;
