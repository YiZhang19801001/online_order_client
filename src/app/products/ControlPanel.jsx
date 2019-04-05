import React from "react";
import { useDispatch } from "redux-react-hook";

export default ({ quantity, product }) => {
  const flag = quantity > 0;
  const dispatch = useDispatch();
  return (
    <div className={`control-panel ${!flag ? "short" : ""}`}>
      {flag && (
        <>
          <div
            className="button decrese"
            onClick={() => {
              dispatch({ type: "decrease", product });
            }}
          >
            <i className="material-icons">remove_circle</i>
          </div>
          <div className="quantity">
            <span>{quantity}</span>
          </div>
        </>
      )}
      <div
        className="button increse"
        onClick={() => {
          dispatch({ type: "add", product });
        }}
      >
        <i className="material-icons">add_circle</i>
      </div>
    </div>
  );
};
