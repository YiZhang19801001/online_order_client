import React from "react";
import { updateTables } from "./hooks";
import { useDispatch } from "redux-react-hook";

const TableCard = ({ table_id, size, table_status, current_order_id }) => {
  const labels = { empty_order_id: `无订单分配`, table_size_suffix: `人台` };

  const dispatch = useDispatch();

  const handleClick = () => {
    if (parseInt(table_status) === 0) {
      updateTables(table_id, "open_table");
    } else {
      updateTables(table_id, "close_table");
    }
  };
  return (
    <div
      className={`table-card ${getClassName(table_status)}`}
      onClick={handleClick}
    >
      <span className="table_id">{table_id}</span>
      <span className="table_size">
        {`${size} ${labels.table_size_suffix}`}{" "}
      </span>
      <span className="order_id">
        {current_order_id || current_order_id === ""
          ? current_order_id
          : labels.empty_order_id}
      </span>
    </div>
  );
};

const getClassName = value => {
  switch (parseInt(value)) {
    case 1:
      return "active";
    case 0:
      return "available";
    default:
      return "";
  }
};

export default TableCard;
