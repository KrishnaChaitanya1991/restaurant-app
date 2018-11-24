// to maintain checked in status for each table
import { TOGGLE_TABLE } from "../constants/constant";

let initialData = [];
for (let i = 0; i < 16; i++) {
  initialData.push(false);
}
const tableStatusData = (state = initialData, action) => {
  let stateCopy = [];
  for (let i = 0; i < 16; i++) {
    stateCopy.push(state[i]);
  }
  switch (action.type) {
    case TOGGLE_TABLE:
      console.log("table status data", action);
      stateCopy[action.tableId] = !stateCopy[action.tableId];
      return stateCopy;
    default:
      return state;
  }
};

export default tableStatusData;
