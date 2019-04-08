import React from "react";
import { ShoppingCart } from "../shoppingCart";
import { history } from "../../_helpers";

export default props => {
  const { table_id, show } = props;
  const labels = { table_no_prefix: `桌号` }; //!fake data
  return (
    <div className={`header ${show ? "" : "hide"}`}>
      <i
        className="material-icons"
        onClick={() => {
          history.push(`${process.env.PUBLIC_URL}/tables`);
        }}
      >
        arrow_back_ios
      </i>
      <div>{`${labels.table_no_prefix} ${table_id}`}</div>
      <ShoppingCart {...props} />
    </div>
  );
};
