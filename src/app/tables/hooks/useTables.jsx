import { useState, useEffect } from "react";
import { api } from "../../../_helpers";

export const getTables = (params = "all") => {
  console.log("getTables hook is called");

  const [tables, setTables] = useState([]);

  useEffect(() => {
    callApi(setTables, params);
  }, [params]);

  return tables;
};

const callApi = async (setTables, filter) => {
  const response = await api.get("/tables", { params: { filter } });
  setTables(response.data.tables);
};
