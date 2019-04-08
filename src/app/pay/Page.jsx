import React from "react";

export default ({ match }) => {
  const { current_order_id } = match.params;

  return (
    <div>
      <h1>current_order_id is : {current_order_id}</h1>
    </div>
  );
};
