import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import reducer from "./reducers/reducer";
import addTableItem from "./actions/add_table_item";
import deleteTableItem from "./actions/delete_table_item";
import incrementMoneyEarned from "./actions/increment_money_earned";
import selectTable from "./actions/select_table";
import toggleTable from "./actions/toggle_table";

import "./styles.css";

console.log("---");
let store = createStore(reducer);
console.log(store.getState());
const getSelectedTable = () => {
  var state = store.getState();
  return state.selectedTable;
};

const getAvailableTables = () => {
  var state = store.getState();
  var tablesAvailable = 0;
  console.log("state ");
  for (let i = 0; i < state.tableStatusData.length; i++) {
    if (state.tableStatusData[i] === false) tablesAvailable++;
  }
  return tablesAvailable;
};
const getTableStatusData = () => {
  var state = store.getState();
  return state.tableStatusData;
};

const getTableItems = () => {
  var state = store.getState();

  if (getSelectedTable() === null) var tableItems = [];
  else var tableItems = state.tableData[getSelectedTable()];
  return tableItems;
};

const getTotalBill = () => {
  var tableItems = getTableItems();
  var totalBill = 0;
  for (let i = 0; i < tableItems.length; i++) {
    totalBill += tableItems[i].price;
  }
  return totalBill;
};

const getMoneyEarned = () => {
  var state = store.getState();
  return state.moneyEarned;
};

const checkOut = () => {
  console.log("checking out");
  var totalBill = getTotalBill();
  store.dispatch(incrementMoneyEarned(totalBill));
  store.dispatch(toggleTable(getSelectedTable()));
};

store.subscribe(() => {
  console.log(`Selected Table: ${getSelectedTable()}`);
  console.log(`Tables Available: ${getAvailableTables()} / 16`);
  console.log(`Table Checked In Status: ${getTableStatusData()}`);
  console.log(`Selected Table Items List:`, getTableItems());
  console.log(`Selected Table Bill: $${getTotalBill()}`);
  console.log(`Total Money Earned: $${getMoneyEarned()}`);
  console.log();
});

//test dispatched actions

//select and toggle table 0, add items
//select and toggle table 1, add items
//check out current selected table
//select table 0
store.dispatch(selectTable(0));
store.dispatch(toggleTable(0));
store.dispatch(addTableItem("apples", 2, 0));
store.dispatch(addTableItem("bananas", 3, 0));
store.dispatch(deleteTableItem(0, 1));

store.dispatch(selectTable(1));
store.dispatch(toggleTable(1));
store.dispatch(addTableItem("apples", 2, 1));
store.dispatch(addTableItem("bananas", 3, 1));
store.dispatch(addTableItem("carrots", 4, 1));
checkOut();
store.dispatch(selectTable(0));
// store.dispatch(selectTable(1));

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
