import React from "react";
import { useDispatch } from "redux-react-hook";

export default ({ orderItem }) => {
  const { quantity } = orderItem;
  const dispatch = useDispatch();
  return (
    <div className={`control-panel`}>
      <>
        <div
          className="button decrese"
          onClick={() => {
            dispatch({ type: "decrease", product: orderItem });
          }}
        >
          <i className="material-icons">remove_circle_outline</i>
        </div>
        <div className="quantity">
          <span>{quantity}</span>
        </div>
      </>

      <div
        className="button increse"
        onClick={() => {
          dispatch({ type: "increase", product: orderItem });
        }}
      >
        <i className="material-icons">add_circle_outline</i>
      </div>
    </div>
  );
};
