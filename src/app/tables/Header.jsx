import React, { useState } from "react";
import Button from "./HeadButton";
const Header = ({ setFilter }) => {
  const labels = { all: "全部", active: "已开台", available: "空台" }; //!fake data

  const [classNames, setClassNames] = useState({
    all: true,
    active: false,
    available: false
  });

  const methods = ["all", "active", "available"];

  return (
    <div className="header">
      {methods.map(method => {
        return (
          <Button
            key={method}
            method={method}
            label={labels[method]}
            setClassNames={setClassNames}
            setFilter={setFilter}
            className={getClass(classNames[method])}
          />
        );
      })}
    </div>
  );
};

const getClass = value => {
  return value ? "button active" : "button";
};

export default Header;
