import { SELECT_TABLE } from "../constants/constant";

const selectedTable = (state = null, action) => {
  switch (action.type) {
    case SELECT_TABLE:
      if (state === action.tableId) return null;
      else return action.tableId;
    default:
      return state;
  }
};

export default selectedTable;
