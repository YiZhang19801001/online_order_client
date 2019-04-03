const reducer = (state = [], action) => {
  switch (action.type) {
    case "updated":
      return state.map(table => {
        if (table.table_id === action.table.table_id) {
          return {
            ...table,
            table_status: action.table.table_status,
            current_order_id: action.table.current_order_id
          };
        }
      });

    default:
      return state;
  }
};

export default reducer;
