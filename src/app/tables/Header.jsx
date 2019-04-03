import React, { useState } from "react";

const Header = ({ setParams }) => {
  const labels = { all: "全部", active: "已开台", available: "空台" };

  const [classNames, setClassNames] = useState({
    all: true,
    active: false,
    available: false
  });

  const clickButton = value => {
    switch (value) {
      case "all":
        setClassNames({
          all: !classNames.all,
          active: false,
          available: false
        });
        setParams("all");
        break;
      case "active":
        setClassNames({
          all: false,
          active: !classNames.active,
          available: false
        });
        setParams("active");

        break;
      case "available":
        setClassNames({
          all: false,
          active: false,
          available: !classNames.available
        });
        setParams("available");

        break;
      default:
        break;
    }
  };
  return (
    <div className="header">
      <div
        className={`button ${getClass(classNames.all)}`}
        onClick={() => {
          clickButton("all");
        }}
      >
        {labels.all}
      </div>
      <div
        className={`button ${getClass(classNames.active)}`}
        onClick={() => {
          clickButton("active");
        }}
      >
        {labels.active}
      </div>
      <div
        className={`button ${getClass(classNames.available)}`}
        onClick={() => {
          clickButton("available");
        }}
      >
        {labels.available}
      </div>
    </div>
  );
};

const getClass = value => {
  return value ? "active" : "";
};

export default Header;
