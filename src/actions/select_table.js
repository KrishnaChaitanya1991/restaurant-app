import { SELECT_TABLE } from "../constants/constant";

const selectTable = tableId => {
  return {
    type: SELECT_TABLE,
    tableId: tableId
  };
};

export default selectTable;
