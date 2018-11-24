import { ADD_TABLE_ITEM } from "../constants/constant.js";

const addTableItem = (name, price, tableId) => {
  return {
    type: ADD_TABLE_ITEM,
    tableId: tableId,
    item: {
      name: name,
      price: price
    }
  };
};

export default addTableItem;
