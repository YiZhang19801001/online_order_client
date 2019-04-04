import React from "react";

export default ({ quantity }) => {
  const flag = quantity > 0;
  return (
    <div className={`control-panel ${!flag ? "short" : ""}`}>
      {flag && (
        <>
          <div className="button decrese">
            <i className="material-icons">remove_circle</i>
          </div>
          <div className="quantity">
            <span>{quantity}</span>
          </div>
        </>
      )}
      <div className="button increse">
        <i className="material-icons">add_circle</i>
      </div>
    </div>
  );
};
