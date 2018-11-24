import { TOGGLE_TABLE } from "../constants/constant";

const toggleTable = tableId => {
  return {
    type: TOGGLE_TABLE,
    tableId: tableId
  };
};

export default toggleTable;
