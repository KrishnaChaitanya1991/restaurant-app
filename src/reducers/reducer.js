import { combineReducers } from "redux";

import moneyEarned from "./money_earned";
import selectedTable from "./selected_table";
import tableData from "./table_data";
import tableStatusData from "./table_status_data";

const reducer = combineReducers({
  moneyEarned,
  selectedTable,
  tableData,
  tableStatusData
});

export default reducer;
