import React from "react";

export default ({ title, className, toggle, quantity }) => {
  return (
    <div className={className} onClick={toggle}>
      <span>{title}</span>
      <span>{quantity}</span>
    </div>
  );
};
