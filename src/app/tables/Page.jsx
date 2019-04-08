import React, { useCallback, useState } from "react";
import { useMappedState } from "redux-react-hook";
import { getTables } from "./hooks";
import TableCard from "./TableCard";
import Header from "./Header";
import Modal from "./Modal";
const Page = () => {
  const [filter, setFilter] = useState("all");
  const [modal, setModal] = useState(null);
  getTables(filter);

  // Declare your memoized mapState function
  const mapState = useCallback(
    state => ({
      tables: state.tables
    }),
    []
  );

  const openModal = (table_id, current_order_id) => {
    setModal(
      <Modal
        table_id={table_id}
        current_order_id={current_order_id}
        close={() => {
          setModal(null);
        }}
      />
    );
  };
  // Get data from and subscribe to the store
  const { tables } = useMappedState(mapState);

  if (!tables) {
    return <div>loading...</div>;
  }
  return (
    <div className="component-tables">
      <Header setFilter={setFilter} />
      {modal}
      {tables.map(table => {
        return (
          <TableCard
            {...table}
            key={`table${table.table_id}`}
            open={openModal}
          />
        );
      })}
    </div>
  );
};

export default Page;
