import React from "react";

const TableCard = ({ table_id, size, table_status, current_order_id }) => {
  const labels = { empty_order_id: `无订单分配`, table_size_suffix: `人台` };

  return (
    <div className={`table-card ${getClassName(table_status)}`}>
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
