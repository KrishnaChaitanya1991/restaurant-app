import { DELETE_TABLE_ITEM } from "../constants/constant.js";

const deleteTableItem = (tableId, itemIndex) => {
  return {
    type: DELETE_TABLE_ITEM,
    tableId: tableId,
    itemIndex: itemIndex
  };
};

export default deleteTableItem;
