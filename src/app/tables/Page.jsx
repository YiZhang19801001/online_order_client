import React, { useCallback, useState } from "react";
import { useMappedState } from "redux-react-hook";
import { getTables } from "./hooks";
import TableCard from "./TableCard";
import Header from "./Header";
const Page = () => {
  const [filter, setFilter] = useState("all");

  getTables(filter);

  // Declare your memoized mapState function
  const mapState = useCallback(
    state => ({
      tables: state.tables
    }),
    []
  );

  // Get data from and subscribe to the store
  const { tables } = useMappedState(mapState);

  if (!tables) {
    return <div>loading...</div>;
  }
  return (
    <div className="component-tables">
      <Header setFilter={setFilter} />
      {tables.map(table => {
        return <TableCard {...table} key={`table${table.table_id}`} />;
      })}
    </div>
  );
};

export default Page;
