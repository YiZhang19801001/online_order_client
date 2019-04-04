import React from "react";

const HeadButton = ({ label, method, className, setFilter, setClassNames }) => {
  const clickButton = () => {
    setClassNames({
      ...{
        all: false,
        active: false,
        available: false
      },
      [method]: true
    });
    setFilter(method);
  };

  return (
    <div className={className} onClick={clickButton}>
      {label}
    </div>
  );
};

export default HeadButton;
