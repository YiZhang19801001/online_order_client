import { api } from "../_helpers";

export const updateTables = (table_id, method) => async dispatch => {
  const response = await api.put(`/tables/${table_id}`, { method });

  dispatch({ type: "updated", table: response.data.table });
};
