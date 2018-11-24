import {
  ADD_TABLE_ITEM,
  DELETE_TABLE_ITEM,
  TOGGLE_TABLE
} from "../constants/constant";

// tableData stores items data for each tableId
let initialData = [];
for (let i = 0; i < 16; i++) {
  initialData.push([]);
}
const tableData = (state = initialData, action) => {
  let stateCopy = [];
  for (let i = 0; i < 16; i++) {
    stateCopy.push(state[i].slice());
  }
  switch (action.type) {
    case ADD_TABLE_ITEM:
      console.log("Adding item to table", action.tableId, action.item);
      stateCopy[action.tableId].push(action.item);
      return stateCopy;
    case DELETE_TABLE_ITEM:
      stateCopy[action.tableId].splice(action.itemIndex, 1);
      return stateCopy;
    case TOGGLE_TABLE:
      console.log("toogle table", action);
      stateCopy[action.tableId] = [];
      return stateCopy;
    default:
      return state;
  }
};

export default tableData;
