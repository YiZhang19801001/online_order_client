import React from "react";
import { history } from "../../_helpers";
export default ({ table_id, current_order_id, close }) => {
  const labels = { btn_nav_to_pay: "买单", btn_nav_to_order: "上菜或加单" };

  return (
    <div className="modal" onClick={close}>
      <div
        className="content"
        onClick={e => {
          e.preventDefault();
        }}
      >
        <button
          onClick={() => {
            setTimeout(() => {
              history.push(
                `${process.env.PUBLIC_URL}/checkout/${current_order_id}`
              );
            }, 300);
          }}
        >
          {labels.btn_nav_to_pay}
        </button>
        <button
          onClick={() => {
            setTimeout(() => {
              history.push(
                `${
                  process.env.PUBLIC_URL
                }/orders/${table_id}?link_id=${current_order_id}`
              );
            }, 300);
          }}
        >
          {labels.btn_nav_to_order}
        </button>
      </div>
    </div>
  );
};
