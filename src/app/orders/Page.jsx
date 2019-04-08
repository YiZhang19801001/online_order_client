import React, { useState } from "react";
import { Products } from "../products";
import Header from "./Header";

const Page = props => {
  const { table_id } = props.match.params;
  const [displayHeader, setDisplayHeader] = useState(true);
  return (
    <div className={`component-orders ${displayHeader ? "" : "hide"}`}>
      <Header table_id={table_id} {...props} show={displayHeader} />
      <Products
        toggleHeader={value => {
          setDisplayHeader(value);
        }}
      />
    </div>
  );
};

export default Page;
