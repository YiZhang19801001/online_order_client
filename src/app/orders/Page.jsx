import React from "react";

const Page = ({ match }) => {
  const { table_id } = match.params;
  return <h1>Order Page For Table {table_id}</h1>;
};

export default Page;
