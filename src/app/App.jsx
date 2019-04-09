import React from "react";
import Routes from "./routes.js";
import { userChecking } from "./auth/hooks";
import "./App.css";

const App = () => {
  userChecking();
  return (
    <div className="component-app">
      <Routes />
    </div>
  );
};
export default App;
