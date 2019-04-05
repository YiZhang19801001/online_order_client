import React from "react";

export default ({ onSubmit }) => {
  const lables = { button_confirm: `确定` }; //!fake data

  return (
    <div className="footer">
      <button onClick={onSubmit}>{lables.button_confirm}</button>
    </div>
  );
};
