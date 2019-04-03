import React, { useEffect } from "react";
import Routes from "./routes.js";
import { userChecking } from "./auth/hooks";
import "./App.css";

const App = () => {
  useEffect(() => {
    userChecking();
  }, []);
  return (
    <div className="component-app">
      <Routes />
    </div>
  );
};
export default App;
