import { useEffect } from "react";
import { api, history } from "../../../_helpers";
import { useDispatch } from "redux-react-hook";

export const getTables = (filter = "all") => {
  console.log("getTables hook is called");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("getTables hook useEffect is called");

    callGetApi(dispatch, { filter });
  }, [filter]);
};

export const updateTables = async (dispatch, table_id, method) => {
  console.log("updateTables hook is called");

  const response = await api.put(`/tables/${table_id}`, { method });
  if (method === "open_table") {
    history.push(`/orders/${table_id}`);
  }
  dispatch({ type: "updateTables", table: response.data.table });
};

const callGetApi = async (dispatch, params) => {
  const response = await api.get("/tables", { params });

  dispatch({ type: "getTables", tables: response.data.tables });
};
