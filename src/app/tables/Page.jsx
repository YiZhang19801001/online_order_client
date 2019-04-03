import React, { useState } from "react";
import { getTables } from "./hooks";
import TableCard from "./TableCard";
import Header from "./Header";
const Page = () => {
  const [params, setParams] = useState("all");
  const tables = getTables(params);

  if (!tables) {
    return <div>loading...</div>;
  }
  return (
    <div className="component-tables">
      <Header setParams={setParams} />
      {tables.map(table => {
        return <TableCard {...table} key={`table${table.table_id}`} />;
      })}
    </div>
  );
};

export default Page;
