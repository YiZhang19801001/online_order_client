const reducer = (state = [], action) => {
  switch (action.type) {
    case "getTables":
      return action.tables;
    case "updateTables":
      return state.map(table => {
        if (table.table_id === action.table.table_id) {
          return {
            ...table,
            table_status: action.table.table_status,
            current_order_id: action.table.current_order_id
          };
        } else {
          return table;
        }
      });

    default:
      return state;
  }
};

export default reducer;
