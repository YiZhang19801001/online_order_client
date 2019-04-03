import React, { useState, useContext } from "react";
import { useDispatch, useMappedState, StoreContext } from "redux-react-hook";
import { getTables } from "./hooks";
import TableCard from "./TableCard";
import Header from "./Header";
const Page = () => {
  const store = useContext(StoreContext);
  console.log(store);

  // // Declare your memoized mapState function
  // const mapState = useCallback(
  //   state => ({
  //     tables: state.tables
  //   }),
  //   []
  // );
  // // Get data from and subscribe to the store
  // // const { canDelete, name } = useMappedState(mapState);
  // const setParams = () => {};
  // if (!tables) {
  //   return <div>loading...</div>;
  // }
  return (
    <div className="component-tables">
      abc
      {/* <Header setParams={setParams} />
      {tables.map(table => {
        return <TableCard {...table} key={`table${table.table_id}`} />;
      })} */}
    </div>
  );
};

export default Page;
