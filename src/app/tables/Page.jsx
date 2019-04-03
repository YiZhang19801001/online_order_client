import React from "react";
import { getTables } from "./hooks";
import TableCard from "./TableCard";

const Page = () => {
  const tables = getTables();

  if (!tables) {
    return <div>loading...</div>;
  }
  return (
    <div className="component-tables">
      {tables.map(table => {
        return <TableCard {...table} key={`table${table.table_id}`} />;
      })}
    </div>
  );
};

export default Page;
