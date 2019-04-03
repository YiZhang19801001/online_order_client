import { useState, useEffect } from "react";
import { api } from "../../../_helpers";

export const getTables = () => {
  console.log("getTables hook is called");

  const [tables, setTables] = useState([]);

  useEffect(() => {
    callApi(setTables);
  }, []);

  return tables;
};

const callApi = async setTables => {
  const response = await api.get("/tables");
  setTables(response.data.tables);
};
